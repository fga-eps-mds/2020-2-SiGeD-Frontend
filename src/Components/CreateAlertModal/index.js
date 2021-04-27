import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
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

  const submit = async () => {
    await createAlert(inputName, inputDescription, inputDate, clientAlert, demand._id, startModal);
    setChangeState(!changeState);
    setInputName('');
    setInputDescription('');
    setInputDate('');
    setClientAlert(true);
  };

  return (
    <Modal show={show} onHide={handleClose}>
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
          <FormControlLabel
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
          />
        </BottomSide>
        <div />
      </Modal.Body>
      <Modal.Footer style={{ display: 'flex', justifyContent: 'center' }}>
        <TinyButton
          click={handleClose}
          type="primary"
          title="Cancelar"
          style={{
            backgroundColor: colors.secondary,
            color: colors.text,
            borderColor: colors.text,
          }}
        />
        <TinyButton
          click={() => { submit(); handleClose(); }}
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
