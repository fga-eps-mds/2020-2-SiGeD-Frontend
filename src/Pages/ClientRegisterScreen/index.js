import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import GenericRegisterScreen from '../../Components/GenericRegisterScreen';
import { validateFields } from '../../Utils/validations';
import { postClient } from '../../Services/Axios/clientServices';
import ClientForms from '../../Components/ClientForms';
import ModalMessage from '../../Components/ModalMessage';
import { useProfileUser } from '../../Context';

const ClientRegisterScreen = () => {
  const history = useHistory();
  const [registerClientInputName, setRegisterClientInputName] = useState('');
  const [registerClientInputEmail, setRegisterClientInputEmail] = useState('');
  const [registerClientInputCpf, setRegisterClientInputCpf] = useState('');
  const [registerClientInputAddress, setRegisterClientInputAddress] = useState('');
  const [registerClientInputPhone, setRegisterClientInputPhone] = useState('');
  const [registerClientInputSecondaryPhone, setregisterClientInputSecondaryPhone] = useState('');
  const [officeOption, setOfficeOption] = useState('Policial');
  const [registerLocation, setRegisterLocation] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');
  const handleCloseMessage = () => setShowMessage(false);
  const handleShowMessage = () => setShowMessage(true);
  const { startModal } = useProfileUser();

  const submit = async () => {
    const validMessage = validateFields(registerClientInputName,
      registerClientInputEmail, registerClientInputCpf,
      registerClientInputPhone, registerClientInputSecondaryPhone);
    if (!validMessage.length) {
      const data = await postClient(
        registerClientInputName, registerClientInputEmail,
        registerClientInputCpf, registerClientInputPhone,
        registerClientInputSecondaryPhone, registerClientInputAddress,
        officeOption, registerLocation, startModal,
      ).then((response) => response.data);
      return history.push(`/perfil/${data._id}`);
    }
    setMessage(validMessage.join('\n'));
    handleShowMessage();
    return undefined;
  };

  const cancel = () => {
    setRegisterClientInputName('');
    setRegisterClientInputCpf('');
    setRegisterClientInputEmail('');
    setRegisterClientInputPhone('');
    setRegisterClientInputAddress('');
    setOfficeOption('');
    setRegisterLocation('');
  };

  if (!localStorage.getItem('@App:token')) {
    return <Redirect to="/login" />;
  }

  return (
    <GenericRegisterScreen
      sidebarList={[registerClientInputName, registerClientInputCpf,
        registerClientInputAddress, officeOption, registerLocation]}
      sidebarFooter={[registerClientInputEmail, registerClientInputPhone]}
      cancel={cancel}
      submit={submit}
      buttonTitle="Cadastrar"
    >
      <ClientForms
        setInputName={setRegisterClientInputName}
        inputName={registerClientInputName}
        setInputEmail={setRegisterClientInputEmail}
        inputEmail={registerClientInputEmail}
        setInputCpf={setRegisterClientInputCpf}
        inputCpf={registerClientInputCpf}
        setInputPhone={setRegisterClientInputPhone}
        inputPhone={registerClientInputPhone}
        setInputSecondaryPhone={setregisterClientInputSecondaryPhone}
        secondaryPhone={registerClientInputSecondaryPhone}
        setInputAddress={setRegisterClientInputAddress}
        inputAddress={registerClientInputAddress}
        setOfficeOption={setOfficeOption}
        setLocationOption={setRegisterLocation}
        locationOption={registerLocation}
      />
      <ModalMessage
        show={showMessage}
        handleClose={handleCloseMessage}
        message={message}
      />
    </GenericRegisterScreen>
  );
};

export default ClientRegisterScreen;
