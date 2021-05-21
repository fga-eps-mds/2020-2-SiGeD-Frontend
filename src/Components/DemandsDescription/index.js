import React from 'react';
import TinyButton from '../TinyButton';
import {
  InputField, DescriptionField, FieldsDiv, P, Footer, Title, InputDiv,
  InputsDiv, DescriptionDiv, CenterDiv, DateInput, DateView,
} from './Style';

const DemandsDescription = ({
  name,
  setName,
  process,
  setProcess,
  description,
  setDescription,
  submit,
  cancel,
  buttomName,
  demandDate,
  setDemandDate,
}) => (

  <FieldsDiv>
    <CenterDiv>
      <Title>
        Nova Demanda
      </Title>
      <InputsDiv>
        <InputDiv width="60%">
          <P>
            Nome:
          </P>
          <InputField placeholder="nome" value={name} onChange={(e) => setName(e.target.value)} />
        </InputDiv>
        <InputDiv width="30%">
          <P>
            Processo:
          </P>
          <InputField placeholder="Nº do processo" value={process} onChange={(e) => setProcess(e.target.value)} />
        </InputDiv>
      </InputsDiv>
      <DescriptionDiv>
        <P>
          Descrição:
        </P>
        <DescriptionField rows="5" cols="30" name="text" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
      </DescriptionDiv>
      {buttomName === 'Cadastrar'
        && (
          <DateView>
            <P>Data:</P>
            <DateInput
              type="date"
              value={demandDate}
              onChange={(e) => setDemandDate(e.target.value)}
            />
          </DateView>
        )}
      <Footer>
        <TinyButton type="secondary" title="Cancelar" click={cancel} />
        <TinyButton type="primary" title={buttomName} click={submit} />
      </Footer>
    </CenterDiv>
  </FieldsDiv>
);

export default DemandsDescription;
