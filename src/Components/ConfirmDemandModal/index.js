import Modal from 'react-bootstrap/Modal';
import React from 'react';
import colors from '../../Constants/colors';
import TinyButton from '../TinyButton';

const ConfirmDemandModal = ({
  show, handleClose, submit, actionName,
}) => {
  const styles = {
    modalFooter: {
      display: 'flex',
      justifyContent: 'center',
    },
    tinyButton: {
      backgroundColor: colors.alertMessages,
      borderColor: colors.alertMessages,
    },
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Alerta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {actionName}
      </Modal.Body>
      <Modal.Footer style={styles.modalFooter}>
        <TinyButton
          type="primary"
          title="Cancelar"
          click={handleClose}
          style={styles.tinyButton}
        />
        <TinyButton
          type="primary"
          title="Confirmar"
          click={() => { handleClose(); submit(); }}
          style={{ backgroundColor: colors.primary }}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmDemandModal;
