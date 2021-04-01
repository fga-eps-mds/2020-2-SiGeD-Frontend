import React, { useState, useEffect } from 'react';
import { FaSistrix } from 'react-icons/fa';
import {
  Main, ScreenContainer, ScreenTitle, ScreenSearch, ScreenContentBox, ScreenHeader, ScreenList,
} from './Style';
import SearchInput from '../../Components/SearchInput';
import DemandData from '../../Components/DemandData';
import { getDemands } from '../../Services/Axios/demandsServices';

const ListDemandsScreen = ({ SearchWord, setWord }) => {
  const [DemandsList, setDemandsList] = useState([]);

  const getDemandsFromApi = async () => {
    await getDemands('demand')
      .then((response) => setDemandsList(response.data));
  };

  useEffect(() => {
    getDemandsFromApi();
  }, []);

  const ListDemands = () => {
    if (DemandsList?.length) {
      return DemandsList.map((DemandsListItem, index) => (
        <DemandData demand={DemandsListItem} key={index} />
      ));
    }
    return null;
  };

  return (
    <Main>
      <ScreenContainer>
        <ScreenTitle>Demandas</ScreenTitle>
        <ScreenHeader>
          <ScreenSearch style={{ width: '30%' }}>
            <SearchInput
              type="text"
              icon={<FaSistrix />}
              value={SearchWord}
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
