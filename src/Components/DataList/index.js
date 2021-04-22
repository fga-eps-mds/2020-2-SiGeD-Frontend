import React, { useState } from 'react';
import moment from 'moment-timezone';
import { BsThreeDotsVertical, BsPencil } from 'react-icons/bs';
import { FaRegTrashAlt } from 'react-icons/fa';
import {
  Personalbox, TableContent, Name, Box, Ul, Li, Icon, Button,
  P, Content, TableContainer, DotContent,
} from './Style';
import ModalComp from '../ModalComp';
import { useProfileUser } from '../../Context';

const DataList = ({
  content, getContent, axiosDelete, updateContent, backgroundColor, color, type,
}) => {
  const { user } = useProfileUser();
  const [optionsMenuState, setOptionsMenuState] = useState(false);
  const [modalState, setModalState] = useState(false);
  // Abrir modal e fechar menu
  const toggleMenu = () => {
    setModalState(true);
    setOptionsMenuState(false);
  };
  // Muda atual estado da modal
  const toggleModal = () => {
    setModalState(!modalState);
  };
  // Fecha o menu
  const closeMenu = () => {
    if (optionsMenuState) {
      setOptionsMenuState(false);
    }
  };

  const deleteContent = async () => {
    await axiosDelete(content._id);
    getContent();
  };

  return (
    <Content onMouseLeave={closeMenu} onClick={closeMenu}>
      <Personalbox>
        <TableContainer>
          <TableContent width={24}>
            <Name backgroundColor={backgroundColor} color={color}>{content.name}</Name>
          </TableContent>

          <TableContent width={50}>
            <P>{content.description}</P>
          </TableContent>

          <TableContent width={24}>
            <P>{ moment.parseZone(content.createdAt).local(true).format('DD/MM/YYYY') }</P>
          </TableContent>

          <DotContent width={2}>
            <P>
              <BsThreeDotsVertical onClick={() => { setOptionsMenuState(!optionsMenuState); }} />
            </P>
          </DotContent>
        </TableContainer>
      </Personalbox>

      {optionsMenuState ? (
        <Box>
          <Ul>
            <Li>
              <Button onClick={() => { toggleMenu(); }}>
                Editar
                <Icon onClick={() => { toggleMenu(); }}>
                  <BsPencil />
                </Icon>
              </Button>
            </Li>
            {user.role === 'admin' ? (
              <Li>
                <Button color="red" onClick={deleteContent}>
                  Remover
                  <Icon color="red">
                    <FaRegTrashAlt />
                  </Icon>
                </Button>
              </Li>
            ) : null}
          </Ul>
        </Box>
      ) : null}
      {modalState ? <ModalComp show={modalState} type={type} operation="Editar " idName={content.name} idDescription={content.description} getContent={getContent} updateContent={updateContent} handleClose={toggleModal} id={content._id} idColor={backgroundColor} /> : null}
    </Content>
  );
};

export default DataList;
