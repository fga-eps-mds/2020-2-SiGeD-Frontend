import React, { useEffect, useState } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { BsThreeDots, BsPencil, BsPersonCheckFill } from 'react-icons/bs';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useHistory, Link } from 'react-router-dom';
import moment from 'moment-timezone';
import { toggleStatus } from '../../Services/Axios/clientServices';
import {
  PersonDataBox, TableContent, Box, Ul, Content, P,
  TableContainer, ImageUser, DotContent,
} from '../PersonalData/Style';
import { Li, Button, Icon } from '../DataList/Style';
import colors from '../../Constants/colors';
import { useProfileUser } from '../../Context';
import ConfirmDemandModal from '../ConfirmDemandModal';

const ClientProfileData = ({ client, query, getClientsFromAPI }) => {
  const history = useHistory();
  const { user, startModal } = useProfileUser();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [boxState, setBoxState] = useState(false);
  const [text, setText] = useState('Desativar');
  const [modalText, setModalText] = useState('Você tem certeza que quer desativar este cliente?');
  const [textColor, setTextColor] = useState('');
  const [icon, setIcon] = useState('');

  const styles = {
    tableContent: {
      color: colors.text,
      textDecorationLine: 'none',
      marginRight: '1.5vw',
    },
  };

  useEffect(() => {
    if (query) {
      setText('Desativar');
      setModalText('Você tem certeza que quer desativar este cliente?');
      setTextColor('red');
      setIcon(<FaRegTrashAlt color="red" />);
    } else {
      setText('Ativar');
      setModalText('Você tem certeza que quer ativar este cliente?');
      setTextColor('green');
      setIcon(<BsPersonCheckFill color="green" />);
    }
  }, [query]);

  const closeBox = () => {
    if (boxState) {
      setBoxState(false);
    }
  };

  const DeactivateClient = async () => {
    await toggleStatus(client._id, startModal);
    getClientsFromAPI();
  };

  return (
    <Content onMouseLeave={closeBox} onClick={closeBox}>
      <PersonDataBox>
        <ImageUser>
          <IoPersonCircleOutline size="100%" />
        </ImageUser>
        <TableContainer>
          <TableContent
            width={22}
            justifycontent="center"
            as={Link}
            to={`/perfil/${client._id}`}
            id={client._id}
            style={styles.tableContent}
          >
            <P>{client.name}</P>
          </TableContent>

          <TableContent width={25} justifycontent="center">
            <P>{client.email}</P>
          </TableContent>

          <TableContent width={17} justifycontent="center">
            <P>{client.cpf}</P>
          </TableContent>

          <TableContent width={15} justifycontent="center">
            <P>{client.phone}</P>
          </TableContent>

          <TableContent width={15} justifycontent="center">
            <P>{ moment.parseZone(alert.date).local(true).format('DD/MM/YYYY') }</P>
          </TableContent>

          <DotContent width={2} justifycontent="flex-end">
            <P><BsThreeDots onClick={() => { setBoxState(!boxState); }} /></P>
          </DotContent>
        </TableContainer>
      </PersonDataBox>
      <ConfirmDemandModal
        show={show}
        handleClose={handleClose}
        submit={DeactivateClient}
        actionName={modalText}
      />
      {boxState && user ? (
        <Box>
          <Ul>
            <Li onClick={() => history.push(`/editar/${client._id}`)}>
              <Button>
                Editar
                <Icon>
                  <BsPencil />
                </Icon>
              </Button>
            </Li>
            {user.role === 'admin' ? (
              <Li onClick={handleShow}>
                <Button color={textColor}>
                  {text}
                  <Icon color={textColor}>
                    {icon}
                  </Icon>
                </Button>
              </Li>
            ) : null}
          </Ul>
        </Box>
      ) : null}
    </Content>
  );
};

export default ClientProfileData;
