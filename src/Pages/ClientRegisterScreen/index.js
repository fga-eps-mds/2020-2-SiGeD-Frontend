import React, { useState } from 'react';
import GenericRegisterScreen from '../../Components/GenericRegisterScreen';
import { validateFields } from '../../Utils/validations';
import { postClient } from '../../Services/Axios/clientServices';
import ClientForms from '../../Components/ClientForms';

const ClientRegisterScreen = () => {
  const [inputName, setRegisterClientInputName] = useState('');
  const [inputEmail, setRegisterClientInputEmail] = useState('');
  const [inputCpf, setRegisterClientInputCpf] = useState('');
  const [inputPhone, setRegisterClientInputPhone] = useState('');
  const [inputCity, setRegisterClientInputCity] = useState('');
  const [officeOption, setOfficeOption] = useState('');
  const [policeStationOption, setPoliceStationOption] = useState('');

  const submit = () => {
    const message = validateFields(inputName, inputEmail, inputCpf, inputPhone,
      inputCity, 'Cadastro do cliente realizado com sucesso!');

    if (!message) {
      postClient(
        inputName, inputEmail, inputCpf, inputPhone,
        inputCity, officeOption, policeStationOption,
      );
    }
    postClient(
      inputName, inputEmail, inputCpf, inputPhone, inputCity, officeOption, policeStationOption,
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
      sidebarList={[inputName, inputCpf,
        inputCity, officeOption, policeStationOption]}
      sidebarFooter={[inputEmail, inputPhone]}
      cancel={cancel}
      submit={submit}
      buttonTitle="Cadastrar"
    >
      <ClientForms
        setInputName={setRegisterClientInputName}
        inputName={inputName}
        setInputEmail={setRegisterClientInputEmail}
        inputEmail={inputEmail}
        setInputCpf={setRegisterClientInputCpf}
        inputCpf={inputCpf}
        setInputPhone={setRegisterClientInputPhone}
        inputPhone={inputPhone}
        setInputCity={setRegisterClientInputCity}
        inputCity={inputCity}
        setOfficeOption={setOfficeOption}
        setPoliceStationOption={setPoliceStationOption}
      />
    </GenericRegisterScreen>
  );
};

export default ClientRegisterScreen;
