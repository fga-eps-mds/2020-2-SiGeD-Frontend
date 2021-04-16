import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import GenericRegisterScreen from '../../Components/GenericRegisterScreen';
import { validateSignUp } from '../../Utils/validations';
import { postUser } from '../../Services/Axios/userServices';
import UserForms from '../../Components/UserForms';

const RegisterScreen = () => {
  const history = useHistory();
  const [inputRegisterUserName, setRegisterUserInputName] = useState('');
  const [inputRegisterUserEmail, setRegisterUserInputEmail] = useState('');
  const [inputRegisterUserRole, setRegisterUserInputRole] = useState('Administrador(a)');
  const [inputRegisterUserSector, setRegisterUserInputSector] = useState('');
  const [inputRegisterUserPassword, setRegisterUserInputPassword] = useState('');
  const [inputRegisterUserConfirmPassword, setRegisterUserInputConfirmPassword] = useState('');
  const [sectors, setSectors] = useState([]);
  const [englishRole, setEnglishRole] = useState('admin');

  const submit = async () => {
    if (validateSignUp(inputRegisterUserEmail,
      inputRegisterUserName,
      inputRegisterUserPassword,
      inputRegisterUserConfirmPassword)) {
      const userSectorID = sectors?.find((sector) => sector.name === inputRegisterUserSector)._id;
      postUser(inputRegisterUserName,
        inputRegisterUserEmail,
        englishRole,
        userSectorID,
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

  useEffect(() => {
    if (inputRegisterUserRole === 'Administrador(a)') {
      setEnglishRole('admin');
    } else if (inputRegisterUserRole === 'Recepcionista') {
      setEnglishRole('receptionist');
    } else if (inputRegisterUserRole === 'Profissional') {
      setEnglishRole('professional');
    }
  }, [inputRegisterUserRole]);

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
        sectors={sectors}
        setSectors={setSectors}
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
