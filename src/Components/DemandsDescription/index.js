import React from 'react';
import TinyButton from '../TinyButton';
import {
  InputField, DescriptionField, FieldsDiv, P, Footer, Title, InputDiv,
  InputsDiv, DescriptionDiv,
} from './Style';

const DemandsDescription = ({
  name, setName, process, setProcess, description, setDescription, submit,
}) => (

  <FieldsDiv>
    <Title>
      Nova Demanda
    </Title>
    <InputsDiv>
      <InputDiv width="60vw">
        <P>
          Nome:
        </P>
        <InputField placeholder="nome" value={name} onChange={(e) => setName(e.target.value)} />
      </InputDiv>
      <InputDiv width="30vw">
        <P>
          Preocesso:
        </P>
        <InputField placeholder="Nº do processo" value={process} onchange={(e) => setProcess(e.target.value)} />
      </InputDiv>
    </InputsDiv>
    <DescriptionDiv>
      <P>
        Descrição:
      </P>
      <DescriptionField rows="5" cols="30" name="text" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
    </DescriptionDiv>
    <Footer>
      <TinyButton type="secondary" title="Cancelar" />
      <TinyButton type="primary" title="Cadastrar" click={submit} />
    </Footer>
  </FieldsDiv>
);

export default DemandsDescription;
