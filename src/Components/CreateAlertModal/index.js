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
  demand, show, handleClose, startModal, changeState, setChangeState,
}) => {
  const [inputName, setInputName] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [clientAlert, setClientAlert] = useState(true);
  let response = null;
  const clearFields = () => {
    setInputName('');
    setInputDescription('');
    setInputDate('');
  };

  const submit = async () => {
    response = await createAlert(
      inputName, inputDescription, inputDate, clientAlert, demand._id, startModal,
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
      <Modal.Body
        style={{
          margin: '20px',
        }}
      >
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
      <Modal.Footer style={{ display: 'flex', justifyContent: 'center' }}>
        <TinyButton
          click={() => { clearFields(); handleClose(); }}
          type="primary"
          title="Cancelar"
          style={{
            backgroundColor: colors.secondary,
            color: colors.text,
            borderColor: colors.text,
          }}
        />
        <TinyButton
          click={() => submit()}
          type="primary"
          title="Cadastrar"
          style={{
            backgroundColor: colors.primary,
          }}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default CreateAlertModal;
