import { Link } from 'react-router-dom';
import moment from 'moment-timezone';
import {
  DemandCard, DemandTitle, ClientName, SectorName, ProcessNumber,
  DemandCreatedAt, CategoryField, CategoryName,
} from './Style';
import colors from '../../Constants/colors';

const DemandData = ({ demand, sectors }) => {
  const sectorName = sectors?.filter((sectorByID) => (sectorByID._id
    === demand.sectorHistory[demand.sectorHistory.length - 1].sectorID));

  const renderDemandCategories = () => (demand.categoryID?.map((category) => (
    <CategoryName color={category.color}>{category.name}</CategoryName>
  )));

  const styles = {
    demandCard: {
      textDecorationLine: 'none',
      color: colors.text,
    },
    link: {
      color: colors.primary,
      textDecorationLine: 'none',
      fontWeight: 'bold',
    },
    divStyle: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  };

  return (
    <DemandCard
      as={Link}
      to={`/visualizar/${demand._id}`}
      style={styles.demandCard}
    >
      <DemandTitle>
        {demand.name}
      </DemandTitle>
      <ClientName>
        Cliente:
        <Link
          to={`/perfil/${demand.clientID}`}
          id={demand.clientID}
          style={styles.link}
        >
          {demand.clientName}
        </Link>
      </ClientName>
      <SectorName>
        Setor:
        {sectorName[0]?.name}
      </SectorName>
      <div style={styles.divStyle}>
        <ProcessNumber>
          Nº do Processo:
          {demand.process}
        </ProcessNumber>
        <DemandCreatedAt>
          { moment.parseZone(demand.createdAt).local(true).format('DD/MM/YYYY')}
        </DemandCreatedAt>
      </div>
      <CategoryField>
        {renderDemandCategories()}
      </CategoryField>
    </DemandCard>
  );
};

export default DemandData;
