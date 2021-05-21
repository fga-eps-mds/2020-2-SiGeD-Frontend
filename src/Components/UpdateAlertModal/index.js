import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import colors from '../../Constants/colors';
import TinyButton from '../TinyButton';
import { updateAlert } from '../../Services/Axios/demandsServices';
import {
  Input, TextareaComp, DropdownDiv, TextLabel, DateInput, Title, BottomSide,
} from './Style';
import { useProfileUser } from '../../Context';

const UpdateAlertModal = ({
  demand, alert, show, handleClose, changeState,
  setChangeState, setSorted,
}) => {
  const [inputAlertName, setInputAlertName] = useState(alert?.name);
  const [inputAlertDescription, setInputAlertDescription] = useState(alert?.description);
  const [inputAlertDate, setInputAlertDate] = useState(alert?.date);
  const [clientAlert, setClientAlert] = useState(alert?.alertClient);
  const { user, startModal, changeAlertState } = useProfileUser();

  useEffect(() => {
    setInputAlertName(alert?.name);
    setInputAlertDescription(alert?.description);
    setInputAlertDate(alert?.date);
  }, [alert]);

  const submit = () => {
    updateAlert(
      alert?._id, inputAlertName, inputAlertDescription, inputAlertDate,
      clientAlert, alert?.checkbox, demand?._id, user.sector, startModal,
    )
      .then(() => {
        startModal('Alerta editado com sucesso!');
        setChangeState(!changeState);
        setClientAlert(true);
        setSorted(false);
        changeAlertState();
        handleClose();
      });
  };

  return (
    <Modal show={show} onHide={() => { handleClose(); }}>
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
          onChange={(e) => setInputAlertName(e.target.value)}
          value={inputAlertName || ''}
        />
        <Title>
          Descrição
        </Title>
        <TextareaComp
          rowsMax={2}
          rowsMin={2}
          aria-label="maximum height"
          placeholder="Descrição"
          onChange={(e) => setInputAlertDescription(e.target.value)}
          value={inputAlertDescription}
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
              value={inputAlertDate}
              onChange={(e) => setInputAlertDate(e.target.value)}
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
          click={() => { handleClose(); }}
          type="primary"
          title="Cancelar"
          style={{
            backgroundColor: colors.secondary,
            color: colors.text,
            borderColor: colors.text,
          }}
        />
        <TinyButton
          click={() => { submit(); }}
          type="primary"
          title="Editar"
          style={{
            backgroundColor: colors.primary,
          }}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateAlertModal;
