import { React, useState } from 'react';
import { FaLock } from 'react-icons/fa';
import BigButton from '../../Components/BigButton';
import LoginInput from '../../Components/LoginInput';
import { styles, Background, Center } from './Style';

const ChangePasswordScreen = () => {
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  function changePassword(a, b) {
    console.log(a, b);
  }

  return (
    <Background>
      <Center>
        <h1 style={{ ...styles.access, marginBottom: '4vh' }}>Altere sua senha</h1>

        <p style={{ color: 'red', padding: 0, visibility: password === confirmPassword && 'hidden' }}>As senhas são diferentes</p>

        <LoginInput
          title="Senha"
          type="password"
          icon={<FaLock />}
          onChange={(text) => setPassword(text.target.value)}
          value={password}
        />

        <LoginInput
          title="Confirmar Senha"
          type="password"
          icon={<FaLock />}
          onChange={(text) => setConfirmPassword(text.target.value)}
          value={confirmPassword}
        />

        <BigButton title="Salvar" type="primary" changeButton={() => changePassword(password, confirmPassword)} />
      </Center>
    </Background>
  );
};

export default ChangePasswordScreen;
