import React, { useEffect, useState } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import TinyButton from '../../Components/TinyButton';
import styles from './style';
import RegisterInput from '../../Components/RegisterInput';
import axios from 'axios';

const RegisterScreen = () => {
  const [cardName, setCardName] = useState('');
  const [cardEmail, setCardEmail] = useState('');
  const [cardRegister, setCardRegister] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputRegister, setInputRegister] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputConfirmPassword, setInputConfirmPassword] = useState('');
  const submit = () => {
    console.log(inputName, inputEmail, inputRegister, inputPassword, inputConfirmPassword);
  };
  const cancel = () => {
    setInputEmail('');
    setInputRegister('');
    setInputName('');
    setInputPassword('');
    setInputConfirmPassword('');
  };

  useEffect(() => {
    if (!inputName) setCardName('Nome');
    else setCardName(inputName);

    if (!inputEmail) setCardEmail('Email');
    else setCardEmail(inputEmail);

    if (!inputRegister) setCardRegister('Registro');
    else setCardRegister(inputRegister);
  }, [inputName, inputEmail, inputRegister]);

  return (
    <div style={styles.main}>

      <div style={styles.container}>

        <div style={styles.sidebar}>
          <IoPersonCircleOutline style={styles.peopleIcon} />

          <div style={styles.sidebarDiv}>
            <p style={styles.sidebarText}>{cardRegister}</p>
            <p style={styles.sidebarText}>{cardName}</p>
            <p style={styles.sidebarText}>{cardEmail}</p>
          </div>

        </div>

        <div style={styles.row}>

          <div style={styles.divInputs}>

            <RegisterInput type="text" title="Nome" setText={setInputName} value={inputName} />

            <RegisterInput type="text" title="Email" setText={setInputEmail} value={inputEmail} />

            <RegisterInput type="text" title="Registro" setText={setInputRegister} value={inputRegister} />

            <RegisterInput type="password" title="Senha" setText={setInputPassword} value={inputPassword} />

            <RegisterInput
              type="password"
              title="Confirmar senha"
              setText={setInputConfirmPassword}
              value={inputConfirmPassword}
            />

          </div>
          <div style={styles.divButtom}>

            <TinyButton type="secondary" title="Cancelar" click={cancel} />

            <TinyButton type="primary" title="Cadastrar" click={submit} />

          </div>

        </div>

      </div>

    </div>
  );
};

export default RegisterScreen;
