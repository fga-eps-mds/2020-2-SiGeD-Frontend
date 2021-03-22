import React from 'react';
import { Form } from 'react-bootstrap';
import RegisterInput from '../RegisterInput';
import ClientFormsColumnText from './Style';

const ClientForms = ({
  setInputName,
  inputName,
  setInputEmail,
  inputEmail,
  setInputCpf,
  inputCpf,
  setInputPhone,
  inputPhone,
  setInputCity,
  inputCity,
  setOfficeOption,
  setPoliceStationOption,
}) => (
  <ClientFormsColumnText>
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
        <option>CASA</option>
        <option>HOTEL</option>
        <option>TCU</option>
        <option>DPCM</option>
      </Form.Control>
    </Form.Group>
  </ClientFormsColumnText>
);
export default ClientForms;
