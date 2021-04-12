import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import RegisterInput from '../RegisterInput';
import { PassMatches } from '../ErrorMessage';
import { UserFormsColumnText, Dropdown } from './Style';
import { getSectors } from '../../Services/Axios/sectorServices';
import DropdownComponent from '../DropdownComponent';
import colors from '../../Constants/colors';

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
}) => {
  const [sectors, setSectors] = useState([]);
  const [filterSector, setFilterSector] = useState([]);

  const getSectorsFromApi = async () => {
    await getSectors()
      .then((response) => {
        setSectors(response.data);
      });
  };

  useEffect(() => {
    getSectorsFromApi();
  }, []);

  useEffect(() => {
    setFilterSector(sectors);
  }, [sectors]);

  return (
    <UserFormsColumnText>
      <RegisterInput long type="text" title="Nome" setText={setInputName} value={inputName} />
      <RegisterInput long type="text" title="Email" setText={setInputEmail} value={inputEmail} />
      <Form.Group style={{ width: '45%' }}>
        <Form.Label>Cargo:</Form.Label>
        <div style={{
          boxSizing: 'border-box', borderRadius: '9px', border: '2px solid #000000', justifyContent: 'flex-start', display: 'flex',
        }}
        >
          <Dropdown
            as="select"
            value={inputRole}
            style={{ boxSizing: 'border-box', borderRadius: '9px', border: '0px solid #000000' }}
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
          boxSizing: 'border-box', borderRadius: '9px', border: '2px solid #000000', justifyContent: 'flex-start', display: 'flex',
        }}
        >
          <DropdownComponent
            as="select"
            value={inputSector}
            OnChangeFunction={(Option) => setInputSector(Option.target.value)}
            style={{
              display: 'flex',
              color: `${colors.text}`,
              width: '100%',
              height: '100%',
              alignItems: 'center',
              boxSizing: 'border-box',
              borderRadius: '8px',
              justifyContent: 'center',
            }}
            optionStyle={{
              backgroundColor: `${colors.secondary}`,
            }}
            optionList={filterSector?.map((sector) => sector.name)}
          />
        </div>
      </Form.Group>
      <RegisterInput long type="password" title="Senha" setText={setInputPassword} value={inputPassword} />
      <RegisterInput long type="password" title="Confirmar senha" setText={setInputConfirmPassword} value={inputConfirmPassword} />
      <PassMatches pass={inputPassword} confPass={inputConfirmPassword} />
    </UserFormsColumnText>
  );
};

export default UserForms;
