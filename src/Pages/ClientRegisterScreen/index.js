import React, { useState } from 'react';
import axios from 'axios';
import GenericRegisterScreen from '../../Components/GenericRegisterScreen';
import RegisterInput from '../../Components/RegisterInput';
import { validateClient } from '../../Utils/validations';

const ClientRegisterScreen = () => {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputCpf, setInputCpf] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputCity, setInputCity] = useState('');
  const [inputOffice, setInputOffice] = useState('');
  const [inputPoliceStation, setInputPoliceStation] = useState('');
  const [valid, setValid] = useState('');

  const postClient = async () => {
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
  };

  const submit = () => {
    if (validateClient(inputName, inputEmail, inputCpf, inputPhone,
      inputCity, inputOffice, inputPoliceStation)) {
      postClient();
    } else {
      alert("Nome deve ser completo, sem números\nEmail deve conter o formato 'nome@email.com'\nSenha deve conter no minimo 6 caracteres\nAs senhas devem ser iguais!");
    }
  };

  const cancel = () => {
    setInputName('');
    setInputEmail('');
    setInputCpf('');
    setInputPhone('');
    setInputCity('');
    setInputOffice('');
    setInputPoliceStation('');
  };

  return (
    <GenericRegisterScreen
      sidebarList={[inputName, inputEmail, inputCpf, inputPhone,
        inputCity, inputOffice, inputPoliceStation]}
      cancel={cancel}
      submit={submit}
      buttonTitle="Cadastrar"
    >
      <RegisterInput type="text" title="Nome" setText={setInputName} value={inputName} />
      <RegisterInput type="text" title="Email" setText={setInputEmail} value={inputEmail} />
      <RegisterInput type="text" title="CPF" setText={setInputCpf} value={inputCpf} />
      <RegisterInput type="text" title="Telefone" setText={setInputPhone} value={inputPhone} />
      <RegisterInput type="text" title="Cidade" setText={setInputCity} value={inputCity} />
      <RegisterInput type="text" title="Cargo" setText={setInputOffice} value={inputOffice} />
      <RegisterInput type="text" title="Locação" setText={setInputPoliceStation} value={inputPoliceStation} />
    </GenericRegisterScreen>
  );
};

export default ClientRegisterScreen;
