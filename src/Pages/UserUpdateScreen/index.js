import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import GenericRegisterScreen from '../../Components/GenericRegisterScreen';
import { validateSignUp } from '../../Utils/validations';
import { postUser } from '../../Services/Axios/userServices';
import UserForms from '../../Components/UserForms';

const UserUpdateScreen = () => {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputRole, setInputRole] = useState('');
  const [inputSector, setInputSector] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputConfirmPassword, setInputConfirmPassword] = useState('');
  const { id } = useParams();

  const getUser = async () => {
    try {
      await axios.get(`http://localhost:3001/users/${id}`, { headers: { 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTYzNTMyNGRjZTQ0MDA1NTk3ZmE1NCIsImlhdCI6MTYxNjI5MjY4MywiZXhwIjoxNjE2MjkyOTIzfQ.D-SGHQnrBRTUhIhniqzS0NrUFfvi4wY-ufjqbMcn61k' } })
        .then((response) => {
          const { data } = response;
          setInputName(data.name);
          setInputEmail(data.email);
          setInputRole(data.role);
          setInputSector(data.sector);
          setInputPassword(data.pass);
          setInputConfirmPassword(data.pass);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const updateUser = async () => {
    try {
      await axios.put(`http://localhost:3001/users/update/${id}`, { headers: { 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTYzNTMyNGRjZTQ0MDA1NTk3ZmE1NCIsImlhdCI6MTYxNjI5MjY4MywiZXhwIjoxNjE2MjkyOTIzfQ.D-SGHQnrBRTUhIhniqzS0NrUFfvi4wY-ufjqbMcn61k' } }, {
        name: inputName,
        email: inputEmail,
        role: inputRole,
        sector: inputSector,
        pass: inputPassword,
      })
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const submit = () => {
    if (validateSignUp(inputEmail, inputName, inputPassword, inputConfirmPassword)) {
      postUser(inputName, inputEmail, inputRole, inputSector, inputPassword);
    } else {
      alert("Nome deve ser completo, sem números\nEmail deve conter o formato 'nome@email.com'\nSenha deve conter no minimo 6 caracteres\nAs senhas devem ser iguais!");
    }
    updateUser();
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
