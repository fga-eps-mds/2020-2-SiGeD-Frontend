import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ModalComp from '../../Components/ModalComp';
import {
  TableHeader, TableTitle, P, Bar,
} from './Style';
import GenericListScreen from '../../Components/GenericListScreen';
import {
  getCategories, createCategory, updateCategory, deleteCategory,
} from '../../Services/Axios/demandsServices';
import DataList from '../../Components/DataList';
import colors from '../../Constants/colors';

const ListCategories = () => {
  const [filterCategories, setFilterCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [word, setWord] = useState();
  const [statusModal, setStatusModal] = useState(false);

  const toggleModal = () => setStatusModal(!statusModal);

  const listCategories = async () => {
    await getCategories('category')
      .then((response) => setCategories(response.data))
      .catch((error) => {
        console.error(`An unexpected error ocourred while getting categories.${error}`);
      });
  };

  useEffect(() => {
    listCategories();
  }, []);

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
      <DataList
        content={category}
        getContent={listCategories}
        backgroundColor={category.color}
        color={colors.secondary}
        axiosDelete={deleteCategory}
        updateContent={updateCategory}
        type="Categoria"
      />
    ));
  };

  if (!localStorage.getItem('@App:token')) {
    return <Redirect to="/login" />;
  }
  try {
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
        { statusModal ? <ModalComp show={statusModal} type="Categoria" operation="Nova " idName="" idDescription="" idColor="#000000" getContent={listCategories} handleClose={toggleModal} createContent={createCategory} /> : null}
      </GenericListScreen>
    );
  } catch (error) {
    if (error.response.status === 401) {
      console.log('oi');
      ListCategories();
    }
  }
  return (
    <h1>Carregando</h1>
  );
};

export default ListCategories;
