import { format } from 'date-fns';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  DemandDiv, SectorNameDiv, CategoriesDiv, CategoryTag,
} from './Style';
import { DemandTitle, ProcessNumber, DemandCreatedAt } from '../DemandData/Style';

const ClientDemandData = ({ demand, sectors }) => {
  const history = useHistory();
  const sectorName = sectors?.filter((sectorByID) => (sectorByID._id
    === demand.sectorHistory[demand.sectorHistory.length - 1].sectorID));
  const renderDemandCategories = () => (demand.categoryID?.map((category) => (
    <CategoryTag color={category.color}>{category.name}</CategoryTag>
  )));

  useEffect(() => {
  }, [sectorName]);

  return (
    <DemandDiv onClick={() => history.push(`/visualizar/${demand._id}`)}>
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
          {format(new Date(demand.createdAt), 'dd/MM/yyyy')}
        </DemandCreatedAt>
      </div>
      <CategoriesDiv>
        {renderDemandCategories()}
      </CategoriesDiv>
    </DemandDiv>
  );
};

export default ClientDemandData;
