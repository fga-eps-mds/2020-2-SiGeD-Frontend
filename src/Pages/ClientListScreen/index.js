import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSistrix } from 'react-icons/fa';
import SearchInput from '../../Components/SearchInput';
import ClientProfileData from '../../Components/ClientProfileData';
import GenericListScreen from '../../Components/GenericListScreen';
import {
  TableHeader, P, Bar, TableTitle,
} from './style';
import { apiClients } from '../../Services/Axios';

const ClientListScreen = () => {
  const [word, setWord] = useState();
  const [filterClients, setFilterClients] = useState([]);
  const [clients, setClients] = useState([]);

  const getClients = async () => {
    await apiClients.get('clients')
      .then((response) => setClients(response.data))
      .catch((err) => {
        console.error(`Não foi possível encontrar os dados dos clientes.${err}`);
      });
  };

  useEffect(() => {
    getClients();
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
    if (clients.length === 0) {
      return <h1 style={{ fontSize: '1.5rem', font: 'Open Sans' }}>Sem resultados</h1>;
    }
    if (filterClients.length === 0) {
      return <h1 style={{ fontSize: '1.5rem', font: 'Open Sans' }}>Sem resultados</h1>;
    }
    return filterClients.map((client) => (
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
