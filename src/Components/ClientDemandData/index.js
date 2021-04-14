import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import {
  DemandCard, DemandTitle, SectorName, ProcessNumber,
  DemandCreatedAt, CategoryField, CategoryName,
} from '../DemandData/Style';
import colors from '../../Constants/colors';

const ClientDemandData = ({ demand, sectors }) => {
  console.log('oi', demand, sectors);
  const sectorName = sectors?.filter((sectorByID) => (sectorByID._id
    === demand.sectorHistory[demand.sectorHistory.length - 1].sectorID));

  const renderDemandCategories = () => (demand.categoryID?.map((category) => (
    <CategoryName color={category.color}>{category.name}</CategoryName>
  )));

  return (
    <>
      { sectors && demand
        && (
          <DemandCard
            as={Link}
            to={`/visualizar/${demand._id}`}
            style={{
              textDecorationLine: 'none',
              color: colors.text,
            }}
          >
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
        )}
    </> 
  );
};

export default ClientDemandData;
