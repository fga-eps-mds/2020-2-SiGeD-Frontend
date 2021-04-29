import Modal from 'react-bootstrap/Modal';
import moment from 'moment';
import AlertBySectorData from '../AlertBySectorData';

const ViewAlertModal = ({
  show, handleClose, alerts,
}) => {
  const sortedAlerts = alerts?.sort((a, b) => moment(a.date).format('YYYYMMDD') - moment(b.date).format('YYYYMMDD'));

  const listAlertData = () => sortedAlerts?.map((alert) => (
    <AlertBySectorData alert={alert} />
  ));

  return (
    <Modal show={show} onHide={() => handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>Alertas</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          margin: '20px',
        }}
      >
        { listAlertData() }
      </Modal.Body>
    </Modal>
  );
};

export default ViewAlertModal;
