import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSistrix } from 'react-icons/fa';
import axios from 'axios';
import SearchInput from '../../Components/SearchInput';
import ClientProfileData from '../../Components/ClientProfileData';
import {
  Main, Container, Header, Title, Search, TableHeader, P, Bar,
  DataContainer, ButtonDiv, TableTitle, ContentBox,
} from './style';

const ClientListScreen = () => {
  const [word, setWord] = useState();
  const [filterClients, setFilterClients] = useState([]);
  const [clients, setClients] = useState([]);

  const getClients = async () => {
    await axios
      .get('http://localhost:3002/clients')
      .then((response) => setClients(response.data));
  };

  useEffect(() => {
    getClients();
  }, [clients]);

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
      return <h1 style={{ fontSize: '1.5rem', font: 'Open Sans' }}>Carregando...</h1>;
    }
    if (filterClients.length === 0) {
      return <h1 style={{ fontSize: '1.5rem', font: 'Open Sans' }}>Sem resultados...</h1>;
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
    <Main>
      <Container>
        <Header>
          <Title>Clientes</Title>
          <Search>
            <SearchInput
              type="text"
              icon={<FaSistrix />}
              value={word}
              setWord={(value) => setWord(value)}
            />
          </Search>
          <ButtonDiv>
            <Link
              to="/cliente"
              style={{
                color: 'white',
                textDecorationLine: 'none',
                fontSize: '1.5vw',
              }}
            >
              Novo cliente
            </Link>
          </ButtonDiv>
        </Header>

        <ContentBox>
          <TableHeader>
            <TableTitle width={30}>
              <P>Nome</P>
            </TableTitle>
            <Bar />
            <TableTitle width={20}>
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

          <DataContainer>
            {listClients()}
          </DataContainer>
        </ContentBox>
      </Container>
    </Main>
  );
};

export default ClientListScreen;
