import React from 'react';
import { Form } from 'react-bootstrap';
import RegisterInput from '../RegisterInput';
import { PassMatches } from '../ErrorMessage';
import UserFormsColumnText from './Style';

const UserForms = ({
  setInputName,
  inputName,
  setInputEmail,
  inputEmail,
  setInputRole,
  inputRole,
  setInputSector,
  inputSector,
  setInputPassword,
  inputPassword,
  setInputConfirmPassword,
  inputConfirmPassword,
}) => (
  <UserFormsColumnText>
    <RegisterInput long type="text" title="Nome" setText={setInputName} value={inputName} />
    <RegisterInput long type="text" title="Email" setText={setInputEmail} value={inputEmail} />
    <Form.Group style={{ width: '45%' }}>
      <Form.Label>Cargo:</Form.Label>
      <Form.Control
        as="select"
        value={inputRole}
        style={{ boxSizing: 'border-box', borderRadius: '1.5vw', border: '2px solid #000000' }}
        onChange={(Option) => setInputRole(Option.target.value)}
      >
        <option>admin</option>
        <option>professional</option>
        <option>receptionist</option>
      </Form.Control>
    </Form.Group>
    <Form.Group style={{ width: '45%' }}>
      <Form.Label>Setor:</Form.Label>
      <Form.Control
        as="select"
        value={inputSector}
        style={{ boxSizing: 'border-box', borderRadius: '1.5vw', border: '2px solid #000000' }}
        onChange={(Option) => setInputSector(Option.target.value)}
      >
        <option>Policial</option>
        <option>Familiar</option>
        <option>Assistente Social</option>
      </Form.Control>
    </Form.Group>
    <RegisterInput long type="password" title="Senha" setText={setInputPassword} value={inputPassword} />
    <RegisterInput long type="password" title="Confirmar senha" setText={setInputConfirmPassword} value={inputConfirmPassword} />
    <PassMatches pass={inputPassword} confPass={inputConfirmPassword} />
  </UserFormsColumnText>
);

export default UserForms;
