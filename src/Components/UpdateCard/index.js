import React, { useState } from 'react';
import moment from 'moment-timezone';
import { BsPencil } from 'react-icons/bs';
import { BiTrash, BiLockAlt } from 'react-icons/bi';
import { FcHighPriority } from 'react-icons/fc';
import ModalEditUpdateDemand from '../ModalEditUpdateDemand';
import { deleteDemandUpdate } from '../../Services/Axios/demandsServices';
import { useProfileUser } from '../../Context';
import ConfirmDemandModal from '../ConfirmDemandModal';
import {
  Card, TopSide, DemandName, EditIcon,
  DemandDescription, BottomSide, CreatedAt, UserIcon,
  LockIcon, TrashIcon, IconsContainer, HighPriorityIcon,
} from './Style';

const UpdateCard = ({
  update, sector, demand, setChangeState, changeState,
}) => {
  const sectorName = sector?.filter((sectorByID) => sectorByID?._id === update.userSector);
  const [show, setShow] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const handleClose = () => setShow(false);
  const handleConfirm = () => setConfirm(false);
  const { user } = useProfileUser();

  const deleteUpdate = async () => {
    await deleteDemandUpdate(demand._id, update._id)
      .then(() => setChangeState(!changeState));
  };

  const validateDelete = () => {
    const dataNow = moment(moment.tz('America/Sao_Paulo').format('YYYY-MM-DDTHH:mm:ss')).toDate();
    const deleteData = moment(update.createdAt, 'YYYY-MM-DDTHH:mm:ss').toDate();
    const timeLimitData = moment(deleteData).add(30, 'minutes').format('YYYY-MM-DDTHH:mm:ss');
    const dateFormatTimeLimitData = moment(timeLimitData, 'YYYY-MM-DDTHH:mm:ss').toDate();

    if (moment(dataNow).isAfter(dateFormatTimeLimitData)) {
      alert('Não é possível apagar essa atualização.');
    } else {
      setConfirm(true);
    }
  };

  const catchUser = () => {
    if (user._id === update.userID) {
      setShow(true);
    } else {
      alert('Você não pode editar essa atualização.');
    }
  };

  const deleteCall = () => {
    if (user._id === update.userID) {
      validateDelete();
    } else {
      alert('Você não pode apagar essa atualização.');
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
          { update.important
            ? (
              <HighPriorityIcon>
                <FcHighPriority style={{ marginRight: '10px', color: 'black' }} />
              </HighPriorityIcon>
            )
            : null }
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
        important={update.important}
      />
      <ConfirmDemandModal
        show={confirm}
        handleClose={handleConfirm}
        submit={deleteUpdate}
        actionName=" deletar essa atualização d"
      />
    </Card>
  );
};

export default UpdateCard;
