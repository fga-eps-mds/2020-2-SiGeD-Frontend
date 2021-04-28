import Modal from 'react-bootstrap/Modal';

const ModalHistory = ({ show, handleClose, children }) => (
  <Modal show={show} onHide={handleClose} size="lg" centered>
    <Modal.Header closeButton>
      <Modal.Title>Histórico de alterações de dados</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {children}
    </Modal.Body>
  </Modal>
);

export default ModalHistory;
