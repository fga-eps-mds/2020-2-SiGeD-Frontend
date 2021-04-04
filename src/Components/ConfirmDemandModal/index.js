import Modal from 'react-bootstrap/Modal';
import React from 'react';
import colors from '../../Constants/colors';
import TinyButton from '../TinyButton';

const ConfirmDemandModal = ({ show, handleClose, submit }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Alerta</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Você tem certeza que deseja criar essa demanda?
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
        click={() => { handleClose(); submit(); }}
        style={{
          backgroundColor: colors.primary,
        }}
      />
    </Modal.Footer>
  </Modal>
);

export default ConfirmDemandModal;
