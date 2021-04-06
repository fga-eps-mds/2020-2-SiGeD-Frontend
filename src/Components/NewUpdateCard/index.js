import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { createDemandUpdate } from '../../Services/Axios/demandsServices';
import TinyButton from '../TinyButton';
import {
  Card, TopSide, BottomSide, TextareaComp,
  CheckboxContainer,
} from './Style';
import colors from '../../Constants/colors';

const NewUpdateCard = ({
  demand, userName, getDemandApi,
}) => {
  const [description, setDescription] = useState('');
  const [visibilityRestriction, setVisibilityRestriction] = useState(false);

  const submit = () => {
    createDemandUpdate(userName, description, visibilityRestriction, demand._id);
    getDemandApi();
    setDescription('');
  };

  return (
    <Card>
      <TopSide>
        <TextareaComp
          rowsMax={4}
          rowsMin={3}
          aria-label="maximum height"
          placeholder=" Insira atualização de demanda."
          defaultValue=""
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </TopSide>
      <BottomSide>
        <CheckboxContainer>
          <FormControlLabel
            control={
              (
                <Checkbox
                  value="checked"
                  onClick={() => setVisibilityRestriction(!visibilityRestriction)}
                  inputProps={{ 'aria-label': 'Checkbox A' }}
                  style={{ color: `${colors.navHeaders}` }}
                />
              )
            }
            label="Visível somente para o meu setor"
          />
        </CheckboxContainer>
        <TinyButton
          type="primary"
          title="Adicionar Atualização"
          click={submit}
          style={{
            width: 'max-content',
          }}
        />
      </BottomSide>
    </Card>
  );
};

export default NewUpdateCard;
