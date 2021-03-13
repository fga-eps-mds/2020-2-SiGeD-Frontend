import React from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { BsThreeDots } from 'react-icons/bs';
import { format } from 'date-fns';
import {
  PersonalBox, ImageUser, TableContent, P, TableContainer,
} from './style';

const PersonalData = ({ user }) => (
  <PersonalBox>
    <ImageUser>
      <IoPersonCircleOutline size="100%" />
    </ImageUser>
    <TableContainer>
      <TableContent width={20}>
        <P>{user.name}</P>
      </TableContent>

      <TableContent width={20}>
        <P>{user.email}</P>
      </TableContent>

      <TableContent width={25}>
        <P>{user.role}</P>
      </TableContent>

      <TableContent width={15}>
        <P>{user.sector}</P>
      </TableContent>

      <TableContent width={15}>
        <P>{format(new Date(user.updatedAt), 'dd/MM/yyyy')}</P>
      </TableContent>

      <TableContent width={5} margin-bottom={0}>
        <BsThreeDots size="1.5vw" />
      </TableContent>
    </TableContainer>
  </PersonalBox>
);

export default PersonalData;
