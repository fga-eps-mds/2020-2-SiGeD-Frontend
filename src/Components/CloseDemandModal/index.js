import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from 'react';
import { toggleDemand } from '../../Services/Axios/demandsServices';
import colors from '../../Constants/colors';
import TinyButton from '../TinyButton';

const CloseDemandModal = ({
  demand, id, show, handleClose,
}) => {
  const [message, setMessage] = useState('');

  const setMessageLocal = () => {
    if (demand.open === false) {
      setMessage('Você tem certeza que deseja reabrir essa demanda?');
    }
    if (demand.open === true) {
      setMessage('Você tem certeza que deseja fechar essa demanda?');
    }
  };

  useEffect(() => {
    setMessageLocal();
  }, [message]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Alerta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {message}
      </Modal.Body>
      <Modal.Footer style={{ display: 'flex', justifyContent: 'center' }}>
        <TinyButton
          type="primary"
          title="Cancelar"
          click={handleClose}
          style={{
            backgroundColor: colors.alertMessages,
            borderColor: colors.alertMessages,
          }}
        />
        <TinyButton
          type="primary"
          title="Confirmar"
          click={() => { toggleDemand(id); handleClose(); }}
          style={{
            backgroundColor: colors.primary,
          }}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default CloseDemandModal;
