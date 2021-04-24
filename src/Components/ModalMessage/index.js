import Modal from 'react-bootstrap/Modal';
import React from 'react';

const ModalMessage = ({
  message, show, handleClose,
}) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Alerta</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        {message}
      </p>
    </Modal.Body>
  </Modal>
);

export default ModalMessage;
