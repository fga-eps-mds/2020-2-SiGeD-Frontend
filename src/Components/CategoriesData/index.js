import React, { useState } from 'react';
import axios from 'axios';
import { BsThreeDotsVertical, BsPencil } from 'react-icons/bs';
import { FaRegTrashAlt } from 'react-icons/fa';
import {
  Personalbox, TableContent, Name, Box, Ul, Li, Icon, Button,
  P, Content, TableContainer, DotContent,
} from './Style';
import ModalComp from '../ModalComp';

const CategoriesData = ({ category, getCategories }) => {
  const [boxState, setBoxState] = useState(false);
  const [modalState, setModalState] = useState(false);
  const toggleBox = () => {
    setModalState(true);
    setBoxState(!boxState);
  };
  const toggleModal = () => {
    setModalState(!modalState);
  };

  const CategoryDelete = async () => {
    try {
      await axios.delete(`http://localhost:3003/category/delete/${category._id}`);
    } catch (error) {
      alert('Não foi possível deletar a categoria, tente novamente mais tarde.');
    }
  };

  const DeleteCategory = () => {
    CategoryDelete();
    getCategories();
  };

  return (
    <Content>
      <Personalbox>
        <TableContainer>
          <TableContent width={24}>
            <Name color={category.color}>{category.name}</Name>
          </TableContent>

          <TableContent width={50}>
            <P>{category.description}</P>
          </TableContent>

          <TableContent width={24}>
            <P>{category.updatedAt.slice(0, 10).replaceAll('-', '/')}</P>
          </TableContent>

          <DotContent width={2}>
            <P><BsThreeDotsVertical onClick={() => { setBoxState(!boxState); }} /></P>
          </DotContent>
        </TableContainer>
      </Personalbox>

      {boxState ? (
        <Box>
          <Ul>
            <Li>
              <Button onClick={() => { toggleBox(); }}>
                Editar
              </Button>
              <Icon>
                <BsPencil />
              </Icon>
            </Li>
            <Li>
              <Button onClick={DeleteCategory}>
                Remover
              </Button>
              <Icon>
                <FaRegTrashAlt />
              </Icon>
            </Li>
          </Ul>
        </Box>
      ) : null}
      <ModalComp show={modalState} type="Editar " idName={category.name} idDescription={category.description} getCategories={getCategories} handleClose={toggleModal} id={category._id} idColor={category.color} />
    </Content>
  );
};

export default CategoriesData;
