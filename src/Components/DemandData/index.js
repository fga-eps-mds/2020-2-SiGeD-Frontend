// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  DemandCard, DemandTitle, ClientName, SectorName, ProcessNumber,
  DemandCreatedAt, CategoryField,
} from './Style';
import colors from '../../Constants/colors';
// import { getClients } from '../../Services/Axios/clientServices';
// import { getCategories } from '../../Services/Axios/demandsServices';

const DemandData = ({ demand }) => (
  <DemandCard>
    <DemandTitle>
      {demand.name}
      Solicitação de atendimento de fisioterapeuta
    </DemandTitle>
    <ClientName>
      Cliente:
      <Link
        to={`/perfil/${demand.clientID}`}
        id={demand.clientID}
        style={{ color: colors.text, textDecorationLine: 'none' }}
      />
      {/* {client.name} */}
      {/* </Link> */}
    </ClientName>
    <SectorName>
      Setor: Fisioterapia
      {/* {sector.name} */}
    </SectorName>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <ProcessNumber>
        {demand.process}
      </ProcessNumber>
      <DemandCreatedAt>
        {demand.createdAt}
      </DemandCreatedAt>
    </div>
    <CategoryField />
    {/* {category.name}
      </CategoryField> */}
  </DemandCard>
);
export default DemandData;

//   const [client, setClient] = useState();
//   const [category, setCategory] = useState();

//   const getClientApi = async () => {
//     await getClients(`/clients/${demand.clientID}`)
//       .then((response) => setClient(response.data));
//   };

//   const getCategoryApi = async () => {
//     await getCategories(`/category/${demand.categoryID}`)
//       .then((response) => setCategory(response.data));
//   };

//   useEffect(() => {
//     getClientApi();
//     getCategoryApi();
//   }, []);

// getSector
