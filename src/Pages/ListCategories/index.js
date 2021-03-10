import React, { useEffect, useState } from 'react';
import { FaSistrix } from 'react-icons/fa';
import axios from 'axios';
import styles from './style';
import SearchInput from '../../Components/SearchInput';
import CategoriesData from '../../Components/CategoriesData';
import SearchButton from '../../Components/SearchButton';

const newCategory = () => {
  console.log('work in progress...');
};

const ListCategories = () => {
  const [word, setWord] = useState();
  const [filterCategories, setFilterCategories] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    await axios
      .get('http://localhost:3003/category')
      .then((response) => setCategories(response.data));
  }, []);

  useEffect(() => {
    setFilterCategories(
      categories.filter((category) => category.name.toLowerCase().includes(word?.toLowerCase())),
    );
  }, [word]);

  useEffect(() => {
    setFilterCategories(categories);
  }, [categories]);

  const listCategories = () => {
    if (categories.length === 0) {
      return <h1>Carregando...</h1>;
    }
    if (filterCategories.length === 0) {
      return <h1>Sem resultados...</h1>;
    }

    return filterCategories.map((category) => (
      <CategoriesData category={category} />
    ));
  };

  return (
    <div style={styles.main}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Categorias</h2>
          <div style={styles.buttonSearchContainer}>
            <div style={styles.search}>
              <SearchInput
                type="text"
                icon={<FaSistrix />}
                value={word}
                setWord={(value) => setWord(value)}
              />
            </div>
            <div style={styles.divButtom}>
              <SearchButton title="Nova categoria" click={newCategory} />
            </div>
          </div>

        </div>

        <div style={styles.contentBox}>
          <div style={styles.tableHeader}>
            <div style={{ ...styles.tableTitle, width: '25%' }}>
              <p style={styles.p}>Nome</p>
            </div>
            <div style={styles.bar} />
            <div style={{ ...styles.tableTitle, width: '50%' }}>
              <p style={styles.p}>Descrição</p>
            </div>
            <div style={styles.bar} />
            <div style={{ ...styles.tableTitle, width: '20%' }}>
              <p style={styles.p}>Ult. Atualização</p>
            </div>
          </div>

          <div>
            {listCategories()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCategories;
