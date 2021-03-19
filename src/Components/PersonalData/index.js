import React, { useState } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { BsThreeDots, BsPencil } from 'react-icons/bs';
import { FaRegTrashAlt } from 'react-icons/fa';
import { format } from 'date-fns';
// import { Link } from 'react-router-dom';
import {
  PersonDataBox, TableContent, Box, Ul, Li, Icon, Button, Content, P,
  TableContainer, ImageUser,
} from '../PersonData/style';

const PersonalData = ({ user }) => {
  const [boxState, setBoxState] = useState(false);

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
                {/* <Link> */}
                Editar
                {/* </Link> */}
              </Button>
              <Icon>
                <BsPencil />
              </Icon>
            </Li>
            <Li>
              <Button>
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
