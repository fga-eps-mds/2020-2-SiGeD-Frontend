import React, { useState } from 'react';
import axios from 'axios';
import { BsThreeDotsVertical, BsPencil } from 'react-icons/bs';
import { FaRegTrashAlt } from 'react-icons/fa';
import {
  Personalbox, TableContent, Name, Box, Ul, Li, Icon, Button, P, Teste,
} from './style';
// import Modal from '../Modal';
import ReactModal from '../ReactModal';

const CategoriesData = ({ category, getCategories }) => {
  const [boxState, setBoxState] = useState(false);
  const [modalState, setModalState] = useState(false);
  // eslint-disable-line
  const { _id } = category;
  const toggleBox = () => {
    setModalState(true);
    console.log(modalState);
    setBoxState(!boxState);
  };
  const toggleModal = () => {
    setModalState(!modalState);
  };

  const CategoryDelete = async () => {
    try {
      await axios.delete(`http://localhost:3003/category/delete/${_id}`)
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const DeleteCategory = () => {
    CategoryDelete();
    getCategories();
  };

  return (
    <Teste>
      <Personalbox>
        <TableContent width={24}>
          <Name color={category.color}>{category.name}</Name>
        </TableContent>

        <TableContent width={50}>
          <P>{category.description}</P>
        </TableContent>

        <TableContent width={24}>
          <P>{category.updatedAt.slice(0, 10).replaceAll('-', '/')}</P>
        </TableContent>

        <TableContent width={2}>
          <P><BsThreeDotsVertical onClick={() => { setBoxState(!boxState); }} /></P>
        </TableContent>
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
      {modalState ? <ReactModal tipo="Editar " toggleModal={toggleModal} /> : null}
    </Teste>
  );
};

export default CategoriesData;
