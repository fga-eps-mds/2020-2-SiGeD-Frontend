import { React, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import BigButton from '../../Components/BigButton';
import LoginInput from '../../Components/LoginInput';
import { styles, Background, Center } from './Style';
import { useProfileUser } from '../../Context';

const LoginScreen = () => {
  const [emailReceived, setEmailReceived] = useState();
  const [passwordReceived, setPasswordReceived] = useState();
  const { handleLogin } = useProfileUser();

  if (localStorage.getItem('@App:token')) {
    return <Redirect to="/" />;
  }

  return (
    <Background>
      <Center>
        <h1 style={styles.access}>Entrar</h1>

        <LoginInput
          title="Usuário"
          type="user"
          icon={<FaUserAlt />}
          onChange={(email) => setEmailReceived(email.target.value)}
          value={emailReceived}
        />

        <LoginInput
          title="Senha"
          type="password"
          icon={<FaLock />}
          onChange={(passwordUser) => setPasswordReceived(passwordUser.target.value)}
          value={passwordReceived}
        />

        <BigButton title="Entrar" type="primary" changeButton={() => handleLogin(emailReceived, passwordReceived)} />
      </Center>
    </Background>
  );
};

export default LoginScreen;
