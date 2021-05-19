import React, { useState } from 'react';
import moment from 'moment-timezone';
import { BsPencil } from 'react-icons/bs';
import { BiTrash } from 'react-icons/bi';
import {
  AlertData, AlertName, AlertDate, EditIcon, TrashIcon,
} from './Style';
import UpdateAlertModal from '../UpdateAlertModal';
import { deleteAlert } from '../../Services/Axios/demandsServices';
import { useProfileUser } from '../../Context';
import ConfirmDemandModal from '../ConfirmDemandModal';

const AlertByDemandData = ({
  alert, demand, changeState, setChangeState, setSorted,
}) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [showCancel, setShowCancel] = useState(false);
  const handleShowCancel = () => setShowCancel(true);
  const handleCloseCancel = () => setShowCancel(false);
  const { startModal } = useProfileUser();
  console.log('antes', alert);

  const submit = () => {
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
        onClick={() => { handleShow(); }}
        style={{ cursor: 'pointer' }}
      >
        <BsPencil style={{ marginRight: '10px' }} />
      </EditIcon>
      <TrashIcon onClick={() => handleShowCancel()}>
        <BiTrash style={{ marginRight: '5px', color: '#F08080' }} />
      </TrashIcon>
      <UpdateAlertModal
        demand={demand}
        alert={alert}
        show={show}
        handleClose={handleClose}
        changeState={changeState}
        setChangeState={setChangeState}
        setSorted={setSorted}
      />
      <ConfirmDemandModal
        show={showCancel}
        handleClose={handleCloseCancel}
        submit={submit}
        actionName="Você deseja apagar esse alerta?"
      />
    </AlertData>
  );
};

export default AlertByDemandData;
