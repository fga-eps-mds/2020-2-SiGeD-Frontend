import React, { useEffect, useState } from 'react';
import {
  TableHeader, TableTitle, P, Bar,
} from './style';
import CategoriesData from '../../Components/CategoriesData';
import ReactModal from '../../Components/ReactModal';
import GenericListScreen from '../../Components/GenericListScreen';
import { getCategories } from '../../Services/Axios/demandsServices';

const ListCategories = () => {
  const [filterCategories, setFilterCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [statusModal, setStatusModal] = useState(false);
  const [word, setWord] = useState();

  const listCategorie = async () => {
    await getCategories()
      .then((response) => setCategories(response.data))
      .catch((error) => {
        console.error(`An unexpected error ocourred while getting categories.${error}`);
      });
  };

  useEffect(() => {
    listCategorie();
  }, []);

  const toggleModal = () => {
    setStatusModal(!statusModal);
    listCategorie();
  };

  useEffect(() => {
    setFilterCategories(
      categories.filter((category) => category.name.toLowerCase().includes(word?.toLowerCase())),
    );
  }, [word]);

  useEffect(() => {
    setFilterCategories(categories);
  }, [categories]);

  const renderCategories = () => {
    if (categories?.length === 0) {
      return <h1>Sem resultados</h1>;
    }
    if (filterCategories?.length === 0) {
      return <h1>Sem resultados</h1>;
    }
    return filterCategories?.map((category) => (
      <CategoriesData
        category={category}
        getCategories={listCategorie}
        key={category._id}
      />
    ));
  };

  return (
    <GenericListScreen
      ButtonTitle="Nova Categoria"
      ButtonFunction={toggleModal}
      PageTitle="Categorias"
      SearchWord={word}
      setWord={setWord}
      ListType={renderCategories()}
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
