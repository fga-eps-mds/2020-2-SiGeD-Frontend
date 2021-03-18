import React, { useEffect, useState } from 'react';
import { FaSistrix } from 'react-icons/fa';
import axios from 'axios';
import SearchInput from '../../Components/SearchInput';
import PersonalData from '../../Components/PersonalData';
import TinyButton from '../../Components/TinyButton';
import {
  Main, H1, Container, Header, Title, Search, TableHeader, P, Bar,
  DataContainer, TableTitle, Button,
} from './style';

const novoUsuario = () => {};

const ListScreen = () => {
  const [word, setWord] = useState();
  const [filterUsers, setFilterUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/users', { headers: { 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNGFkNTVmMjkxYjViMDA1NjI4NDYzZCIsImlhdCI6MTYxNjAyMzEyMiwiZXhwIjoxNjE2MDIzMzYyfQ.Tv71Hx_CKwmK5S84obNTyQNLHZ_SlH7t20QvgNCnpGc' } })
      .then((response) => setUsers(response.data));
  }, []);

  useEffect(() => {
    setFilterUsers(
      users.filter((user) => user.name.toLowerCase().includes(word?.toLowerCase())),
    );
  }, [word]);

  useEffect(() => {
    setFilterUsers(users);
  }, [users]);

  const listUsers = () => {
    console.log(filterUsers);
    if (users.length === 0) {
      return <H1>Carregando...</H1>;
    }
    if (filterUsers.length === 0) {
      return <H1>Sem resultados...</H1>;
    }
    return filterUsers.map((user) => <PersonalData user={user} key={user._id} />);
  };

  return (
    <Main>
      <Container>
        <Title>Usuários</Title>
        <Header>
          <Search>
            <SearchInput
              type="text"
              icon={<FaSistrix />}
              value={word}
              setWord={(value) => setWord(value)}
            />
          </Search>
          <Button>
            <TinyButton type="primary" title="Novo usuário" click={novoUsuario} />
          </Button>
        </Header>

        <TableHeader>
          <TableTitle width={20}>
            <P>Nome</P>
          </TableTitle>
          <Bar />
          <TableTitle width={20}>
            <P>Email</P>
          </TableTitle>
          <Bar />

          <TableTitle width={15}>
            <P>Cargo</P>
          </TableTitle>
          <Bar />

          <TableTitle width={15}>
            <P>Setor</P>
          </TableTitle>
          <Bar />
          <TableTitle width={15}>
            <P>Ult. Atualização</P>
          </TableTitle>
        </TableHeader>

        <DataContainer>
          {listUsers()}
        </DataContainer>
      </Container>
    </Main>
  );
};

export default ListScreen;
