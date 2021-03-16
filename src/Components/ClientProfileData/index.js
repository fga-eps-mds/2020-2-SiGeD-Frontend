import React, { useState } from 'react';
// import { format } from 'date-fns';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { BsThreeDots, BsPencil } from 'react-icons/bs';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  ClientDataBox, TableContent, Box, Ul, Li, Icon, Button,
} from './style';

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
    <ClientDataBox>
      <TableContent
        width={15}
        justifycontent="flex-start"
        as={Link}
        to={`/perfil/${client._id}`}
        id={client._id}
        style={{ color: 'black', textDecorationLine: 'none' }}
      >
        <IoPersonCircleOutline size="4vw" />
        {client.name}
      </TableContent>

      <TableContent width={22} justifycontent="center">
        {client.email}
      </TableContent>

      <TableContent width={15} justifycontent="center">
        {client.cpf}
      </TableContent>

      <TableContent width={10} justifycontent="center">
        {client.phone}
      </TableContent>

      <TableContent width={15} justifycontent="center">
        {/* {format(new Date(client.updatedAt), 'dd/MM/yyyy')} */}
      </TableContent>

      <TableContent width={5} justifycontent="flex-end">
        <BsThreeDots onClick={() => { setBoxState(!boxState); }} />
      </TableContent>
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

    </ClientDataBox>
  );
};

export default ClientProfileData;
