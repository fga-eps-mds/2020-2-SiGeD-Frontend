import { Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import moment from 'moment-timezone';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { useProfileUser } from '../../Context';
import {
  Card, TopSide, BottomSide, TextareaComp,
  CheckboxContainer, CheckboxDiv, ButtomDiv,
} from '../NewUpdateCard/Style';
import { updateDemandUpdate } from '../../Services/Axios/demandsServices';
import TinyButton from '../TinyButton';
import colors from '../../Constants/colors';
import ModalMessage from '../ModalMessage';

const ModalEditUpdateDemand = ({
  showModal,
  handleClose,
  name,
  description,
  updateDemandID,
  demandID,
  createdAt,
  userSector,
  setChangeState,
  changeState,
  important,
}) => {
  const [updateDescription, setUpdateDescription] = useState(description);
  const [updateVisibility, setUpdateVisibility] = useState(true);
  const { user, startModal } = useProfileUser();
  const [editedImportant, seteditedImportant] = useState(important);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const handleCloseMessage = () => setShowMessage(false);
  const handleShowMessage = () => setShowMessage(true);

  const editUpdate = async () => {
    updateDemandUpdate(
      name, userSector, user._id, updateDescription, demandID,
      updateDemandID, updateVisibility, editedImportant, startModal,
    );
    setUpdateVisibility(true);
    handleClose();
  };

  const validateEdit = async () => {
    const data = moment(moment.tz('America/Sao_Paulo').format('YYYY-MM-DDTHH:mm:ss')).toDate();
    const updateData = moment(createdAt, 'YYYY-MM-DDTHH:mm:ss').toDate();
    const stringDate = moment(updateData).add(30, 'minutes').format('YYYY-MM-DDTHH:mm:ss');
    const formatDate = moment(stringDate, 'YYYY-MM-DDTHH:mm:ss').toDate();

    if (moment(data).isAfter(formatDate)) {
      setMessage('Não é possível editar essa atualização.');
      handleShowMessage();
    } else {
      await editUpdate()
        .then(() => setChangeState(!changeState));
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Card style={{ border: 'none' }}>
        Editar atualização do(a) -
        {name}
        <TopSide>
          <TextareaComp
            rowsMax={4}
            rowsMin={3}
            aria-label="maximum height"
            placeholder=" Insira uma atualização de demanda."
            value={updateDescription}
            onChange={(e) => setUpdateDescription(e.target.value)}
          />
        </TopSide>
        <BottomSide>
          <CheckboxDiv>
            <CheckboxContainer>
              <FormControlLabel
                control={
                  (
                    <Checkbox
                      value={updateVisibility}
                      defaultChecked
                      inputProps={{ 'aria-label': 'Checkbox A' }}
                      style={{ color: `${colors.navHeaders}` }}
                      onClick={() => setUpdateVisibility(!updateVisibility)}
                    />
                  )
                }
                label="Visível somente para o meu setor"
              />
            </CheckboxContainer>
            <CheckboxContainer>
              <FormControlLabel
                control={
                  (
                    <Checkbox
                      value={editedImportant}
                      defaultChecked={important}
                      onClick={() => seteditedImportant(!editedImportant)}
                      inputProps={{ 'aria-label': 'Checkbox A' }}
                      style={{ color: `${colors.navHeaders}` }}
                    />
                  )
                }
                label="Importante"
              />
            </CheckboxContainer>
          </CheckboxDiv>
          <ButtomDiv>
            <TinyButton
              click={() => handleClose()}
              type="primary"
              title="Fechar"
              style={{
                backgroundColor: 'red',
                borderColor: 'white',
              }}
            />
            <TinyButton
              click={() => validateEdit()}
              type="primary"
              title="Editar"
              style={{
                backgroundColor: `${colors.primary}`,
                borderColor: 'white',
              }}
            />
          </ButtomDiv>
        </BottomSide>
      </Card>
      <ModalMessage
        show={showMessage}
        handleClose={handleCloseMessage}
        message={message}
      />
    </Modal>
  );
};

export default ModalEditUpdateDemand;
