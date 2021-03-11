import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TinyButton from '../TinyButton';
import {
  Main, Container, Sidebar, SidebarText, ColumnText, DivButtom, Icon,
  RightSideContainer,
} from './style';
import RegisterInput from '../RegisterInput';
import ValidateSignUp from '../Validations';
import { PassMatches } from '../ErrorMessage';

const GenericRegisterScreen = ({ type }) => {
  const [cardName, setCardName] = useState('');
  const [cardEmail, setCardEmail] = useState('');
  const [cardCpf, setCardCpf] = useState('');
  const [cardPhone, setCardPhone] = useState('');
  const [cardCity, setCardCity] = useState('');
  const [cardOffice, setCardOffice] = useState('');
  const [cardPoliceStation, setCardPoliceStation] = useState('');
  const [cardDepartment, setCardDepartment] = useState('');

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputCpf, setInputCpf] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputCity, setInputCity] = useState('');
  const [inputOffice, setInputOffice] = useState('');
  const [inputPoliceStation, setInputPoliceStation] = useState('');
  const [inputDepartment, setInputDepartment] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputConfirmPassword, setInputConfirmPassword] = useState('');
  const [valid, setValid] = useState('');

  async function postUser() {
    try {
      await axios.post('http://localhost:3001/signUp', {
        name: inputName,
        email: inputEmail,
        office: inputOffice,
        department: inputDepartment,
        password: inputPassword,
        confirmPassword: inputConfirmPassword,
      })
        .then((response) => {
          setValid(response);
          console.log(response, valid);
        });
    } catch (error) {
      console.error(error);
    }
  }

  async function postClient() {
    try {
      await axios.post('http://localhost:3001/clientes/cadastro', {
        name: inputName,
        email: inputEmail,
        cpf: inputCpf,
        phone: inputPhone,
        city: inputCity,
        office: inputOffice,
        policeStation: inputPoliceStation,
      })
        .then((response) => {
          setValid(response);
          console.log(response, valid);
        });
    } catch (error) {
      console.error(error);
    }
  }

  const submitUser = () => {
    if (ValidateSignUp(inputName, inputEmail, inputOffice, inputDepartment,
      inputPassword, inputConfirmPassword)) {
      postUser();
    } else {
      alert("Nome deve ser completo, sem números\nEmail deve conter o formato 'nome@email.com'\nSenha deve conter no minimo 6 caracteres\nAs senhas devem ser iguais!");
    }
  };

  const submitClient = () => {
    if (ValidateSignUp(inputName, inputEmail, inputCpf, inputPhone,
      inputCity, inputOffice, inputPoliceStation)) {
      postClient();
    } else {
      alert("Nome deve ser completo, sem números\nEmail deve conter o formato 'nome@email.com'\nSenha deve conter no minimo 6 caracteres\nAs senhas devem ser iguais!");
    }
  };

  const cancel = () => {
    setInputName('');
    setInputEmail('');
    setInputOffice('');
    setInputDepartment('');
    setInputPassword('');
    setInputConfirmPassword('');
    setInputCpf('');
    setInputPhone('');
    setInputCity('');
    setInputPoliceStation('');
  };

  useEffect(() => {
    if (!inputName) setCardName('Nome');
    else setCardName(inputName);

    if (!inputEmail) setCardEmail('Email');
    else setCardEmail(inputEmail);

    if (!inputOffice) setCardOffice('Cargo');
    else setCardDepartment(inputOffice);

    if (!inputDepartment) setCardDepartment('Setor');
    else setCardDepartment(inputDepartment);

    if (!inputCpf) setCardCpf('CPF');
    else setCardCpf(inputCpf);

    if (!inputPhone) setCardPhone('Telefone');
    else setCardPhone(inputPhone);

    if (!inputCity) setCardCity('Cidade');
    else setCardCity(inputCity);

    if (!inputPoliceStation) setCardPoliceStation('Locação');
    else setCardPoliceStation(inputPoliceStation);
  }, [inputName, inputEmail, inputOffice, inputDepartment, inputCpf,
    inputPhone, inputCity, inputPoliceStation]);

  return (

    <Main>
      <Container>
        <Sidebar>
          <Icon />
          <SidebarText>
            {type === 'user' && <p>{cardDepartment}</p>}
            {type === 'user' && <p>{cardOffice}</p>}
            <p>{cardName}</p>
            <p>{cardEmail}</p>
            {type === 'client' && <p>{cardCpf}</p>}
            {type === 'client' && <p>{cardPhone}</p>}
            {type === 'client' && <p>{cardCity}</p>}
            {type === 'client' && <p>{cardOffice}</p>}
            {type === 'client' && <p>{cardPoliceStation}</p>}
          </SidebarText>
        </Sidebar>
        <RightSideContainer>
          <ColumnText>
            <RegisterInput type="text" title="Nome" setText={setInputName} value={inputName} />
            <RegisterInput type="text" title="Email" setText={setInputEmail} value={inputEmail} />
            {type === 'client' && <RegisterInput type="text" title="CPF" setText={setInputCpf} value={inputCpf} />}
            {type === 'client' && <RegisterInput type="text" title="Telefone" setText={setInputPhone} value={inputPhone} />}
            {type === 'client' && <RegisterInput type="text" title="Cidade" setText={setInputCity} value={inputCity} />}
            <RegisterInput type="text" title="Cargo" setText={setInputOffice} value={inputOffice} />
            {type === 'client' && <RegisterInput type="text" title="Locação" setText={setInputPoliceStation} value={inputPoliceStation} />}
            {type === 'user' && <RegisterInput type="text" title="Setor" setText={setInputDepartment} value={inputDepartment} />}
            {type === 'user' && <RegisterInput type="password" title="Senha" setText={setInputPassword} value={inputPassword} />}
            {type === 'user'
            && (<RegisterInput type="password" title="Confirmar senha" setText={setInputConfirmPassword} value={inputConfirmPassword} />)}
            {type === 'user' && <PassMatches pass={inputPassword} confPass={inputConfirmPassword} />}
          </ColumnText>
          <DivButtom>
            <TinyButton type="secondary" title="Cancelar" click={cancel} />
            {type === 'user' && <TinyButton type="primary" title="Cadastrar" click={submitUser} />}
            {type === 'client' && <TinyButton type="primary" title="Cadastrar" click={submitClient} />}
          </DivButtom>
        </RightSideContainer>
      </Container>
    </Main>
  );
};

export default GenericRegisterScreen;
