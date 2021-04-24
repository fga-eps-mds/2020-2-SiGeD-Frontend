import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ClientProfileData from '../../Components/ClientProfileData';
import GenericListScreen from '../../Components/GenericListScreen';
import {
  TableHeader, P, Bar, TableTitle, Dropdown,
} from './Style';
import { getClients } from '../../Services/Axios/clientServices';
import DropdownComponent from '../../Components/DropdownComponent';
import colors from '../../Constants/colors';
import { useProfileUser } from '../../Context';

const ClientListScreen = () => {
  const { token, startModal } = useProfileUser();
  const [word, setWord] = useState();
  const [filterClients, setFilterClients] = useState([]);
  const [clients, setClients] = useState([]);
  const [active, setActive] = useState('Ativos');
  const [query, setQuery] = useState(true);

  const getClientsFromApi = async () => {
    await getClients(`clients?active=${query}`, startModal)
      .then((response) => setClients(response.data));
  };

  useEffect(() => {
    getClientsFromApi();
  }, [token, query, active]);

  useEffect(() => {
    setFilterClients(
      clients.filter((client) => client.name.toLowerCase().includes(word?.toLowerCase())),
    );
  }, [word]);

  useEffect(() => {
    if (active === 'Inativos') {
      setQuery(false);
    } else {
      setQuery(true);
    }
  }, [active]);

  useEffect(() => {
    setFilterClients(clients);
  }, [clients]);

  const listClients = () => {
    if (clients?.length === 0) {
      return <h1 style={{ fontSize: '1.5rem', font: 'Montserrat' }}>Sem resultados</h1>;
    }
    if (filterClients?.length === 0) {
      return <h1 style={{ fontSize: '1.5rem', font: 'Montserrat' }}>Sem resultados</h1>;
    }
    return filterClients?.map((client) => (
      <ClientProfileData
        client={client}
        key={client.email}
        getClientsFromAPI={getClientsFromApi}
        query={query}
      />
    ));
  };

  if (!localStorage.getItem('@App:token')) {
    return <Redirect to="/login" />;
  }

  return (
    <GenericListScreen
      ButtonTitle="Novo Cliente"
      PageTitle="Clientes"
      SearchWord={word}
      setWord={setWord}
      ListType={listClients()}
      redirectTo="/cliente"
    >
      <TableHeader>
        <TableTitle width={25}>
          <P>Nome</P>
        </TableTitle>
        <Bar />
        <TableTitle width={25}>
          <P>Email</P>
        </TableTitle>
        <Bar />
        <TableTitle width={15}>
          <P>CPF</P>
        </TableTitle>
        <Bar />
        <TableTitle width={15}>
          <P>Telefone</P>
        </TableTitle>
        <Bar />
        <TableTitle width={19}>
          <P>Ult. Atualização</P>
        </TableTitle>
      </TableHeader>
      <Dropdown>
        <DropdownComponent
          OnChangeFunction={(Option) => setActive(Option.target.value)}
          style={{
            display: 'flex',
            color: `${colors.text}`,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            boxSizing: 'border-box',
            borderRadius: '8px',
            border: '1px solid black',
            justifyContent: 'center',
          }}
          optionStyle={{
            backgroundColor: `${colors.secondary}`,
          }}
          optionList={['Ativos', 'Inativos']}
        />
      </Dropdown>
    </GenericListScreen>
  );
};

export default ClientListScreen;
