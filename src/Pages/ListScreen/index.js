import React, { useEffect, useState } from "react";
import styles from "./style";
import SearchInput from "../../Components/SearchInput";
import { FaSistrix } from "react-icons/fa";
import PersonalData from "../../Components/PersonalData";
import axios from "axios";

const ListScreen = () => {
  const [word, setWord] = useState();
  const [filterUsers, setFilterUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/signUpGet")
      .then((response) => setUsers(response.data));
  }, []);

  useEffect(() => {
    setFilterUsers(
      users.filter((user) => {
        return user.name.toLowerCase().includes(word?.toLowerCase());
      })
    );
    //eslint-disable-next-line
  }, [word]);

  useEffect(() => {
    setFilterUsers(users);
  }, [users]);

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
              setWord={(word) => setWord(word)}
            />
          </div>
        </div>

        <div style={styles.contentBox}>
          <div style={styles.header2}>
            <div style={{...styles.title2, width: '29%'}}>
              <p style={styles.p}>Nome</p>
            </div>
              <div style={styles.barra}></div>
            <div style={{...styles.title2, width: '13%'}}>
              <p style={styles.p}>CPF</p>
            </div>
              <div style={styles.barra}></div>

            <div style={{...styles.title2, width: '22%'}}>
              <p style={styles.p}>Telefone</p>
            </div>
                <div style={styles.barra}></div>

            <div style={{...styles.title2, width: '15%'}}>
              <p style={styles.p}>Locação</p>
            </div>
                <div style = {styles.barra}></div>
            <div style={{...styles.title2, width: '20%'}}>
              <p style={styles.p}>Ult. Atualização</p>
            </div>
          </div>

          <div style={styles.dataContainer}>
            {users.length === 0 ? (
              <h1>Carregando...</h1>
            ) : filterUsers.length === 0 ? (
              <h1>Sem resultados...</h1>
            ) : (
              filterUsers.map((user, index) => {
                return <PersonalData user={user} key={index} />;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListScreen;
