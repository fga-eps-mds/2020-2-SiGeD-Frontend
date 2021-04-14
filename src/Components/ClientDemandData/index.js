import { format } from 'date-fns';
import {
  DemandCard, DemandTitle, SectorName, ProcessNumber,
  DemandCreatedAt, CategoryField, CategoryName,
} from './Style';

const ClientDemandData = ({ demand, sectors }) => {
  console.log('oi', demand, sectors);
  const sectorName = sectors?.map((sectorByID) => (sectorByID._id
    === demand.sectorHistory[demand.sectorHistory.length - 1].sectorID));

  const renderDemandCategories = () => (demand.categoryID?.map((category) => (
    <CategoryName color={category.color}>{category.name}</CategoryName>
  )));

  return (
    <DemandCard>
      <DemandTitle>
        {demand.name}
      </DemandTitle>
      <SectorName>
        Setor:
        {sectorName[0].name}
      </SectorName>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ProcessNumber>
          Nº do Processo:
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
