import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
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
  const [demands, setDemands] = useState([]);

  const getDemandsFromApi = async () => {
    await getDemands('demand')
      .then((response) => setDemands(response.data));
  };

  useEffect(() => {
    getDemandsFromApi();
  }, []);

  useEffect(() => {
    setFilterDemands(
      demands.filter((demand) => demand.name.toLowerCase().includes(word?.toLowerCase())),
    );
  }, [word]);

  useEffect(() => {
    setFilterDemands(demands);
  }, [demands]);

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
