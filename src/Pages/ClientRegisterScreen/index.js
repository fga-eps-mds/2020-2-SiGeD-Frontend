import React, { useState } from 'react';
import GenericRegisterScreen from '../../Components/GenericRegisterScreen';
import { validateFields } from '../../Utils/validations';
import { postClient } from '../../Services/Axios/clientServices';
import ClientForms from '../../Components/ClientForms';

const ClientRegisterScreen = () => {
  const [registerClientInputName, setRegisterClientInputName] = useState('');
  const [registerClientInputEmail, setRegisterClientInputEmail] = useState('');
  const [registerClientInputCpf, setRegisterClientInputCpf] = useState('');
  const [registerClientInputPhone, setRegisterClientInputPhone] = useState('');
  const [registerClientInputCity, setRegisterClientInputCity] = useState('');
  const [officeOption, setOfficeOption] = useState('');
  const [policeStationOption, setPoliceStationOption] = useState('');

  const submit = () => {
    const message = validateFields(registerClientInputName,
      registerClientInputEmail, registerClientInputCpf,
      registerClientInputPhone,
      registerClientInputCity, 'Cadastro do cliente realizado com sucesso!');

    if (!message) {
      postClient(
        registerClientInputName, registerClientInputEmail,
        registerClientInputCpf, registerClientInputPhone,
        registerClientInputCity, officeOption, policeStationOption,
      );
    }
    postClient(
      registerClientInputName, registerClientInputEmail, registerClientInputCpf,
      registerClientInputPhone, registerClientInputCity, officeOption, policeStationOption,
    );
    setRegisterClientInputName('');
    setRegisterClientInputCpf('');
    setRegisterClientInputEmail('');
    setRegisterClientInputPhone('');
    setRegisterClientInputCity('');
    setOfficeOption('');
    setPoliceStationOption('');
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
