import React, { useEffect, useState } from 'react';
import {
  Main, InputField, DescriptionField, FieldsDiv, P, Footer, Title, InputDiv,
  InputsDiv, DescriptionDiv,
} from './Style';
import TinyButton from '../../Components/TinyButton';
import SectorDropdown from '../../Components/SectorDropdown';
import CategoryDiv from '../../Components/AddCategoryComponent';
import RightBoxComponent from '../../Components/RightBoxComponent';
import { createDemand } from '../../Services/Axios/demandsServices';
import { validateProcess } from '../../Utils/validations';

const CreateDemandsScreen = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [process, setProcess] = useState('');
  const [valid, setValid] = useState(true);

  useEffect(() => {
    if (!name || !description || !validateProcess(process)) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [name, description, process]);

  const submit = () => {
    if (valid) {
      createDemand(name, description, process);
      alert('Demanda criada com sucesso!');
      setProcess('');
      setDescription('');
      setName('');
    }
  };

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
            </P>
            <InputField placeholder="nome" value={name} onChange={(e) => setName(e.target.value)} />
          </InputDiv>
          <InputDiv width="30vw">
            <P>
              Preocesso:
            </P>
            <InputField placeholder="N° processo" value={process} onchange={(e) => setProcess(e.target.value)} />
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
      {/* Começa aki */}
      <RightBoxComponent>
        <SectorDropdown />
        <CategoryDiv />
      </RightBoxComponent>
    </Main>
  );
};

export default CreateDemandsScreen;
