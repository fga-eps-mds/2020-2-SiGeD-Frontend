import React from 'react';
import moment from 'moment-timezone';
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
    await getDemandApi();
    getDemandApi();
  };

  const deleteUpdate = async () => {
    await deleteDemandUpdate(demand._id, update._id)
      .then(refreshDemand());
  };
  const deleteCall = () => {
    console.log(update, 'AKI');
    const data = moment.utc(moment.tz('America/Sao_Paulo').format('YYYY-MM-DDTHH:mm:ss')).toDate();
    const updateData = new Date(update.createdAt);
    const formatdate = moment.utc(moment.tz('America/Sao_Paulo', (updateData).add(30, 'minutes')).toDate();
    console.log(formatdate, 'BUAAA');
    if (data) {
      deleteUpdate();
    }
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
