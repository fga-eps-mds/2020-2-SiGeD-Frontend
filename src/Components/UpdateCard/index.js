import React, { useState } from 'react';
import moment from 'moment-timezone';
import { BsPencil } from 'react-icons/bs';
import { BiTrash, BiLockAlt } from 'react-icons/bi';
import ModalEditUpdateDemand from '../ModalEditUpdateDemand';
import { deleteDemandUpdate } from '../../Services/Axios/demandsServices';
import { useProfileUser } from '../../Context';
import {
  Card, TopSide, DemandName, EditIcon,
  DemandDescription, BottomSide, CreatedAt, UserIcon,
  LockIcon, TrashIcon, IconsContainer,
} from './Style';

const UpdateCard = ({
  update, sector, demand, setChangeState, changeState,
}) => {
  const sectorName = sector?.filter((sectorByID) => sectorByID?._id === update.userSector);
  const deleteUpdate = async () => {
    deleteDemandUpdate(demand._id, update._id);
  };
  const deleteCall = () => {
    deleteUpdate();
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const { user } = useProfileUser();

  // console.log(demand, 'AKI');

  const catchUser = () => {
    if (user._id === demand.userID) {
      // console.log(user._id);
      setShow(true);
    } else {
      alert('Você não pode editar essa atualização.');
    }
  };

  return (
    <Card>
      <TopSide>
        <div style={{ display: 'flex', width: '70%' }}>
          <UserIcon />
          <DemandName>
            {update.userName}
            {' '}
            (
            {sectorName[0]?.name}
            )
          </DemandName>
        </div>
        <IconsContainer>
          <LockIcon>
            <BiLockAlt style={{ marginRight: '10px', color: 'black' }} />
          </LockIcon>
          <EditIcon
            onClick={() => { catchUser(); }}
            style={{ cursor: 'pointer' }}
          >
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
          { moment.parseZone(update.createdAt).local(true).format('DD/MM/YYYY HH:mm')}
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
        createdAt={update.createdAt}
        userSector={update.userSector}
        setChangeState={setChangeState}
        changeState={changeState}
      />
    </Card>
  );
};

export default UpdateCard;
