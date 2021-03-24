import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import {
  TableHeader, TableTitle, P, Bar,
} from './Style';
import CategoriesData from '../../Components/CategoriesData';
import GenericListScreen from '../../Components/GenericListScreen';
import { getCategories, createCategory } from '../../Services/Axios/demandsServices';
import TinyButton from '../../Components/TinyButton';

const ListCategories = () => {
  const [filterCategories, setFilterCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [word, setWord] = useState();
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('#000000');
  const [valid, setValid] = useState(true);

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

  const submit = async () => {
    await createCategory(name, description, color);
    getCategories();
    if (valid) {
      handleClose();
    }
  };

  return (
    <GenericListScreen
      ButtonTitle="Nova Categoria"
      ButtonFunction={handleShow}
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
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>Nova Categoria</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Line>
            <DivName>
              <P1>Nome:</P1>
              <Input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
            </DivName>
            <DivColor>
              <P1>Cor:</P1>
              <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            </DivColor>
          </Line>
          <DivDescription>
            <P1>Descrição:</P1>
            <TextArea rows="5" cols="30" name="text" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
          </DivDescription>
        </Modal.Body>
        <Modal.Footer>
          <TinyButton type="secondary" title="Cancelar" click={handleClose} />
          <TinyButton type="primary" title="Cadastrar" click={submit} />
        </Modal.Footer>
      </Modal>
    </GenericListScreen>
  );
};

export default ListCategories;
