import React, { useEffect, useState } from 'react';
import ModalComp from '../../Components/ModalComp';
import {
  TableHeader, TableTitle, P, Bar,
} from './Style';
import CategoriesData from '../../Components/CategoriesData';
import GenericListScreen from '../../Components/GenericListScreen';
import { getCategories } from '../../Services/Axios/demandsServices';

const ListCategories = () => {
  const [filterCategories, setFilterCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [word, setWord] = useState();
  const [statusModal, setStatusModal] = useState(false);

  const toggleModal = () => setStatusModal(!statusModal);

  const listCategories = async () => {
    await getCategories()
      .then((response) => setCategories(response.data))
      .catch((error) => {
        console.error(`An unexpected error ocourred while getting categories.${error}`);
      });
  };

  useEffect(() => {
    listCategories();
  }, []);

  const toggleModal = () => {
    setStatusModal(!statusModal);
    listCategories();
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
        getCategories={listCategories}
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
      { statusModal ? <ModalComp show={statusModal} type="Nova " idName="" idDescription="" idColor="#000000" getCategories={getCategories} handleClose={toggleModal} /> : null }
    </GenericListScreen>
  );
};

export default ListCategories;
