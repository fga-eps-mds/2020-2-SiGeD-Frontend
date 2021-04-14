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
  const [registerClientInputPhone, setRegisterClientInputPhone] = useState('');
  const [registerClientInputCity, setRegisterClientInputCity] = useState('');
  const [officeOption, setOfficeOption] = useState('Policial');
  const [policeStationOption, setPoliceStationOption] = useState('DPSS');

  const submit = async () => {
    const message = validateFields(registerClientInputName,
      registerClientInputEmail, registerClientInputCpf,
      registerClientInputPhone,
      registerClientInputCity);

    if (!message.length) {
      const data = await postClient(
        registerClientInputName, registerClientInputEmail,
        registerClientInputCpf, registerClientInputPhone,
        registerClientInputCity, officeOption, policeStationOption,
      ).then((response) => response.data);
      return history.push(`/perfil/${data._id}`);
    }
    alert(message.join('\n'));
    setRegisterClientInputName('');
    setRegisterClientInputCpf('');
    setRegisterClientInputEmail('');
    setRegisterClientInputPhone('');
    setRegisterClientInputCity('');
    setOfficeOption('');
    setPoliceStationOption('');
    return undefined;
  };

  const cancel = () => {
    setRegisterClientInputName('');
    setRegisterClientInputCpf('');
    setRegisterClientInputEmail('');
    setRegisterClientInputPhone('');
    setRegisterClientInputCity('');
    setOfficeOption('');
    setPoliceStationOption('');
  };

  return (
    <GenericRegisterScreen
      sidebarList={[registerClientInputName, registerClientInputCpf,
        registerClientInputCity, officeOption, policeStationOption]}
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
        setInputCity={setRegisterClientInputCity}
        inputCity={registerClientInputCity}
        setOfficeOption={setOfficeOption}
        setPoliceStationOption={setPoliceStationOption}
      />
    </GenericRegisterScreen>
  );
};

export default ClientRegisterScreen;
