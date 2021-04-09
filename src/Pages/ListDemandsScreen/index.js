import React, { useState, useEffect } from 'react';
import { FaSistrix } from 'react-icons/fa';
import {
  Main, ScreenContainer, ScreenTitle, ScreenSearch, ScreenContentBox,
  ScreenHeader, ScreenList, Dropdown,
} from './Style';
import SearchInput from '../../Components/SearchInput';
import DemandData from '../../Components/DemandData';
import { getDemands } from '../../Services/Axios/demandsServices';
import { getSectors } from '../../Services/Axios/sectorServices';
import DropdownComponent from '../../Components/DropdownComponent';
import colors from '../../Constants/colors';

const ListDemandsScreen = () => {
  const [word, setWord] = useState();
  const [filterDemands, setFilterDemands] = useState([]);
  const [filterSector, setFilterSector] = useState([]);
  const [demands, setDemands] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [sectorActive, setSectorActive] = useState('');
  const [active, setActive] = useState('Ativos');
  const [query, setQuery] = useState(true);

  const getDemandsFromApi = async () => {
    await getDemands(`demand?open=${query}`)
      .then((response) => setDemands(response?.data));
  };
  const getSectorsFromApi = async () => {
    await getSectors()
      .then((response) => {
        setSectors(response?.data);
        setSectorActive(response.data ? response?.data[0]?.name : '');
      });
  };

  useEffect(() => {
    getDemandsFromApi();
    getSectorsFromApi();
  }, []);

  useEffect(() => {
    setFilterDemands(
      demands?.filter((demand) => demand.name.toLowerCase().includes(word?.toLowerCase())),
    );
  }, [word]);

  useEffect(() => {
    if (active === 'Inativas') {
      setQuery(false);
    } else {
      setQuery(true);
    }
  }, [active]);

  useEffect(() => {
    getDemandsFromApi();
  }, [query]);

  useEffect(() => {
    setFilterDemands(demands);
  }, [demands]);

  useEffect(() => {
    setFilterSector(sectors);
  }, [sectors]);

  const listDemands = () => {
    if (demands?.length === 0) {
      return <h1>Sem resultados</h1>;
    }
    if (filterDemands?.length === 0) {
      return <h1>Sem resultados</h1>;
    }
    return filterDemands?.map((demand) => (
      <DemandData
        demand={demand}
        key={demand._id}
      />
    ));
  };

  return (
    <Main>
      <ScreenContainer>
        <ScreenTitle>Demandas</ScreenTitle>
        <ScreenHeader>
          <ScreenSearch>
            <SearchInput
              type="text"
              icon={<FaSistrix />}
              value={word}
              setWord={(value) => setWord(value)}
              style={{ width: '100%' }}
            />
          </ScreenSearch>
          <Dropdown>
            <DropdownComponent
              OnChangeFunction={(Option) => setActive(Option.target.value)}
              style={{
                display: 'flex',
                color: `${colors.text}`,
                width: '45%',
                height: '100%',
                alignItems: 'center',
                boxSizing: 'border-box',
                borderRadius: '8px',
                border: '1px solid black',
                justifyContent: 'center',
              }}
              optionStyle={{
                backgroundColor: `${colors.secondary}`,
              }}
              optionList={['Ativas', 'Inativas']}
            />
            <DropdownComponent
              OnChangeFunction={(Option) => setSectorActive(Option.target.value)}
              style={{
                display: 'flex',
                color: `${colors.text}`,
                width: '45%',
                height: '100%',
                alignItems: 'center',
                boxSizing: 'border-box',
                borderRadius: '8px',
                border: '1px solid black',
                justifyContent: 'center',
              }}
              optionStyle={{
                backgroundColor: `${colors.secondary}`,
              }}
              optionList={filterSector?.map((sector) => sector.name)}
            />
          </Dropdown>
        </ScreenHeader>
        <ScreenContentBox>
          <ScreenList>
            {listDemands()}
          </ScreenList>
        </ScreenContentBox>
      </ScreenContainer>
    </Main>
  );
};

export default ListDemandsScreen;
