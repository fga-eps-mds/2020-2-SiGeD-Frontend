import React, { useState } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { BsThreeDots, BsPencil } from 'react-icons/bs';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import axios from 'axios';
import {
  PersonDataBox, TableContent, Box, Ul, Li, Icon, Button, Content, P,
  TableContainer, ImageUser,
} from '../PersonData/style';

const PersonalData = ({ user, getUsers }) => {
  const [boxState, setBoxState] = useState(false);

  const DeleteUser = async () => {
    try {
      await axios.delete(`http://localhost:3001/users/delete/${user._id}`, { headers: { 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTYzNTMyNGRjZTQ0MDA1NTk3ZmE1NCIsImlhdCI6MTYxNjI5MjY4MywiZXhwIjoxNjE2MjkyOTIzfQ.D-SGHQnrBRTUhIhniqzS0NrUFfvi4wY-ufjqbMcn61k' } })
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const ClickDeleteUser = () => {
    DeleteUser();
    getUsers();
  };

  return (

    <Content>
      <PersonDataBox>
        <ImageUser>
          <IoPersonCircleOutline size="100%" />
        </ImageUser>
        <TableContainer>
          <TableContent width={20}>
            <P>{user.name}</P>
          </TableContent>

          <TableContent width={25}>
            <P>{user.email}</P>
          </TableContent>

          <TableContent width={20}>
            <P>{user.role}</P>
          </TableContent>

          <TableContent width={15}>
            <P>{user.sector}</P>
          </TableContent>

          <TableContent width={15}>
            <P>{format(new Date(user.updatedAt), 'dd/MM/yyyy')}</P>
          </TableContent>

          <TableContent width={5} margin-bottom={0}>
            <P><BsThreeDots onClick={() => { setBoxState(!boxState); }} /></P>
          </TableContent>
        </TableContainer>
      </PersonDataBox>

      {boxState ? (
        <Box>
          <Ul>
            <Li>
              <Button>
                <Link
                  to={`/usuarios/editar/${user._id}`}
                  id={user._id}
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
              <Button onClick={ClickDeleteUser}>
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

export default PersonalData;
