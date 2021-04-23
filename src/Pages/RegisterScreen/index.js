import React, { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import GenericRegisterScreen from '../../Components/GenericRegisterScreen';
import { validateSignUp } from '../../Utils/validations';
import { postUser } from '../../Services/Axios/userServices';
import UserForms from '../../Components/UserForms';
import { useProfileUser } from '../../Context';

const RegisterScreen = () => {
  const { user, startModal } = useProfileUser();
  const history = useHistory();
  const [inputRegisterUserName, setRegisterUserInputName] = useState('');
  const [inputRegisterUserEmail, setRegisterUserInputEmail] = useState('');
  const [inputRegisterUserRole, setRegisterUserInputRole] = useState('Administrador(a)');
  const [inputRegisterUserSector, setRegisterUserInputSector] = useState('');
  const [sectors, setSectors] = useState([]);
  const [englishRole, setEnglishRole] = useState('admin');

  const submit = async () => {
    if (validateSignUp(inputRegisterUserEmail,
      inputRegisterUserName)) {
      const userSectorID = sectors?.find((sector) => sector.name === inputRegisterUserSector)._id;
      await postUser(inputRegisterUserName,
        inputRegisterUserEmail,
        englishRole,
        userSectorID,
        inputRegisterUserPassword,
        startModal);
      startModal('Usuário cadastrado com sucesso!');
      return history.push({ pathname: '/usuarios', state: { newUser: 'new' } });
    }
    startModal("Nome deve ser completo, sem números. Email deve conter o formato 'nome@email.com'. Senha deve conter no minimo 6 caracteres. As senhas devem ser iguais!");
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
  };

  if (!localStorage.getItem('@App:token')) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      {user ? (
        <>
          {user.role === 'admin'
            ? (
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
                />
              </GenericRegisterScreen>
            )
            : <Redirect to="/nao-autorizado" />}
        </>
      )
        : <h1>Carregando...</h1>}
    </>
  );
};

export default RegisterScreen;
