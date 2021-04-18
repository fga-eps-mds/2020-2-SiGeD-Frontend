import { Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import moment from 'moment-timezone';
import { Checkbox, FormControlLabel } from '@material-ui/core';
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
  userSector,
  setChangeState,
  changeState,
}) => {
  const [updateDescription, setUpdateDescription] = useState(description);
  const [updateVisibility, setUpdateVisibility] = useState(visibilityRestriction);

  const editUpdate = async () => {
    updateDemandUpdate(
      name, userSector, updateDescription, demandID, updateDemandID, updateVisibility,
    );
  };

  const validateEdit = () => {
    const data = moment(moment.tz('America/Sao_Paulo').format('YYYY-MM-DDTHH:mm:ss')).toDate();
    // console.log(data);
    const updateData = moment(createdAt, 'YYYY-MM-DDTHH:mm:ss').toDate();
    // console.log(updateData);
    const stringDate = moment(updateData).add(30, 'minutes').format('YYYY-MM-DDTHH:mm:ss');
    // console.log(stringDate);
    const formatDate = moment(stringDate, 'YYYY-MM-DDTHH:mm:ss').toDate();
    // console.log(formatDate);

    if (moment(data).isAfter(formatDate)) {
      alert('Não é possível editar essa atualização.');
    } else {
      editUpdate();
      setChangeState(!changeState);
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Card>
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
            click={() => handleClose()}
            type="primary"
            title="Fechar"
            style={{
              backgroundColor: 'red',
              borderColor: 'black',
            }}
          />
          <TinyButton
            click={() => validateEdit()}
            type="primary"
            title="Editar"
            style={{
              backgroundColor: 'blue',
              borderColor: 'black',
            }}
          />
        </BottomSide>
      </Card>
    </Modal>
  );
};

export default ModalEditUpdateDemand;
