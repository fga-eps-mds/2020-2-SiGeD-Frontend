import React, { useState } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { BsThreeDots, BsPencil } from 'react-icons/bs';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import axios from 'axios';
import {
  PersonDataBox, TableContent, Box, Ul, Li, Icon, Button, Content, P,
  TableContainer, ImageUser, DotContent,
} from '../PersonData/Style';
import colors from '../../Constants/colors';

const ClientProfileData = ({ client, getClients }) => {
  const [boxState, setBoxState] = useState(false);

  const closeBox = () => {
    if (boxState) {
      setBoxState(false);
    }
  };

  const ClientDeactivate = async () => {
    try {
      await axios.put(`http://localhost:3002/clients/deactivate/${client._id}`);
    } catch (error) {
      console.error(error);
      alert('Não foi possivel desativar o usuario, tente novamente mais tarde.');
    }
  };

  const DeactivateClient = () => {
    ClientDeactivate();
    getClients();
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
            style={{
              color: colors.text,
              textDecorationLine: 'none',
              marginRight: '1.5vw',
            }}
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
            <P>{format(new Date(client.updatedAt), 'dd/MM/yyyy')}</P>
          </TableContent>

          <DotContent width={2} justifycontent="flex-end">
            <P><BsThreeDots onClick={() => { setBoxState(!boxState); }} /></P>
          </DotContent>
        </TableContainer>
      </PersonDataBox>

      {boxState ? (
        <Box>
          <Ul>
            <Li>
              <Button>
                <Link
                  to={`/editar/${client._id}`}
                  id={client._id}
                  style={{ color: colors.text, textDecorationLine: 'none' }}
                >
                  Editar
                </Link>
              </Button>
              <Icon>
                <Link
                  to={`/editar/${client._id}`}
                  id={client._id}
                  style={{ color: colors.text, textDecorationLine: 'none' }}
                >
                  <BsPencil />
                </Link>
              </Icon>
            </Li>
            <Li>
              <Button onClick={DeactivateClient}>
                Desativar
              </Button>
              <Icon onClick={DeactivateClient}>
                <FaRegTrashAlt />
              </Icon>
            </Li>
          </Ul>
        </Box>
      ) : null}
    </Content>
  );
};

export default ClientProfileData;
