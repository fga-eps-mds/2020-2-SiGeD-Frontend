import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import RegisterInput from '../../Components/RegisterInput';
import GenericRegisterScreen from '../../Components/GenericRegisterScreen';
import { validateSignUp } from '../../Utils/validations';
import { PassMatches } from '../../Components/ErrorMessage';
import { postUser } from '../../Services/Axios/userServices';

const UserUpdateScreen = () => {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputRole, setInputRole] = useState('');
  const [inputSector, setInputSector] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputConfirmPassword, setInputConfirmPassword] = useState('');
  const { id } = useParams();
  console.log(id);

  const getUser = async () => {
    try {
      await axios.get(`http://localhost:3001/users/${id}`, { headers: { 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTYzYmZhZmEzY2NkMDAzZjk0YzhlNiIsImlhdCI6MTYxNjI4NDkyNywiZXhwIjoxNjE2Mjg1MTY3fQ.drnidky5v_hVqDZaVYY4qxHqXxLj209UiXjwlaBsNJA' } })
        .then((response) => {
          const { data } = response;
          console.log('entrou no get');
          setInputName(data.name);
          setInputEmail(data.email);
          setInputRole(data.role);
          setInputSector(data.sector);
          setInputPassword(data.pass);
          setInputConfirmPassword(data.pass);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log('Vai chamar o get');
    getUser();
    console.log('chamou o get');
  }, []);

  const updateUser = async () => {
    try {
      await axios.put(`http://localhost:3001/users/update/${id}`, { headers: { 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTYzYmZhZmEzY2NkMDAzZjk0YzhlNiIsImlhdCI6MTYxNjI4NDkyNywiZXhwIjoxNjE2Mjg1MTY3fQ.drnidky5v_hVqDZaVYY4qxHqXxLj209UiXjwlaBsNJA' } }, {
        name: inputName,
        email: inputEmail,
        role: inputRole,
        sector: inputSector,
        pass: inputPassword,
      })
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const submit = () => {
    if (validateSignUp(inputEmail, inputName, inputPassword, inputConfirmPassword)) {
      postUser(inputName, inputEmail, inputRole, inputSector, inputPassword);
    } else {
      alert("Nome deve ser completo, sem números\nEmail deve conter o formato 'nome@email.com'\nSenha deve conter no minimo 6 caracteres\nAs senhas devem ser iguais!");
    }
    updateUser();
  };

  const cancel = () => {
    setInputName('');
    setInputEmail('');
    setInputRole('');
    setInputSector('');
    setInputPassword('');
    setInputConfirmPassword('');
  };

  return (
    <GenericRegisterScreen
      sidebarList={[inputName, inputEmail, inputRole, inputSector]}
      cancel={cancel}
      submit={submit}
      buttonTitle="Cadastrar"
    >
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
    </GenericRegisterScreen>
  );
};

export default UserUpdateScreen;
