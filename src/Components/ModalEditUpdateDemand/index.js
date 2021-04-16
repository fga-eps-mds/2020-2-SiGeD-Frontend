import { Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import moment from 'moment/src/moment';
import 
import {
  Card, TopSide, BottomSide, TextareaComp,
  CheckboxContainer,
} from './Style';
import { updateDemandUpdate } from '../../Services/Axios/demandsServices';
import TinyButton from '../TinyButton';
import colors from '../../Constants/colors';

const ModalEditUpdateDemand = ({
  showModal,
  handleClose,
  name,
  description,
  visibilityRestriction,
  updateDemandID,
  demandID,
  createdAt,
}) => {
  const [updateDescription, setUpdateDescription] = useState(description);
  const [updateVisibility, setUpdateVisibility] = useState(visibilityRestriction);

  const editUpdate = async () => {
    console.log(name, updateDescription, demandID, updateDemandID, updateVisibility, 'Teste');
    updateDemandUpdate(name, updateDescription, demandID, updateDemandID, updateVisibility);
  };

  const validateEdit = () => {
    editUpdate() ?
      const data = moment.utc(moment.tz('America/Sao_Paulo').format('YYYY-MM-DDTHH:mm:ss')).toDate();
      const updateData = new Date(update.createdAt);
      const formatdate = moment(updateData).utc(moment.tz('America/Sao_Paulo').add(30, 'minutes').format('YYYY-MM-DDTHH:mm:ss')).toDate();
      console.log(formatdate, 'BUAAA');)
    : alert('Você não pode editar a atualização!')
  }
return (
  <Modal show={showModal} onHide={handleClose} centered>
    <Card>
      <TopSide>
        <TextareaComp
          rowsMax={4}
          rowsMin={3}
          aria-label="maximum height"
          placeholder=" Insira uma atualização de demanda."
          onChange={(e) => setUpdateDescription(e.target.value)}
        />
      </TopSide>
      <BottomSide>
        <CheckboxContainer>
          <FormControlLabel
            control={
              (
                <Checkbox
                  value="checked"
                  inputProps={{ 'aria-label': 'Checkbox A' }}
                  style={{ color: `${colors.navHeaders}` }}
                  onClick={() => setUpdateVisibility(!updateVisibility)}
                />
              )
            }
            label="Visível somente para o meu setor"
          />
        </CheckboxContainer>
        <TinyButton
          click={() => validateEdit()}
          type="primary"
          title="Atualizar"
          style={{
            backgroundColor: 'blue',
            borderColor: 'black',
          }}
        />
        <TinyButton
          click={() => handleClose()}
          type="primary"
          title="Fechar"
          style={{
            backgroundColor: 'red',
            borderColor: 'black',
          }}
        />
      </BottomSide>
    </Card>
  </Modal>
);
};

export default ModalEditUpdateDemand;
