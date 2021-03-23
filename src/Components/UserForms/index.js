import React from 'react';
import { Form } from 'react-bootstrap';
import RegisterInput from '../RegisterInput';
import { PassMatches } from '../ErrorMessage';
import { UserFormsColumnText, Dropdown } from './Style';

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
      <div style={{
        boxSizing: 'border-box', borderRadius: '1.5vw', border: '2px solid #000000', justifyContent: 'flex-start', display: 'flex',
      }}
      >
        <Dropdown
          as="select"
          value={inputRole}
          style={{ boxSizing: 'border-box', borderRadius: '1.5vw', border: '0px solid #000000' }}
          onChange={(Option) => setInputRole(Option.target.value)}
        >
          <option>Administrador(a)</option>
          <option>Profissional</option>
          <option>Recepcionista</option>
        </Dropdown>
      </div>
    </Form.Group>
    <Form.Group style={{ width: '45%' }}>
      <Form.Label>Setor:</Form.Label>
      <div style={{
        boxSizing: 'border-box', borderRadius: '1.5vw', border: '2px solid #000000', justifyContent: 'flex-start', display: 'flex',
      }}
      >
        <Dropdown
          as="select"
          value={inputSector}
          style={{ boxSizing: 'border-box', borderRadius: '1.5vw', border: '0px solid #000000' }}
          onChange={(Option) => setInputSector(Option.target.value)}
        >
          <option>Assistência Social</option>
          <option>Policial</option>
          <option>Familiar</option>
        </Dropdown>
      </div>
    </Form.Group>
    <RegisterInput long type="password" title="Senha" setText={setInputPassword} value={inputPassword} />
    <RegisterInput long type="password" title="Confirmar senha" setText={setInputConfirmPassword} value={inputConfirmPassword} />
    <PassMatches pass={inputPassword} confPass={inputConfirmPassword} />
  </UserFormsColumnText>
);

export default UserForms;
