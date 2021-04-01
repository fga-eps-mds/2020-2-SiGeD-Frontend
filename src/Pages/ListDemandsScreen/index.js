import React, { useState, useEffect } from 'react';
import { FaSistrix } from 'react-icons/fa';
import {
  Main, ScreenContainer, ScreenTitle, ScreenSearch, ScreenContentBox, ScreenHeader, ScreenList,
} from './Style';
import SearchInput from '../../Components/SearchInput';
import DemandData from '../../Components/DemandData';
import { getDemands } from '../../Services/Axios/demandsServices';

const ListDemandsScreen = () => {
  const [word, setWord] = useState();
  const [filterDemands, setFilterDemands] = useState([]);
  const [DemandsList, setDemandsList] = useState([]);

  const getDemandsFromApi = async () => {
    await getDemands('demand')
      .then((response) => setDemandsList(response.data));
  };

  useEffect(() => {
    getDemandsFromApi();
  }, []);

  useEffect(() => {
    setFilterDemands(
      DemandsList.filter(
        (Demand) => Demand.name.toLowerCase().includes(word?.toLowerCase()),
      ),
    );
  }, [word]);

  useEffect(() => {
    setFilterDemands(DemandsList);
  }, [DemandsList]);

  const ListDemands = () => {
    if (DemandsList?.length === 0) {
      return <h1 style={{ fontSize: '1.5rem', font: 'Montserrat' }}>Sem resultados</h1>;
    }
    if (filterDemands?.length === 0) {
      return <h1 style={{ fontSize: '1.5rem', font: 'Montserrat' }}>Sem resultados</h1>;
    }
    return filterDemands?.map((DemandsListItem, index) => (
      <DemandData demand={DemandsListItem} key={index} />
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
        </ScreenHeader>

        <ScreenContentBox>
          <ScreenList style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
          }}
          >
            {ListDemands()}
          </ScreenList>
        </ScreenContentBox>
      </ScreenContainer>
    </Main>
  );
};

export default ListDemandsScreen;
