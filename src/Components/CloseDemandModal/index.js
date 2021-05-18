import Modal from 'react-bootstrap/Modal';
import { toggleDemand } from '../../Services/Axios/demandsServices';
import colors from '../../Constants/colors';
import TinyButton from '../TinyButton';
import RedirectListButton from '../RedirectButton';

const CloseDemandModal = ({
  id, show, handleClose, message, startModal,
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
    redirectListButton: {
      backgroundColor: colors.primary,
      width: '20%',
    },
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Alerta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {message}
      </Modal.Body>
      <Modal.Footer style={styles.modalFooter}>
        <TinyButton
          click={handleClose}
          type="primary"
          title="Cancelar"
          style={styles.tinyButton}
        />
        <RedirectListButton
          redirectTo="/demandas"
          type="primary"
          title="Confirmar"
          click={() => { toggleDemand(id, startModal); handleClose(); }}
          style={styles.redirectListButton}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default CloseDemandModal;
