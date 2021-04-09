import React, { useEffect, useState } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { BsThreeDots, BsPencil, BsPersonCheckFill } from 'react-icons/bs';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { toggleStatus } from '../../Services/Axios/clientServices';
import {
  PersonDataBox, TableContent, Box, Ul, Li, Icon, Button, Content, P,
  TableContainer, ImageUser, DotContent,
} from '../PersonData/Style';
import colors from '../../Constants/colors';

const ClientProfileData = ({ client, query }) => {
  const [boxState, setBoxState] = useState(false);
  const [text, setText] = useState('Desativar');
  const [textColor, setTextColor] = useState('');
  const [icon, setIcon] = useState('');

  useEffect(() => {
    if (query === true) {
      setText('Desativar');
      setTextColor(`${colors.alertMessages}`);
      setIcon(<FaRegTrashAlt color="red" />);
    } else {
      setText('Ativar');
      setTextColor(`${colors.navHeaders}`);
      setIcon(<BsPersonCheckFill />);
    }
  }, [query]);

  const closeBox = () => {
    if (boxState) {
      setBoxState(false);
    }
  };

  const DeactivateClient = () => {
    toggleStatus(client._id);
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
              <Button onClick={DeactivateClient} style={{ color: textColor }}>
                {text}
              </Button>
              <Icon onClick={DeactivateClient}>
                {icon}
              </Icon>
            </Li>
          </Ul>
        </Box>
      ) : null}
    </Content>
  );
};

export default ClientProfileData;
