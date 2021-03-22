import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GenericRegisterScreen from '../../Components/GenericRegisterScreen';
import { validateSignUp } from '../../Utils/validations';
import { getUser, updateUser } from '../../Services/Axios/userServices';
import UserForms from '../../Components/UserForms';

const UserUpdateScreen = () => {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputRole, setInputRole] = useState('');
  const [inputSector, setInputSector] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputConfirmPassword, setInputConfirmPassword] = useState('');
  const { id } = useParams();

  const getUserFromApi = async () => {
    getUser(`users/${id}`)
      .then((response) => {
        const { data } = response;
        setInputName(data.name);
        setInputEmail(data.email);
        setInputRole(data.role);
        setInputSector(data.sector);
      });
  };

  useEffect(() => {
    getUserFromApi();
  }, []);

  const submit = () => {
    if (validateSignUp(inputEmail, inputName, inputPassword, inputConfirmPassword)) {
      updateUser(inputName, inputEmail, inputRole, inputSector, inputPassword, id);
    } else {
      alert("Nome deve ser completo, sem números\nEmail deve conter o formato 'nome@email.com'\nSenha deve conter no minimo 6 caracteres\nAs senhas devem ser iguais!");
    }
  };

  const cancel = () => {
    getUser();
  };

  return (
    <GenericRegisterScreen
      sidebarList={[inputName, inputEmail, inputRole, inputSector]}
      cancel={cancel}
      submit={submit}
      buttonTitle="Atualizar"
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

export default UserUpdateScreen;
