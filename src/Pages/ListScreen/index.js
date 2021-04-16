import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PersonalData from '../../Components/PersonalData';
import GenericListScreen from '../../Components/GenericListScreen';
import {
  H1, TableHeader, P, Bar, TableTitle,
} from './Style';
import { getUser } from '../../Services/Axios/userServices';
import { useProfileUser } from '../../Context';

const newUser = () => { };

const ListScreen = () => {
  const { user } = useProfileUser();
  const [word, setWord] = useState();
  const [filterUsers, setFilterUsers] = useState([]);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    await getUser('users')
      .then((response) => setUsers(response.data))
      .catch((err) => {
        console.error(`An unexpected error ocourred while getting users. ${err}`);
      });
  };

  useEffect(() => {
    getUsers();
  }, [user]);

  useEffect(() => {
    setFilterUsers(
      users.filter((User) => User.name.toLowerCase().includes(word?.toLowerCase())),
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
    return filterUsers?.map((User) => (
      <PersonalData
        user={User}
        key={User._id}
        getUsers={getUsers}
      />
    ));
  };

  if (!localStorage.getItem('@App:token')) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      {user ? (
        <>
          {user.role === 'admin'
            ? (
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
                <div style={{ display: 'none' }} />
              </GenericListScreen>
            )
            : <Redirect to="/nao-autorizado" />}
        </>
      )
        : <h1>Carregando...</h1>}
    </>
  );
};

export default ListScreen;
