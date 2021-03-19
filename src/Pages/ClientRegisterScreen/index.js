import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import GenericRegisterScreen from '../../Components/GenericRegisterScreen';
import RegisterInput from '../../Components/RegisterInput';
import { validateFields } from '../../Utils/validations';
import { postClient } from '../../Services/Axios/clientServices';

const ClientRegisterScreen = () => {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputCpf, setInputCpf] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputCity, setInputCity] = useState('');
  const [officeOption, setOfficeOption] = useState('');
  const [policeStationOption, setPoliceStationOption] = useState('');

  const submit = () => {
    const message = validateFields(inputName, inputEmail, inputCpf, inputPhone,
      inputCity, 'Cadastrado do cliente realizado com sucesso!');

    if (!message) {
      postClient(
        inputName, inputEmail, inputCpf, inputPhone,
        inputCity, officeOption, policeStationOption,
      );
    }
    postClient(
      inputName, inputEmail, inputCpf, inputPhone, inputCity, officeOption, policeStationOption,
    );
    setInputName('');
    setInputCpf('');
    setInputEmail('');
    setInputPhone('');
    setInputCity('');
    setOfficeOption('');
    setPoliceStationOption('');
    alert('Cliente criado com sucesso!');
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
      buttonTitle="Cadastrar"
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
          <option>Policial</option>
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
