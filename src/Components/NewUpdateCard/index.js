import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { createDemandUpdate } from '../../Services/Axios/demandsServices';
import TinyButton from '../TinyButton';
import {
  Card, TopSide, BottomSide, TextareaComp,
  CheckboxContainer, CheckboxDiv,
} from './Style';
import colors from '../../Constants/colors';
import { useProfileUser } from '../../Context';

const NewUpdateCard = ({
  demand, getDemandApi, changeState, setChangeState,
}) => {
  const [description, setDescription] = useState('');
  const [visibilityRestriction, setVisibilityRestriction] = useState(true);
  const [important, setImportant] = useState(false);
  const { user, startModal } = useProfileUser();

  const submit = () => {
    createDemandUpdate(user.name, user.sector, user._id, description,
      visibilityRestriction, demand._id, important, startModal);
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
          placeholder=" Insira uma atualização de demanda."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </TopSide>
      <BottomSide>
        <CheckboxDiv>
          <CheckboxContainer>
            <FormControlLabel
              control={
                (
                  <Checkbox
                    value={visibilityRestriction}
                    defaultChecked
                    onClick={() => setVisibilityRestriction(!visibilityRestriction)}
                    inputProps={{ 'aria-label': 'Checkbox A' }}
                    style={{ color: `${colors.navHeaders}` }}
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
                    value={important}
                    onClick={() => setImportant(!important)}
                    inputProps={{ 'aria-label': 'Checkbox A' }}
                    style={{ color: `${colors.navHeaders}` }}
                  />
                )
              }
              label="Importante"
            />
          </CheckboxContainer>
        </CheckboxDiv>
        <TinyButton
          type="primary"
          title="Adicionar Atualização"
          click={() => { submit(); setChangeState(!changeState); }}
          style={{
            width: 'max-content',
            padding: '0% 3% 0 3%',
          }}
        />
      </BottomSide>
    </Card>
  );
};

export default NewUpdateCard;
