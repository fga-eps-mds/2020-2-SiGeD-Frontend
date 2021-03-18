import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  TableHeader, TableTitle, P, Bar,
} from './style';
import CategoriesData from '../../Components/CategoriesData';
import ReactModal from '../../Components/ReactModal';
import GenericListScreen from '../../Components/GenericListScreen';

const ListCategories = () => {
  const [filterCategories, setFilterCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [statusModal, setStatusModal] = useState(false);
  const [word, setWord] = useState();

  const toggleModal = () => {
    setStatusModal(!statusModal);
  };

  const getCategories = async () => {
    await axios
      .get('http://localhost:3003/category')
      .then((response) => setCategories(response.data));
  };

  useEffect(() => {
    getCategories();
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
    return filterCategories.map((category) => {
      if (category) {
        return (
          <CategoriesData
            category={category}
            getCategories={getCategories}
            key={category._id}
          />
        );
      }
      return null;
    });
  };

  return (
    <GenericListScreen
      ButtonTitle="Nova Categoria"
      ButtonFunction={toggleModal}
      PageTitle="Categorias"
      SearchWord={word}
      setWord={setWord}
      ListType={listCategories()}
      redirectTo="/categorias"
    >
      <TableHeader>
        <TableTitle width={24}>
          <P>Nome</P>
        </TableTitle>
        <Bar />
        <TableTitle width={50}>
          <P>Descrição</P>
        </TableTitle>
        <Bar />
        <TableTitle width={24}>
          <P>Ult. Atualização</P>
        </TableTitle>
        <TableTitle width={2} />
      </TableHeader>
      { statusModal ? <ReactModal type="Nova " idName="" idColor="#000000" getCategories={getCategories} toggleModal={toggleModal} /> : null}
    </GenericListScreen>
  );
};

export default ListCategories;
