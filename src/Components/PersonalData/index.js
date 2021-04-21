import React, { useEffect, useState } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { BsThreeDots, BsPencil } from 'react-icons/bs';
import { FaRegTrashAlt } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import { deleteUser } from '../../Services/Axios/userServices';
import { getSector } from '../../Services/Axios/sectorServices';
import {
  PersonDataBox, TableContent, Box, Ul, Content, P,
  TableContainer, ImageUser, DotContent,
} from './Style';
import { Li, Button, Icon } from '../DataList/Style';
import { useProfileUser } from '../../Context';

const PersonalData = ({ user, getUsers }) => {
  const history = useHistory();
  const [boxState, setBoxState] = useState(false);
  const [userSector, setUserSector] = useState([]);

  const getSectorFromAPI = (id) => {
    getSector(`sector/${id}`)
      .then((response) => setUserSector(response.data));
  };

  const closeBox = () => {
    if (boxState) {
      setBoxState(false);
    }
  };

  const ClickDeleteUser = () => {
    deleteUser(user._id);
    getUsers();
  };

  useEffect(() => {
    getSectorFromAPI(user.sector);
  }, []);

  return (
    <Content onMouseLeave={closeBox} onClick={closeBox}>
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
            <P>{userSector?.name}</P>
          </TableContent>

          <TableContent width={15}>
            <P>{format(new Date(user.updatedAt), 'dd/MM/yyyy')}</P>
          </TableContent>

          <DotContent width={2} justifycontent="flex-end">
            <P><BsThreeDots onClick={() => { setBoxState(!boxState); }} /></P>
          </DotContent>
        </TableContainer>
      </PersonDataBox>

      {boxState ? (
        <Box>
          <Ul>
            <Li onClick={() => history.push(`/usuarios/editar/${user._id}`)}>
              <Button>
                Editar
                <Icon>
                  <BsPencil />
                </Icon>
              </Button>
            </Li>
            {!(useProfileUser().user._id !== user._id)
              || (
                <Li onClick={ClickDeleteUser}>
                  <Button color="red">
                    Desativar
                    <Icon color="red">
                      <FaRegTrashAlt />
                    </Icon>
                  </Button>
                </Li>
              )}
          </Ul>
        </Box>
      ) : null}
    </Content>
  );
};

export default PersonalData;
