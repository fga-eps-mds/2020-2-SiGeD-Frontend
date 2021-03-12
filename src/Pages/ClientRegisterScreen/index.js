import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import GenericRegisterScreen from '../../Components/GenericRegisterScreen';
import RegisterInput from '../../Components/RegisterInput';
import {
  validateName, validatePhone, validateCity, validateCpf, validateEmail,
} from '../../Utils/validations';

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
      await axios.post('http://localhost:3002/clients/create', {
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
    if (validateName(inputName) === false) {
      alert('Nome inválido.');
    } if (validateCpf(inputCpf) === false) {
      alert('CPF inválido.');
    } if (validateEmail(inputEmail) === false) {
      alert('Email inválido.');
    } if (validatePhone(inputPhone) === false) {
      alert('telefone inválido.');
    } if (validateCity(inputCity) === false) {
      alert('Cidade invalida.');
    } if (
      validateName(inputName) && validateCpf(inputCpf) && validateEmail(inputEmail)
      && validatePhone(inputPhone) && validateCity(inputCity)
    ) {
      postClient();
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
      <RegisterInput long type="text" title="Nome" setText={setInputName} value={inputName} />
      <RegisterInput long type="text" title="Email" setText={setInputEmail} value={inputEmail} />
      <RegisterInput type="text" title="CPF" setText={setInputCpf} value={inputCpf} />
      <RegisterInput type="text" title="Telefone" setText={setInputPhone} value={inputPhone} />
      <RegisterInput long type="text" title="Cidade" setText={setInputCity} value={inputCity} />
      <Form.Group style={{ width: '45%' }}>
        <Form.Label>Cargo:</Form.Label>
        <Form.Control as="select" style={{ boxSizing: 'border-box', borderRadius: '1.5vw', border: '2px solid #000000' }}>
          <option>Policial</option>
          <option>Enfermeira</option>
          <option>Secretário</option>
          <option>Servidora</option>
          <option>Administrador</option>
        </Form.Control>
      </Form.Group>
      <Form.Group style={{ width: '45%' }}>
        <Form.Label>Local:</Form.Label>
        <Form.Control as="select" style={{ boxSizing: 'border-box', borderRadius: '1.5vw', border: '2px solid #000000' }}>
          <option>DPSS</option>
          <option>CASA</option>
          <option>HOTEL</option>
          <option>TCU</option>
          <option>DPCM</option>
        </Form.Control>
      </Form.Group>
    </GenericRegisterScreen>
  );
};

export default ClientRegisterScreen;
