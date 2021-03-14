import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import GenericRegisterScreen from '../../Components/GenericRegisterScreen';
import RegisterInput from '../../Components/RegisterInput';
import {
  validateName, validateCpf, validateEmail, validatePhone, validateCity,
} from '../../Utils/validations';

const ClientUpdateScreen = () => {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputCpf, setInputCpf] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputCity, setInputCity] = useState('');
  const [officeOption, setOfficeOption] = useState('');
  const [policeStationOption, setPoliceStationOption] = useState('');
  const { id } = useParams();

  const getClient = async () => {
    try {
      await axios.get(`http://localhost:3002/clients/${id}`)
        .then((response) => {
          const { data } = response;
          setInputName(data.name);
          setInputEmail(data.email);
          setInputCpf(data.cpf);
          setInputPhone(data.phone);
          setInputCity(data.city);
          setOfficeOption(data.office);
          setPoliceStationOption(data.policeStation);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getClient();
  }, []);

  const updateClient = async () => {
    try {
      await axios.put(`http://localhost:3002/clients/update/${id}`, {
        name: inputName,
        email: inputEmail,
        cpf: inputCpf,
        phone: inputPhone,
        city: inputCity,
        office: officeOption,
        policeStation: policeStationOption,
      })
        .then((response) => {
          console.log(response);
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
      updateClient();
    }
  };

  const cancel = () => {
    setInputName('');
    setInputEmail('');
    setInputCpf('');
    setInputPhone('');
    setInputCity('');
    setOfficeOption('');
    setPoliceStationOption('');
  };

  return (
    <GenericRegisterScreen
      sidebarList={[inputName, inputCpf,
        inputCity, officeOption, policeStationOption]}
      sidebarFooter={[inputEmail, inputPhone]}
      cancel={cancel}
      submit={submit}
      buttonTitle="Editar"
    >
      <RegisterInput long type="text" title="Nome" setText={setInputName} value={inputName} />
      <RegisterInput long type="text" title="Email" setText={setInputEmail} value={inputEmail} />
      <RegisterInput type="text" title="CPF" setText={setInputCpf} value={inputCpf} />
      <RegisterInput type="text" title="Telefone" setText={setInputPhone} value={inputPhone} />
      <RegisterInput long type="text" title="Cidade" setText={setInputCity} value={inputCity} />
      <Form.Group style={{ width: '45%' }}>
        <Form.Label>Cargo:</Form.Label>
        <Form.Control
          as="select"
          style={{ boxSizing: 'border-box', borderRadius: '1.5vw', border: '2px solid #000000' }}
          onChange={(Option) => setOfficeOption(Option.target.value)}
        >
          <option>{officeOption}</option>
          <option>Enfermeira</option>
          <option>Secretário</option>
          <option>Servidora</option>
          <option>Administrador</option>
        </Form.Control>
      </Form.Group>
      <Form.Group style={{ width: '45%' }}>
        <Form.Label>Local:</Form.Label>
        <Form.Control
          as="select"
          style={{ boxSizing: 'border-box', borderRadius: '1.5vw', border: '2px solid #000000' }}
          onChange={(policeOption) => setPoliceStationOption(policeOption.target.value)}
        >
          <option>{policeStationOption}</option>
          <option>CASA</option>
          <option>HOTEL</option>
          <option>TCU</option>
          <option>DPCM</option>
        </Form.Control>
      </Form.Group>
    </GenericRegisterScreen>
  );
};

export default ClientUpdateScreen;
