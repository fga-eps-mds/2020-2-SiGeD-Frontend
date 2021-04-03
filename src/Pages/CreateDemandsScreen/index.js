import React from 'react';
import {
  Main, InputField, DescriptionField, FieldsDiv, P, Footer, Title, InputDiv,
  InputsDiv, DescriptionDiv,
} from './Style';
import TinyButton from '../../Components/TinyButton';
import SectorDropdown from '../../Components/SectorDropdown';
import CategoryDiv from '../../Components/AddCategoryComponent';
import RightBoxComponent from '../../Components/RightBoxComponent';

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
      {/* Começa aki */}
      <RightBoxComponent>
        <SectorDropdown />
        <CategoryDiv />
      </RightBoxComponent>
    </Main>
  );
};

export default CreateDemandsScreen;
