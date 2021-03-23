import React, { useState } from 'react';
import { BsThreeDotsVertical, BsPencil } from 'react-icons/bs';
import { FaRegTrashAlt } from 'react-icons/fa';
import {
  Personalbox, TableContent, Name, Box, Ul, Li, Icon, Button,
  P, Content, TableContainer, DotContent,
} from './style';
import ReactModal from '../ReactModal';
import { CategoryDelete } from '../../Services/Axios/demandsServices';

const CategoriesData = ({ category, getCategories }) => {
  const [boxState, setBoxState] = useState(false);
  const [modalState, setModalState] = useState(false);
  const categoryId = category._id;
  const toggleBox = () => {
    setModalState(true);
    setBoxState(!boxState);
  };
  const toggleModal = () => {
    setModalState(!modalState);
  };

  const DeleteCategory = () => {
    CategoryDelete(categoryId);
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
      {modalState ? <ReactModal type="Editar " idName={category.name} idDescription={category.description} getCategories={getCategories} toggleModal={toggleModal} id={category._id} idColor={category.color} /> : null}
    </Content>
  );
};

export default CategoriesData;
