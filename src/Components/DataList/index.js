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
import ConfirmDemandModal from '../ConfirmDemandModal';

const DataList = ({
  content, getContent, axiosDelete, updateContent, backgroundColor, color, type, demands,
}) => {
  const { user, startModal } = useProfileUser();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [optionsMenuState, setOptionsMenuState] = useState(false);
  const [modalState, setModalState] = useState(false);
  const modalText = `Tem certeza que quer deletar essa ${type?.toLowerCase()}?`;

  const toggleMenu = () => {
    setModalState(true);
    setOptionsMenuState(false);
  };

  const toggleModal = () => {
    setModalState(!modalState);
  };

  const closeMenu = () => {
    if (optionsMenuState) {
      setOptionsMenuState(false);
    }
  };

  const deleteContent = async () => {
    await axiosDelete(content._id, startModal);
    getContent();
  };

  console.log(content._id);

  const verifyDeletion = () => {
    const findcategory = demands.map(
      (demand) => {
        console.log(demand);
        return demand.categoryID.filter((category) => category._id === content._id);
      },
    );

    console.log(findcategory);

    if (findcategory[1].length === 0 && findcategory[0] === 0) {
      alert('nao achei');
      deleteContent();
    } else {
      alert('achei');
    }
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
            <P>{ moment.parseZone(content.updatedAt).local(true).format('DD/MM/YYYY') }</P>
          </TableContent>

          <DotContent width={2}>
            <P>
              <BsThreeDotsVertical onClick={() => { setOptionsMenuState(!optionsMenuState); }} />
            </P>
          </DotContent>
        </TableContainer>
      </Personalbox>
      <ConfirmDemandModal
        show={show}
        handleClose={handleClose}
        submit={verifyDeletion}
        actionName={modalText}
      />
      {optionsMenuState ? (
        <Box>
          <Ul>
            <Li onClick={() => { toggleMenu(); }}>
              <Button>
                Editar
                <Icon>
                  <BsPencil />
                </Icon>
              </Button>
            </Li>
            {user.role === 'admin' ? (
              <Li onClick={handleShow}>
                <Button color="red">
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
