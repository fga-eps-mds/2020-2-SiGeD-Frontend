import React, { useEffect, useState } from 'react';
import PersonalData from '../../Components/PersonalData';
import GenericListScreen from '../../Components/GenericListScreen';
import {
  H1, TableHeader, P, Bar, TableTitle,
} from './style';
import { getUser } from '../../Services/Axios/userServices';

const newUser = () => { };

const ListScreen = () => {
  const [word, setWord] = useState();
  const [filterUsers, setFilterUsers] = useState([]);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    await getUser('users')
      .then((response) => setUsers(response.data))
      .catch((err) => {
        console.error(`An unexpected error ocourred while getting users.${err}`);
      });
  };

  useEffect(() => {
    getUsers();
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
    if (users?.length === 0) {
      return <H1>Sem resultados</H1>;
    }
    if (filterUsers?.length === 0) {
      return <H1>Sem resultados</H1>;
    }
    return filterUsers?.map((user) => (
      <PersonalData
        user={user}
        key={user._id}
        getUsers={getUsers}
      />
    ));
  };

  return (
    <GenericListScreen
      ButtonTitle="Novo Usuário"
      ButtonFunction={newUser}
      PageTitle="Usuários"
      SearchWord={word}
      setWord={setWord}
      ListType={listUsers()}
      redirectTo="/cadastro"
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

        <TableTitle width={20}>
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
    </GenericListScreen>
  );
};

export default ListScreen;
