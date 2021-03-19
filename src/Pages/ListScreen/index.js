import React, { useEffect, useState } from 'react';
import { FaSistrix } from 'react-icons/fa';
import SearchInput from '../../Components/SearchInput';
import PersonalData from '../../Components/PersonalData';
import GenericListScreen from '../../Components/GenericListScreen';
import {
  H1, TableHeader, P, Bar, TableTitle,
} from './style';
import { apiUsers } from '../../Services/Axios/baseService';
// import { getUser } from '../../Services/Axios/userServices';

const novoUsuario = () => { };

const ListScreen = () => {
  const [word, setWord] = useState();
  const [filterUsers, setFilterUsers] = useState([]);
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   getUser();
  // }, [word]);

  useEffect(() => {
    apiUsers.get('users')
      .then((response) => setUsers(response.data))
      .catch((err) => {
        console.error(`Não foi possível listar as categorias.${err}`);
      });
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
    if (users.length === 0) {
      return <H1>Sem resultados</H1>;
    }
    if (filterUsers.length === 0) {
      return <H1>Sem resultados</H1>;
    }
    return filterUsers.map((user) => <PersonalData user={user} key={user._id} />);
  };

  return (
    <GenericListScreen
      ButtonTitle="Novo Usuário"
      ButtonFunction={novoUsuario}
      PageTitle="Usuários"
      SearchWord={word}
      setWord={setWord}
      ListType={listUsers()}
      redirectTo="/usuarios"
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
