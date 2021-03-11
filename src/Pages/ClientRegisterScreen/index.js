import React, { useEffect, useState } from 'react';
// import { IoPersonCircleOutline } from 'react-icons/io5';
import axios from 'axios';
import TinyButton from '../../Components/TinyButton';
import {
  Main, Container, Sidebar, SidebarText, ColumnText, DivButtom, Icon, RightBox,
} from './style';
import RegisterInput from '../../Components/RegisterInput';
import ValidateSignUp from '../../Components/Validations';
import { PassMatches } from '../../Components/ErrorMessage';

const ClientRegisterScreen = () => {
  const [cardName, setCardName] = useState('');
  const [cardEmail, setCardEmail] = useState('');
  const [cardCpf, setCardCpf] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputCpf, setInputCpf] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputConfirmPassword, setInputConfirmPassword] = useState('');
  // const [inputLocation, setInputLocation] = useState('');
  // const [inputCity, setInputCity] = useState('');
  // const [inputOffice, setInputOffice] = useState('');
  // const [inputPhone, setInputPhone] = useState('');
  const [valid, setValid] = useState('');

  async function postUser() {
    try {
      await axios.post('http://localhost:3001/signUp', {
        name: inputName,
        email: inputEmail,
        cpf: inputCpf,
        pass: inputPassword,
      })
        .then((response) => {
          setValid(response);
          console.log(response, valid);
        });
    } catch (error) {
      console.error(error);
    }
  }

  const submit = () => {
    if (ValidateSignUp(inputEmail, inputName, inputPassword, inputConfirmPassword)) {
      postUser();
    } else {
      // eslint-disable-next-line no-alert
      alert("Nome deve ser completo, sem números\nEmail deve conter o formato 'nome@email.com'\nSenha deve conter no minimo 6 caracteres\nAs senhas devem ser iguais!");
    }
  };

  const cancel = () => {
    setInputEmail('');
    setInputCpf('');
    setInputName('');
    setInputPassword('');
    setInputConfirmPassword('');
  };

  useEffect(() => {
    if (!inputName) setCardName('Nome');
    else setCardName(inputName);

    if (!inputEmail) setCardEmail('Email');
    else setCardEmail(inputEmail);

    if (!inputCpf) setCardCpf('CPF');
    else setCardCpf(inputCpf);
  }, [inputName, inputEmail, inputCpf]);

  return (
    <Main>

      <Container>

        <Sidebar>
          <Icon />

          <SidebarText>
            <p>{cardCpf}</p>
            <p>{cardName}</p>
            <p>{cardEmail}</p>
          </SidebarText>

        </Sidebar>
        <RightBox>

          <ColumnText>

            <RegisterInput type="text" title="Nome" setText={setInputName} value={inputName} />

            <RegisterInput type="text" title="Email" setText={setInputEmail} value={inputEmail} />

            <RegisterInput type="text" title="CPF" setText={setInputCpf} value={inputCpf} />

            <RegisterInput type="password" title="Senha" setText={setInputPassword} value={inputPassword} />

            <RegisterInput
              type="password"
              title="Confirmar senha"
              setText={setInputConfirmPassword}
              value={inputConfirmPassword}
            />
            <PassMatches pass={inputPassword} confPass={inputConfirmPassword} />
          </ColumnText>

          <DivButtom>

            <TinyButton type="secondary" title="Cancelar" click={cancel} />

            <TinyButton type="primary" title="Cadastrar" click={submit} />

          </DivButtom>

        </RightBox>

      </Container>

    </Main>
  );
};

export default ClientRegisterScreen;
