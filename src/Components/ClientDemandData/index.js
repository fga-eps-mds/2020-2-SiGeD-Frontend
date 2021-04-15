import { format } from 'date-fns';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  DemandCard, DemandTitle, SectorName, ProcessNumber,
  DemandCreatedAt, CategoryField, CategoryName,
} from './Style';

const ClientDemandData = ({ demand, sectors }) => {
  const history = useHistory();
  const sectorName = sectors?.filter((sectorByID) => (sectorByID._id
    === demand.sectorHistory[demand.sectorHistory.length - 1].sectorID));
  const renderDemandCategories = () => (demand.categoryID?.map((category) => (
    <CategoryName color={category.color}>{category.name}</CategoryName>
  )));

  useEffect(() => {
  }, [sectorName]);

  return (
    <DemandCard onClick={() => history.push(`/visualizar/${demand._id}`)}>
      <DemandTitle>
        {demand.name}
      </DemandTitle>
      <SectorName>
        Setor:
        {'\t'}
        {sectorName[sectorName.length - 1]?.name}
      </SectorName>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5%' }}>
        <ProcessNumber>
          Nº do Processo:
          {'\t'}
          {demand.process}
        </ProcessNumber>
        <DemandCreatedAt>
          {format(new Date(demand.createdAt), 'dd/MM/yyyy')}
        </DemandCreatedAt>
      </div>
      <CategoryField>
        {renderDemandCategories()}
      </CategoryField>
    </DemandCard>
  );
};

export default ClientDemandData;
