import Modal from 'react-bootstrap/Modal';
import { toggleDemand } from '../../Services/Axios/demandsServices';
import colors from '../../Constants/colors';
import TinyButton from '../TinyButton';
import RedirectListButton from '../RedirectButton';

const CloseDemandModal = ({
  id, show, handleClose, message, startModal,
}) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Alerta</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {message}
    </Modal.Body>
    <Modal.Footer style={{ display: 'flex', justifyContent: 'center' }}>
      <TinyButton
        click={handleClose}
        type="primary"
        title="Cancelar"
        style={{
          backgroundColor: colors.alertMessages,
          borderColor: colors.alertMessages,
        }}
      />
      <RedirectListButton
        redirectTo="/demandas"
        type="primary"
        title="Confirmar"
        click={() => { toggleDemand(id, startModal); handleClose(); }}
        style={{
          backgroundColor: colors.primary,
          width: '20%',
        }}
      />
    </Modal.Footer>
  </Modal>
);

export default CloseDemandModal;
