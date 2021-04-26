import { React, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { FiMail } from 'react-icons/fi';
import { recoverPassword } from '../../Services/Axios/userServices';
import BigButton from '../../Components/BigButton';
import LoginInput from '../../Components/LoginInput';
import { Title, BackgroundBlock, CenterBlock } from './Style';
import colors from '../../Constants/colors';
import { useProfileUser } from '../../Context';

const RecoverPasswordScreen = () => {
  const [emailReceived, setEmailReceived] = useState();
  const { startModal } = useProfileUser();

  if (localStorage.getItem('@App:token')) {
    return <Redirect to="/" />;
  }

  return (
    <BackgroundBlock>
      <CenterBlock>
        <Title>Recuperar Senha</Title>

        <LoginInput
          title="Email"
          type="user"
          icon={<FiMail />}
          onChange={(email) => setEmailReceived(email.target.value)}
          value={emailReceived}
        />

        <BigButton title="Enviar" type="primary" changeButton={() => recoverPassword(emailReceived, startModal)} />
        <Link to="/login" style={{ color: colors.navHeaders }}>Voltar</Link>
      </CenterBlock>
    </BackgroundBlock>
  );
};

export default RecoverPasswordScreen;
