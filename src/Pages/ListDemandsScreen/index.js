import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { FaSistrix } from 'react-icons/fa';
import {
  Main, ScreenContainer, ScreenTitle, ScreenSearch, ScreenContentBox,
  ScreenHeader, ScreenList, Dropdown, DropdownField,
} from './Style';
import SearchInput from '../../Components/SearchInput';
import DemandData from '../../Components/DemandData';
import { getDemandsWithClientsNames } from '../../Services/Axios/demandsServices';
import { getSectors } from '../../Services/Axios/sectorServices';
import DropdownComponent from '../../Components/DropdownComponent';
import colors from '../../Constants/colors';
import { useProfileUser } from '../../Context';

const ListDemandsScreen = () => {
  const { token, user } = useProfileUser();
  const [word, setWord] = useState();
  const [filterDemands, setFilterDemands] = useState([]);
  const [filterSector, setFilterSector] = useState([]);
  const [demands, setDemands] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [dropdownYears, setDropdownYears] = useState([]);
  const [filterYear, setFilterYear] = useState('Sem filtro');
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

  const filterDemandByYear = () => {
    const filteredDemands = [];
    demands.filter((demand) => {
      const year = new Date(demand.createdAt).getFullYear().toString();
      if (year === filterYear) {
        filteredDemands.push(demand);
      }
      return undefined;
    });
    setFilterDemands(filteredDemands);
  };

  const listYears = async () => {
    const years = ['Sem filtro'];
    demands.map((demand) => {
      const year = new Date(demand.createdAt).getFullYear();
      if (!years.find((y) => y === year)) {
        years.push(year);
      }
      return undefined;
    });
    setDropdownYears(years);
  };

  useEffect(() => {
    if (token && user) {
      getDemandsFromApi();
      getSectorsFromApi();
    }
  }, [token, user]);

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
    if (!dropdownYears.find((ano) => (ano === filterYear))) {
      setFilterYear('Sem filtro');
    }
    getDemandsFromApi();
    if (filterYear !== 'Sem filtro') {
      filterDemandByYear();
    } else {
      setFilterDemands(demands);
    }
  }, [query]);

  useEffect(() => {
    setFilterDemands(demands);
    listYears();
  }, [demands]);

  useEffect(() => {
    setFilterSector(sectors);
  }, [sectors]);

  useEffect(() => {
    if (filterYear !== 'Sem filtro') {
      filterDemandByYear();
    } else {
      setFilterDemands(demands);
    }
  }, [filterYear]);

  const listDemands = () => {
    if (demands?.length === 0 || filterDemands?.length === 0) {
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
      {user && demands ? (
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
              <DropdownField>
                <p style={{ marginBottom: '0' }}>Status: </p>
                <DropdownComponent
                  OnChangeFunction={(Option) => setActive(Option.target.value)}
                  style={{
                    display: 'flex',
                    color: `${colors.text}`,
                    width: '100%',
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
              </DropdownField>
              <DropdownField width={25}>
                <p style={{ marginBottom: '0' }}>Setores: </p>
                <DropdownComponent
                  OnChangeFunction={(Option) => setSectorActive(Option.target.value)}
                  style={{
                    display: 'flex',
                    color: `${colors.text}`,
                    width: '100%',
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
              </DropdownField>
              <DropdownField>
                <p style={{ marginBottom: '0' }}>Anos: </p>
                <DropdownComponent
                  OnChangeFunction={(Option) => setFilterYear(Option.target.value)}
                  style={{
                    display: 'flex',
                    color: `${colors.text}`,
                    width: '100%',
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
                  optionList={dropdownYears}
                />
              </DropdownField>
            </Dropdown>
          </ScreenHeader>
          <ScreenContentBox>
            <ScreenList>
              {listDemands()}
            </ScreenList>
          </ScreenContentBox>
        </ScreenContainer>
      ) : <h1>Carregando...</h1>}
    </Main>
  );
};

export default ListDemandsScreen;
