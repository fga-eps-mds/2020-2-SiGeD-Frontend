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
  policeStationOption,
}) => (
  <ClientFormsColumnText>
    <RegisterInput long type="text" title="Nome" setText={setInputName} value={inputName} />
    <RegisterInput long type="text" title="Email" setText={setInputEmail} value={inputEmail} />
    <RegisterInput type="text" title="CPF" setText={setInputCpf} value={inputCpf} />
    <RegisterInput type="text" title="Endereco" setText={setInputCity} value={inputCity} />
    <RegisterInput type="text" title="Telefone principal" setText={setInputPhone} value={inputPhone} />
    <RegisterInput type="text" title="Telefone secundario" setText={setInputPhone} value={inputPhone} />
    <Form.Group style={{ width: '45%' }}>
      <Form.Label style={{ margin: '0' }}>Cargo:</Form.Label>
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
    <RegisterInput type="text" title="Lotação" setText={setPoliceStationOption} value={policeStationOption} />
  </ClientFormsColumnText>
);
export default ClientForms;
