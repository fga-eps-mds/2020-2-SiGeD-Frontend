import React from 'react';
import {
  Main, RightBox, InputField, DescriptionField, FieldsDiv, P, Footer, Title, InputDiv,
  InputsDiv, DescriptionDiv,
} from './Style';
import TinyButton from '../../Components/TinyButton';
import SearchInput from '../../Components/SearchInput';

const CreateDemandsScreen = () => {
  const teste = 'Yukio';
  return (
    <Main>
      <FieldsDiv>
        <Title>
          Nova Demanda
        </Title>
        <InputsDiv>
          <InputDiv width="60vw">
            <P>
              Nome:
              {teste}
            </P>
            <InputField placeholder="nome" />
          </InputDiv>
          <InputDiv width="30vw">
            <P>
              Preocesso:
            </P>
            <InputField placeholder="N° processo" />
          </InputDiv>
        </InputsDiv>
        <DescriptionDiv>
          <P>
            Descrição:
          </P>
          <DescriptionField rows="5" cols="30" name="text" placeholder="Descrição" />
        </DescriptionDiv>
        <Footer>
          <TinyButton type="secondary" title="Cancelar" />
          <TinyButton type="primary" title="Cadastrar" />
        </Footer>
      </FieldsDiv>
      <RightBox>
        <SearchInput />
      </RightBox>
    </Main>
  );
};

export default CreateDemandsScreen;
