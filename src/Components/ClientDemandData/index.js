import moment from 'moment-timezone';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  DemandDiv, SectorNameDiv, CategoriesDiv, CategoryTag,
} from './Style';
import { DemandTitle, ProcessNumber, DemandCreatedAt } from '../DemandData/Style';

const ClientDemandData = ({ demand, sectors, style }) => {
  const history = useHistory();
  const sectorName = sectors?.filter((sectorByID) => (sectorByID._id
    === demand.sectorHistory[demand.sectorHistory.length - 1].sectorID));
  const renderDemandCategories = () => (demand.categoryID?.map((category) => (
    <CategoryTag color={category.color}>{category.name}</CategoryTag>
  )));

  useEffect(() => {
  }, [sectorName]);

  return (
    <DemandDiv onClick={() => history.push(`/visualizar/${demand._id}`)} style={style}>
      <DemandTitle>
        {demand.name}
      </DemandTitle>
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

export default ClientDemandData;
