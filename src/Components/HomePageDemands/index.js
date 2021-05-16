import moment from 'moment-timezone';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  DemandDiv, SectorNameDiv, CategoriesDiv, CategoryTag,
} from '../ClientDemandData/Style';
import { DemandTitle, ProcessNumber, DemandCreatedAt } from '../DemandData/Style';
import { getClients } from '../../Services/Axios/clientServices';

const HomePageDemand = ({ demand, sectors, style }) => {
  const history = useHistory();
  const [clientName, setClientName] = useState('');
  const sectorName = sectors?.filter((sectorByID) => (sectorByID._id
    === demand.sectorHistory[demand.sectorHistory.length - 1].sectorID));
  const renderDemandCategories = () => (demand?.categoryID?.map((category) => (
    <CategoryTag color={category?.color}>{category?.name}</CategoryTag>
  )));

  const getClientName = async () => {
    await getClients(`clients/${demand.clientID}`)
      .then((response) => setClientName(response.data.name))
      .catch((error) => {
        console.error(`An unexpected error ocourred while getting the client name.${error}`);
      });
  };
  useEffect(() => {
    getClientName();
  }, [sectorName, demand]);

  return (
    <DemandDiv onClick={() => history.push(`/visualizar/${demand._id}`)} style={style}>
      <DemandTitle>
        {demand.name}
      </DemandTitle>
      <SectorNameDiv>
        Cliente:
        {'\t'}
        {clientName}
      </SectorNameDiv>
      <SectorNameDiv>
        Setor:
        {'\t'}
        {sectorName[sectorName.length - 1]?.name}
      </SectorNameDiv>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5%' }}>
        <ProcessNumber>
          Nº do Processo:
          {'\t'}
          {demand.process}
        </ProcessNumber>
        <DemandCreatedAt>
          { moment.parseZone(demand.updatedAt).local(true).format('DD/MM/YYYY')}
        </DemandCreatedAt>
      </div>
      <CategoriesDiv>
        {renderDemandCategories()}
      </CategoriesDiv>
    </DemandDiv>
  );
};

export default HomePageDemand;
