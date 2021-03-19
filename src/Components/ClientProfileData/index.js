import React, { useState } from 'react';
// import { format } from 'date-fns';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { BsThreeDots, BsPencil } from 'react-icons/bs';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import axios from 'axios';
import {
  PersonDataBox, TableContent, Box, Ul, Li, Icon, Button, Content, P,
  TableContainer, ImageUser, DotContent,
} from '../PersonData/style';

const ClientProfileData = ({ client, getClients }) => {
  const [boxState, setBoxState] = useState(false);

  const ClientDeactivate = async () => {
    try {
      await axios.put(`http://localhost:3002/clients/deactivate/${client._id}`)
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const DeactivateClient = () => {
    ClientDeactivate();
    getClients();
  };

  return (
    <Content>
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
              color: 'black',
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
                  style={{ color: 'black', textDecorationLine: 'none' }}
                >
                  Editar
                </Link>
              </Button>
              <Icon>
                <BsPencil />
              </Icon>
            </Li>
            <Li>
              <Button onClick={DeactivateClient}>
                Desativar
              </Button>
              <Icon>
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
