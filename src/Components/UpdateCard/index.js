import React, { useState } from 'react';
import { format } from 'date-fns';
import { BsPencil } from 'react-icons/bs';
import { BiTrash, BiLockAlt } from 'react-icons/bi';
import { deleteDemandUpdate } from '../../Services/Axios/demandsServices';
import ModalEditUpdateDemand from '../ModalEditUpdateDemand';
import { useProfileUser } from '../../Context';
import {
  Card, TopSide, DemandName, EditIcon,
  DemandDescription, BottomSide, CreatedAt, UserIcon,
  LockIcon, TrashIcon, IconsContainer,
} from './Style';

const UpdateCard = ({ update, demand }) => {
  const deleteUpdate = async () => {
    deleteDemandUpdate(demand._id, update._id);
  };
  const deleteCall = () => {
    deleteUpdate();
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const { user } = useProfileUser();

  console.log(demand, 'AKI');

  const catchUser = () => {
    if(user._id) {
      console.log(user._id);
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
          <EditIcon onClick={() => { setShow(true); console.log('clicou'); }} style={{ cursor: 'pointer' }}>
            <BsPencil style={{ marginRight: '10px' }} />
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
      <ModalEditUpdateDemand
        showModal={show}
        handleClose={handleClose}
        name={user.name}
        description={update.description}
        visibilityRestriction={update.visibilityRestriction}
        updateDemandID={update._id}
        demandID={demand._id}
        updatedAt={update.CreatedAt}
      />
    </Card>
  );
};

export default UpdateCard;
