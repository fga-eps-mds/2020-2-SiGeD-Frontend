import React, { useEffect, useState } from 'react';
import { FaSistrix } from 'react-icons/fa';
import axios from 'axios';
import styles from './style';
import SearchInput from '../../Components/SearchInput';
import PersonalData from '../../Components/PersonalData';
import TinyButton from '../../Components/TinyButton';

const newClient = () => {
  console.log('Novo Cliente');
};

const ListScreen = () => {
  const [word, setWord] = useState();
  const [filterClients, setFilterClients] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/signUpGet', { headers: { 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNDBlMDAwMDBkNGMwMDAzZmQzMmJjYSIsImlhdCI6MTYxNTI1MzU4MywiZXhwIjoxNjE1MjUzODIzfQ.jeOGka-SCqxm9kKA5V_3m1dFvFGQdDUKwa493Uaq9oI' } })
      .then((response) => setClients(response.data));
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
    console.log(filterClients);
    if (clients.length === 0) {
      return <h1>Carregando...</h1>;
    }
    if (filterClients.length === 0) {
      return <h1>Sem resultados...</h1>;
    }
    console.log(filterClients);
    return filterClients.map((client) => <PersonalData client={client} key={client.email} />);
  };

  return (
    <div style={styles.main}>
      <div>
        <div style={styles.header}>
          <h2 style={styles.title}>Clientes</h2>

          <div style={styles.search}>
            <SearchInput
              type="text"
              icon={<FaSistrix />}
              value={word}
              setWord={(value) => setWord(value)}
            />
          </div>
          <TinyButton type="primaryListScreen" title="Novo cliente" click={newClient} />
        </div>

        <div style={styles.contentBox}>
          <div style={styles.tableHeader}>
            <div style={{ ...styles.tableTitle, width: '35%' }}>
              <p style={styles.p}>Nome</p>
            </div>
            <div style={styles.bar} />
            <div style={{ ...styles.tableTitle, width: '25%' }}>
              <p style={styles.p}>Email</p>
            </div>
            <div style={styles.bar} />

            <div style={{ ...styles.tableTitle, width: '20%' }}>
              <p style={styles.p}>Cargo</p>
            </div>
            <div style={styles.bar} />

            <div style={{ ...styles.tableTitle, width: '20%' }}>
              <p style={styles.p}>Setor</p>
            </div>
            <div style={styles.bar} />
            <div style={{ ...styles.tableTitle, width: '25%' }}>
              <p style={styles.p}>Ult. Atualização</p>
            </div>
          </div>

          <div style={styles.dataContainer}>
            {listClients()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListScreen;
