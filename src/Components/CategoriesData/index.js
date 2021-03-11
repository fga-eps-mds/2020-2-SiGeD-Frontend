import React, { useState } from 'react';
import { BsThreeDotsVertical, BsPencil } from 'react-icons/bs';
import { FaRegTrashAlt } from 'react-icons/fa';
import {
  Personalbox, TableContent, Name, Box, Ul, Li, Icon, Button, P,
} from './style';
import Modal from '../Modal';

const CategoriesData = ({ category }) => {
  const [boxState, setBoxState] = useState(false);
  const [modalState, setModalState] = useState(false);

  const toggleBox = () => {
    setModalState(!modalState);
    setBoxState(!boxState);
  };

  return (
    <div>
      <Personalbox>
        <TableContent width={24}>
          <Name color={category.color}>{ category.name }</Name>
        </TableContent>

        <TableContent width={50}>
          <P>{ category.description }</P>
        </TableContent>

        <TableContent width={24}>
          <P>{ category.updatedAt.slice(0, 10).replaceAll('-', '/') }</P>
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
              <Button>
                Remover
              </Button>
              <Icon>
                <FaRegTrashAlt />
              </Icon>
            </Li>
          </Ul>
        </Box>
      ) : null}
      {modalState ? <Modal tipo="Editar " nome={category.name} descricao={category.description} /> : null}
    </div>
  );
};

export default CategoriesData;
