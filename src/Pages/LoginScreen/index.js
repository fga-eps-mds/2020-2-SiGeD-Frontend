import { React, useState } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import BigButton from '../../Components/BigButton';
import LoginInput from '../../Components/LoginInput';
import { styles, Background, Center } from './style';

const LoginScreen = () => {
  const [userReceived, setUserReceived] = useState();
  const [passwordReceived, setPasswordReceived] = useState();

  function login() { }

  return (
    <Background>
      <Center>
        <h1 style={styles.access}>Entrar</h1>

        <LoginInput
          title="Usuário"
          type="user"
          icon={<FaUserAlt />}
          onChange={(nameUser) => setUserReceived(nameUser.target.value)}
          value={userReceived}
        />

        <LoginInput
          title="Senha"
          type="password"
          icon={<FaLock />}
          onChange={(passwordUser) => setPasswordReceived(passwordUser.target.value)}
          value={passwordReceived}
        />

        <BigButton title="Entrar" type="primary" changeButton={login} />
      </Center>
    </Background>
  );
};

export default LoginScreen;
