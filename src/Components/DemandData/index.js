import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import {
  DemandCard, DemandTitle, ClientName, SectorName, ProcessNumber,
  DemandCreatedAt, CategoryField, CategoryName,
} from './Style';
import colors from '../../Constants/colors';
import { getClients } from '../../Services/Axios/clientServices';
import { getCategories } from '../../Services/Axios/demandsServices';

const DemandData = ({ demand }) => {
  const [client, setClient] = useState([]);
  const [category, setCategory] = useState([]);

  const getClientApi = async () => {
    await getClients(`/clients/${demand.clientID}`)
      .then((response) => setClient(response.data));
  };

  const getCategoryApi = async () => {
    await getCategories(`/category/${demand.categoryID}`)
      .then((response) => setCategory(response.data));
  };

  useEffect(() => {
    getClientApi();
    getCategoryApi();
  }, []);

  return (
    <>
      { category && client
      && (
      <DemandCard>
        <DemandTitle>
          {demand.name}
        </DemandTitle>
        <ClientName>
          Cliente:
          <Link
            to={`/perfil/${demand.clientID}`}
            id={demand.clientID}
            style={{ color: colors.text, textDecorationLine: 'none' }}
          >
            {client.name}
          </Link>
        </ClientName>
        <SectorName>
          Setor: Fisioterapia
          {/* {sector.name} */}
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
          <CategoryName color={category.color}>{category.name}</CategoryName>
          Categoria
        </CategoryField>
      </DemandCard>
      )}
    </>
  );
};

export default DemandData;
