import React, { useState } from 'react';
import GenericRegisterScreen from '../../Components/GenericRegisterScreen';
import { validateSignUp } from '../../Utils/validations';
import { postUser } from '../../Services/Axios/userServices';
import UserForms from '../../Components/UserForms';

const RegisterScreen = () => {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputRole, setInputRole] = useState('');
  const [inputSector, setInputSector] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputConfirmPassword, setInputConfirmPassword] = useState('');

  const submit = () => {
    if (validateSignUp(inputEmail, inputName, inputPassword, inputConfirmPassword)) {
      postUser(inputName, inputEmail, inputRole, inputSector, inputPassword);
    } else {
      alert("Nome deve ser completo, sem números\nEmail deve conter o formato 'nome@email.com'\nSenha deve conter no minimo 6 caracteres\nAs senhas devem ser iguais!");
    }
    setInputName('');
    setInputEmail('');
    setInputRole('');
    setInputSector('');
    setInputPassword('');
    setInputConfirmPassword('');
  };

  const cancel = () => {
    setInputName('');
    setInputEmail('');
    setInputRole('');
    setInputSector('');
    setInputPassword('');
    setInputConfirmPassword('');
  };

  return (
    <GenericRegisterScreen
      sidebarList={[inputName, inputEmail, inputRole, inputSector]}
      cancel={cancel}
      submit={submit}
      buttonTitle="Cadastrar"
    >
      <UserForms
        setInputName={setInputName}
        inputName={inputName}
        setInputEmail={setInputEmail}
        inputEmail={inputEmail}
        setInputRole={setInputRole}
        inputRole={inputRole}
        setInputSector={setInputSector}
        inputSector={inputSector}
        setInputPassword={setInputPassword}
        inputPassword={inputPassword}
        setInputConfirmPassword={setInputConfirmPassword}
        inputConfirmPassword={inputConfirmPassword}
      />
    </GenericRegisterScreen>
  );
};

export default RegisterScreen;
