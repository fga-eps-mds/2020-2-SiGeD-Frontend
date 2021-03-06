import React, { useEffect, useState } from 'react';
import { FaSistrix } from 'react-icons/fa';
import axios from 'axios';
import styles from './style';
import SearchInput from '../../Components/SearchInput';
import PersonalData from '../../Components/PersonalData';

const ListScreen = () => {
  const [word, setWord] = useState();
  const [filterUsers, setFilterUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/signUpGet')
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
      return <h1>Carregando...</h1>;
    }
    if (filterUsers.length === 0) {
      return <h1>Sem resultados...</h1>;
    }
    return filterUsers.map((user) => <PersonalData user={user} key={user.email} />);
  };

  return (
    <div style={styles.main}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Usuários</h2>

          <div style={styles.search}>
            <SearchInput
              type="text"
              icon={<FaSistrix />}
              value={word}
              setWord={(value) => setWord(value)}
            />
          </div>
        </div>

        <div style={styles.contentBox}>
          <div style={styles.tableHeader}>
            <div style={{ ...styles.tableTitle, width: '29%' }}>
              <p style={styles.p}>Nome</p>
            </div>
            <div style={styles.bar} />
            <div style={{ ...styles.tableTitle, width: '13%' }}>
              <p style={styles.p}>CPF</p>
            </div>
            <div style={styles.bar} />

            <div style={{ ...styles.tableTitle, width: '22%' }}>
              <p style={styles.p}>Telefone</p>
            </div>
            <div style={styles.bar} />

            <div style={{ ...styles.tableTitle, width: '15%' }}>
              <p style={styles.p}>Locação</p>
            </div>
            <div style={styles.bar} />
            <div style={{ ...styles.tableTitle, width: '20%' }}>
              <p style={styles.p}>Ult. Atualização</p>
            </div>
          </div>

          <div style={styles.dataContainer}>
            {listUsers()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListScreen;
