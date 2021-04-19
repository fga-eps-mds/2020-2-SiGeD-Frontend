import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { FaSistrix } from 'react-icons/fa';
import {
  Main, ScreenContainer, ScreenTitle, ScreenSearch, ScreenContentBox,
  ScreenHeader, ScreenList, Dropdown,
} from './Style';
import SearchInput from '../../Components/SearchInput';
import DemandData from '../../Components/DemandData';
import { getDemandsWithClientsNames } from '../../Services/Axios/demandsServices';
import { getSectors } from '../../Services/Axios/sectorServices';
import DropdownComponent from '../../Components/DropdownComponent';
import colors from '../../Constants/colors';

const ListDemandsScreen = () => {
  const [word, setWord] = useState();
  const [filterDemands, setFilterDemands] = useState([]);
  const [filterSector, setFilterSector] = useState([]);
  // const [dropdownYears, setDropdownYears] = useState([]);
  const [filterYear, setFilterYear] = useState([]);
  const [demands, setDemands] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [sectorActive, setSectorActive] = useState('');
  const [active, setActive] = useState('Ativos');
  const [query, setQuery] = useState(true);
  const getDemandsFromApi = async () => {
    await getDemandsWithClientsNames(`clientsNames?open=${query}`)
      .then((response) => setDemands(response.data));
  };
  const getSectorsFromApi = async () => {
    await getSectors()
      .then((response) => {
        setSectors(response?.data);
        setSectorActive(response?.data[0]?.name);
      });
  };

  const listYears = async () => {
    const firstYear = new Date(demands[0]?.createdAt)?.getFullYear();
    const lastYear = new Date(demands[demands.length - 1]?.createdAt)?.getFullYear();
    const teste = Array(lastYear - firstYear + 1).fill().map((_, idx) => firstYear + idx);
    console.log(teste);
  };

  useEffect(() => {
    getSectorsFromApi();
    getDemandsFromApi();
  }, []);

  useEffect(() => {
    setFilterDemands(
      demands.filter((demand) => demand.name.toLowerCase().includes(word?.toLowerCase())
        || demand.clientName.toLowerCase().includes(word?.toLowerCase())
        || demand.process.toLowerCase().includes(word?.toLowerCase())),
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
    listYears();
  }, [demands]);

  useEffect(() => {
    setFilterSector(sectors);
  }, [sectors]);

  useEffect(() => {
    setFilterYear(filterYear);
  }, [filterYear]);

  const listDemands = () => {
    if (demands?.length === 0) {
      return <h1>Sem resultados</h1>;
    }
    if (filterDemands?.length === 0) {
      return <h1>Sem resultados</h1>;
    }
    return filterDemands?.map((demand) => {
      const sector = filterSector?.filter(
        (listSector) => (listSector.name === sectorActive ? listSector : false),
      );
      if (demand.sectorHistory[demand.sectorHistory.length - 1].sectorID !== sector[0]?._id) {
        return false;
      }
      return (
        <DemandData
          sector={sector}
          demand={demand}
          key={demand._id}
          sectors={sectors}
        />
      );
    });
  };

  if (!localStorage.getItem('@App:token')) {
    return <Redirect to="/login" />;
  }

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
              OnChangeFunction={(Option) => setFilterYear(Option.target.value)}
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
              optionList={['Ano', 'Inativas']}
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
