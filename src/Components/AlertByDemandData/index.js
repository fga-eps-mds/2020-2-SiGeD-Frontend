import React, { useState } from 'react';
import moment from 'moment-timezone';
import { BsPencil } from 'react-icons/bs';
import { BiTrash } from 'react-icons/bi';
import {
  AlertData, AlertName, AlertDate, EditIcon, TrashIcon,
} from './Style';
import { useProfileUser } from '../../Context';
import UpdateAlertModal from '../UpdateAlertModal';
import { deleteAlert } from '../../Services/Axios/demandsServices';

const AlertByDemandData = ({
  alert, demand, changeState, setChangeState,
}) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const { user, startModal } = useProfileUser();

  const deleteUpdate = () => {
    deleteAlert(alert._id, startModal)
      .then(() => setChangeState(!changeState));
  };

  return (
    <AlertData>
      <AlertName>
        {alert.name}
      </AlertName>
      <AlertDate>
        { moment.parseZone(alert.date).local(true).format('DD/MM/YYYY')}
      </AlertDate>
      <EditIcon
        onClick={() => handleShow()}
        style={{ cursor: 'pointer' }}
      >
        <BsPencil style={{ marginRight: '10px' }} />
      </EditIcon>
      <TrashIcon
        onClick={() => { deleteUpdate(); }}
      >
        <BiTrash style={{ marginRight: '5px', color: '#F08080' }} />
      </TrashIcon>
      <UpdateAlertModal
        demand={demand}
        show={show}
        handleClose={handleClose}
        startModal={startModal}
        changeState={changeState}
        setChangeState={setChangeState}
        user={user}
        name={alert.name}
        description={alert.description}
        date={alert.date}
        client={alert.alertClient}
        title="Editar"
      />
    </AlertData>
  );
};

export default AlertByDemandData;
