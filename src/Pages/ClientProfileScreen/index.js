// import React from 'react';
// // import axios from 'axios';
// import { Main } from '../../Components/GenericRegisterScreen/style';
// import SidebarComponent from '../../Components/SidebarComponent';
// import {
//   RightBox, Header, ContentBox, Label, Bar, DemandsList,
// } from './style';

// const ClientProfileScreen = ({
// eslint-disable-next-line max-len
//   name = 'joao', email = 'joao', cpf = 'joao', phone = 'joao', city = 'joao', office = 'joao', policeStation = 'joao',
// }) => {
//   useEffect(() => {
//     axios
//       .get(`http://localhost:3002/clients/${_id}`)
//       .then((response) => setClients(response.data));
//   }, []);

//   const sidebarList = [name, email, cpf, phone, city, office, policeStation];
//   const [filteredRequests, setFilteredRequests] = useState([]);
//   const [requests, setRequests] = useState([{
//     demanda: 'Solicitação de agendamento com fisioterapeuta',
//     categoria: 'Enfermagem',
//     setor: 'Fisioterapia',
//     Processo: 405,
//     atendimento: '22/05/2013',
//   },

//   {
//     demanda: 'Afastamento do Cargo',
//     categoria: 'Geral',
//     setor: 'Assistencia social',
//     Processo: 406,
//     atendimento: '22/04/2014',
//   },

//   {
//     demanda: 'Porte de arma negado',
//     categoria: 'Porte de arma',
//     setor: 'DPSS',
//     Processo: 407,
//     atendimento: '02/03/2020',
//   }]);

//   const listDemands = () => {
//     if (requests.length === 0) {
//       return <h1>Carregando...</h1>;
//     }
//     if (filterRequests.length === 0) {
//       return <h1>Sem resultados...</h1>;
//     }
//     return filterRequest.map((request) => {
//       if (request) {
//         return <RequestData category={request}/>;
//       }
//       return null;
//     });
//   };

//   useEffect(() => {
//     setFilterRequests(
//       requests.filter((request) => request.name.toLowerCase().includes(word?.toLowerCase())),
//     );
//   }, [word]);

//   useEffect(() => {
//     setFilterCategories(categories);
//   }, [categories]);

//   return (
//     <Main>
//       <SidebarComponent title="Perfil do Cliente" sidebarList={sidebarList} />
//       <RightBox>
//         <Label>
//           <p>teste</p>
//           <p>pesquisar</p>
//         </Label>
//         <ContentBox>
//           <Header>
//             <p style={{ color: 'white', marginBottom: 0 }}>Nome da demanda</p>
//             <Bar />
//             <p style={{ color: 'white', marginBottom: 0 }}>Categorias</p>
//             <Bar />
//             <p style={{ color: 'white', marginBottom: 0 }}>Setor</p>
//             <Bar />
//             <p style={{ color: 'white', marginBottom: 0 }}>Nº do processo</p>
//             <Bar />
//             <p style={{ color: 'white', marginBottom: 0 }}>Data de nascimento</p>
//           </Header>
//           <DemandsList>
//             {listDemands()}
//           </DemandsList>
//         </ContentBox>
//       </RightBox>
//     </Main>

//   );
// };

// export default ClientProfileScreen;
