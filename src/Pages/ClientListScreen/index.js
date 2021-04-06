import React, { useEffect, useState } from 'react';
import ClientProfileData from '../../Components/ClientProfileData';
import GenericListScreen from '../../Components/GenericListScreen';
import {
  TableHeader, P, Bar, TableTitle, Dropdown,
} from './Style';
import { getClients } from '../../Services/Axios/clientServices';
import DropdownComponent from '../../Components/DropdownComponent';
import colors from '../../Constants/colors';

const ClientListScreen = () => {
  const [word, setWord] = useState();
  const [filterClients, setFilterClients] = useState([]);
  const [clients, setClients] = useState([]);

  const getClientsFromApi = async () => {
    await getClients('clients')
      .then((response) => setClients(response.data));
  };

  useEffect(() => {
    getClientsFromApi();
  }, []);

  useEffect(() => {
    setFilterClients(
      clients.filter((client) => client.name.toLowerCase().includes(word?.toLowerCase())),
    );
  }, [word]);

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
        getClients={getClients}
      />
    ));
  };

  return (
    <GenericListScreen
      ButtonTitle="Novo Cliente"
      PageTitle="Clientes"
      SearchWord={word}
      setWord={setWord}
      ListType={listClients()}
      redirectTo="/cliente"
    >
      <Dropdown>
        <DropdownComponent
          OnChangeFunction={(Option) => (Option.target.value)}
          style={{
            display: 'flex',
            color: `${colors.text}`,
            width: '80%',
            height: '100%',
            alignItems: 'center',
            boxSizing: 'border-box',
            borderRadius: '8px',
            border: '1px solid black',
          }}
          optionStyle={{
            backgroundColor: `${colors.secondary}`,
          }}
          optionList={['Ativos', 'Desativos']}
        />
      </Dropdown>
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
    </GenericListScreen>
  );
};

export default ClientListScreen;
