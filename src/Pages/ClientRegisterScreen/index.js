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
  const [registerClientInputAddress, setRegisterClientInputAddress] = useState('');
  const [policeStationOption, setPoliceStationOption] = useState('');
  const [officeOption, setOfficeOption] = useState('Policial');

  const submit = async () => {
    const message = validateFields(registerClientInputName,
      registerClientInputEmail, registerClientInputCpf,
      registerClientInputPhone,
      registerClientInputAddress);

    if (!message.length) {
      const data = await postClient(
        registerClientInputName, registerClientInputEmail,
        registerClientInputCpf, registerClientInputPhone,
        registerClientInputAddress, officeOption, policeStationOption,
      ).then((response) => response.data);
      return history.push(`/perfil/${data._id}`);
    }
    alert(message.join('\n'));
    setRegisterClientInputName('');
    setRegisterClientInputCpf('');
    setRegisterClientInputEmail('');
    setRegisterClientInputPhone('');
    setRegisterClientInputAddress('');
    setOfficeOption('');
    setPoliceStationOption('');
    return undefined;
  };

  const cancel = () => {
    setRegisterClientInputName('');
    setRegisterClientInputCpf('');
    setRegisterClientInputEmail('');
    setRegisterClientInputPhone('');
    setRegisterClientInputAddress('');
    setOfficeOption('');
    setPoliceStationOption('');
  };

  return (
    <GenericRegisterScreen
      sidebarList={[registerClientInputName, registerClientInputCpf,
        registerClientInputAddress, officeOption, policeStationOption]}
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
        setInputCity={setRegisterClientInputAddress}
        inputCity={registerClientInputAddress}
        setOfficeOption={setOfficeOption}
        setPoliceStationOption={setPoliceStationOption}
        policeStationOption={policeStationOption}
      />
    </GenericRegisterScreen>
  );
};

export default ClientRegisterScreen;
