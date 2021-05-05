import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
// import { Checkbox, FormControlLabel } from '@material-ui/core';
import colors from '../../Constants/colors';
import TinyButton from '../TinyButton';
import { createAlert } from '../../Services/Axios/demandsServices';
import {
  Input, TextareaComp, DropdownDiv, TextLabel, DateInput, Title, BottomSide,
} from './Style';

const CreateAlertModal = ({
  demand, show, handleClose, startModal, changeState, setChangeState, user,
}) => {
  const [inputName, setInputName] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [clientAlert, setClientAlert] = useState(true);
  const [checkbox, setCheckbox] = useState(false);
  let response = null;
  const clearFields = () => {
    setInputName('');
    setInputDescription('');
    setInputDate('');
    setCheckbox(false);
  };

  const styles = {
    modalBody: {
      margin: '20px',
    },
    modalFooter: {
      display: 'flex',
      justifyContent: 'center',
    },
    tinyButtonCancel: {
      backgroundColor: colors.secondary,
      color: colors.text,
      borderColor: colors.text,
    },
    tinyButtonSubmit: {
      backgroundColor: colors.primary,
    },
  };

  const submit = async () => {
    response = await createAlert(
      inputName, inputDescription, inputDate,
      clientAlert, checkbox, demand._id, user.sector, startModal,
    );
    if (response) {
      setChangeState(!changeState);
      clearFields();
      setClientAlert(true);
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={() => { clearFields(); handleClose(); }}>
      <Modal.Header closeButton>
        <Modal.Title>Alerta</Modal.Title>
      </Modal.Header>
      <Modal.Body style={styles.modalBody}>
        <Title>
          Nome
        </Title>
        <Input
          placeholder="Nome"
          type="text"
          onChange={(e) => setInputName(e.target.value)}
          value={inputName || ''}
        />
        <Title>
          Descrição
        </Title>
        <TextareaComp
          rowsMax={2}
          rowsMin={2}
          aria-label="maximum height"
          placeholder="Descrição"
          onChange={(e) => setInputDescription(e.target.value)}
          value={inputDescription}
        />
        <BottomSide>
          <DropdownDiv
            style={{ width: '40%' }}
          >
            <TextLabel>
              Data:
            </TextLabel>
            <DateInput
              type="date"
              value={inputDate}
              onChange={(e) => setInputDate(e.target.value)}
            />
          </DropdownDiv>
          <DropdownDiv
            style={{ width: '40' }}
          />
          {/* <FormControlLabel
            control={
            (
              <Checkbox
                value={clientAlert}
                defaultChecked
                onClick={() => setClientAlert(!clientAlert)}
                inputProps={{ 'aria-label': 'Checkbox A' }}
                style={{ color: `${colors.navHeaders}` }}
              />
            )
          }
            label="Alertar cliente"
            style={{
              width: '100%',
            }}
          /> */}
        </BottomSide>
        <div />
      </Modal.Body>
      <Modal.Footer style={styles.modalFooter}>
        <TinyButton
          click={() => { clearFields(); handleClose(); }}
          type="primary"
          title="Cancelar"
          style={styles.tinyButtonCancel}
        />
        <TinyButton
          click={() => submit()}
          type="primary"
          title="Cadastrar"
          style={styles.tinyButtonSubmit}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default CreateAlertModal;
