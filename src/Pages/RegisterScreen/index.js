import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import GenericRegisterScreen from '../../Components/GenericRegisterScreen';
import { validateSignUp } from '../../Utils/validations';
import { postUser } from '../../Services/Axios/userServices';
import UserForms from '../../Components/UserForms';

const RegisterScreen = () => {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputRole, setInputRole] = useState('admin');
  const [inputSector, setInputSector] = useState('Assistente Social');
  const [inputPassword, setInputPassword] = useState('');
  const [inputConfirmPassword, setInputConfirmPassword] = useState('');

  const submit = () => {
    if (validateSignUp(inputRegisterUserEmail,
      inputRegisterUserName,
      inputRegisterUserPassword,
      inputRegisterUserConfirmPassword)) {
      postUser(inputRegisterUserName,
        inputRegisterUserEmail,
        inputRegisterUserRole,
        inputRegisterUserSector,
        inputRegisterUserPassword);
      return history.push('/usuarios');
    }
    alert("Nome deve ser completo, sem números\nEmail deve conter o formato 'nome@email.com'\nSenha deve conter no minimo 6 caracteres\nAs senhas devem ser iguais!");
    setRegisterUserInputName('');
    setRegisterUserInputEmail('');
    setRegisterUserInputRole('');
    setRegisterUserInputSector('');
    setRegisterUserInputPassword('');
    setRegisterUserInputConfirmPassword('');
    return undefined;
  };

  const cancel = () => {
    setRegisterUserInputName('');
    setRegisterUserInputEmail('');
    setRegisterUserInputRole('');
    setRegisterUserInputSector('');
    setRegisterUserInputPassword('');
    setRegisterUserInputConfirmPassword('');
  };

  return (
    <GenericRegisterScreen
      sidebarList={[inputRegisterUserName,
        inputRegisterUserEmail,
        inputRegisterUserRole,
        inputRegisterUserSector]}
      cancel={cancel}
      submit={submit}
      buttonTitle="Cadastrar"
    >
      <UserForms
        setInputName={setRegisterUserInputName}
        inputName={inputRegisterUserName}
        setInputEmail={setRegisterUserInputEmail}
        inputEmail={inputRegisterUserEmail}
        setInputRole={setRegisterUserInputRole}
        inputRole={inputRegisterUserRole}
        setInputSector={setRegisterUserInputSector}
        inputSector={inputRegisterUserSector}
        setInputPassword={setRegisterUserInputPassword}
        inputPassword={inputRegisterUserPassword}
        setInputConfirmPassword={setRegisterUserInputConfirmPassword}
        inputConfirmPassword={inputRegisterUserConfirmPassword}
      />
    </GenericRegisterScreen>
  );
};

export default RegisterScreen;
