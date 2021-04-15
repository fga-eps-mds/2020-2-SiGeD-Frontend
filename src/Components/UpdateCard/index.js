import React from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { BsPencil } from 'react-icons/bs';
import { BiTrash, BiLockAlt } from 'react-icons/bi';
import colors from '../../Constants/colors';
import { deleteDemandUpdate } from '../../Services/Axios/demandsServices';
import {
  Card, TopSide, DemandName, EditIcon,
  DemandDescription, BottomSide, CreatedAt, UserIcon,
  LockIcon, TrashIcon, IconsContainer,
} from './Style';

const UpdateCard = ({ update, demand, getDemandApi }) => {
  const refreshDemand = async () => {
    console.log('2');
    await getDemandApi();
    getDemandApi();
  };

  const deleteUpdate = async () => {
    console.log('1');
    await deleteDemandUpdate(demand._id, update._id)
      .then(refreshDemand());
  };
  const deleteCall = () => {
    deleteUpdate();
  };

  return (
    <Card>
      <TopSide>
        <div style={{ display: 'flex', width: '70%' }}>
          <UserIcon />
          <DemandName>
            {update.userName}
          </DemandName>
        </div>
        <IconsContainer>
          <LockIcon>
            <BiLockAlt style={{ marginRight: '10px', color: 'black' }} />
          </LockIcon>
          <EditIcon>
            <Link
              to="/"
              id={update._id}
              style={{ color: colors.primary, textDecorationLine: 'none' }}
            >
              <BsPencil style={{ marginRight: '10px' }} />
            </Link>
          </EditIcon>
          <TrashIcon
            onClick={() => { deleteCall(); }}
          >
            <BiTrash style={{ marginRight: '5px', color: 'red' }} />
          </TrashIcon>
        </IconsContainer>
      </TopSide>
      <BottomSide>
        <DemandDescription>
          {update.description}
        </DemandDescription>
        <CreatedAt>
          {format(new Date(update.updatedAt), 'dd/MM/yyyy')}
        </CreatedAt>
      </BottomSide>
    </Card>
  );
};

export default UpdateCard;
