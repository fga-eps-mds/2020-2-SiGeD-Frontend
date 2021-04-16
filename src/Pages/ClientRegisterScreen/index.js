import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import GenericRegisterScreen from '../../Components/GenericRegisterScreen';
import { validateFields } from '../../Utils/validations';
import { postClient } from '../../Services/Axios/clientServices';
import ClientForms from '../../Components/ClientForms';

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

  const submit = async () => {
    const message = validateFields(registerClientInputName,
      registerClientInputEmail, registerClientInputCpf,
      registerClientInputPhone, registerClientInputSecondaryPhone);

    if (!message.length) {
      const data = await postClient(
        registerClientInputName, registerClientInputEmail,
        registerClientInputCpf, registerClientInputPhone,
        registerClientInputSecondaryPhone, registerClientInputAddress,
        officeOption, registerLocation,
      ).then((response) => response.data);
      return history.push(`/perfil/${data._id}`);
    }
    alert(message.join('\n'));
    setRegisterClientInputName('');
    setRegisterClientInputCpf('');
    setRegisterClientInputEmail('');
    setRegisterClientInputPhone('');
    setregisterClientInputSecondaryPhone('');
    setRegisterClientInputAddress('');
    setOfficeOption('');
    setRegisterLocation('');
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
    </GenericRegisterScreen>
  );
};

export default ClientRegisterScreen;
