import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDemands } from '../../Services/Axios/demandsServices';
import ViewDemandSidebar from '../../Components/ViewDemandSidebar';
import ViewDemandCard from '../../Components/ViewDemandCard';
import SectorDropdown from '../../Components/SectorDropdown';
import { Main, CardsContainer } from './Style';

const ViewDemandsScreen = () => {
  const [demand, setDemand] = useState('');
  const { id } = useParams();

  const getDemandFromApi = async () => {
    getDemands(`demand/${id}`)
      .then((response) => setDemand(response.data));
  };

  useEffect(() => {
    getDemandFromApi();
  }, []);

  return (
    <Main>
      <CardsContainer>
        <ViewDemandCard
          demand={demand}
        />
      </CardsContainer>
      <ViewDemandSidebar>
        <div style={{ width: '100%' }}>
          <SectorDropdown />
        </div>
      </ViewDemandSidebar>
    </Main>
  );
};

export default ViewDemandsScreen;
