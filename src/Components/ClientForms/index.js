import React from 'react';
import { Form } from 'react-bootstrap';
import RegisterInput from '../RegisterInput';
import ClientFormsColumnText from './Style';
import { Dropdown } from '../UserForms/Style';

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
      <div style={{
        boxSizing: 'border-box', borderRadius: '9px', border: '2px solid #000000', justifyContent: 'flex-start', display: 'flex',
      }}
      >
        <Dropdown
          as="select"
          onChange={(Option) => setOfficeOption(Option.target.value)}
        >
          <option>Policial</option>
          <option>Enfermeiro(a)</option>
          <option>Secretário(a)</option>
          <option>Servidor(a)</option>
          <option>Administrador(a)</option>
        </Dropdown>
      </div>
    </Form.Group>
    <Form.Group style={{ width: '45%' }}>
      <Form.Label>Local:</Form.Label>
      <div style={{
        boxSizing: 'border-box', borderRadius: '9px', border: '2px solid #000000', justifyContent: 'flex-start', display: 'flex',
      }}
      >
        <Dropdown
          as="select"
          onChange={(policeOption) => setPoliceStationOption(policeOption.target.value)}
        >
          <option>DPSS</option>
          <option>CASA</option>
          <option>TCU</option>
          <option>DPCM</option>
        </Dropdown>
      </div>
    </Form.Group>
  </ClientFormsColumnText>
);
export default ClientForms;
