import Modal from 'react-bootstrap/Modal';
import React from 'react';
import colors from '../../Constants/colors';
import TinyButton from '../TinyButton';

const ConfirmDemandModal = ({
  show, handleClose, submit, actionName,
}) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Alerta</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {actionName}
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
