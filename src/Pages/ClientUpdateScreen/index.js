import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import GenericRegisterScreen from '../../Components/GenericRegisterScreen';
import { validateFields } from '../../Utils/validations';
import { getClients, updateClient } from '../../Services/Axios/clientServices';
import ClientForms from '../../Components/ClientForms';

const ClientUpdateScreen = () => {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputCpf, setInputCpf] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputCity, setInputCity] = useState('');
  const [officeOption, setOfficeOption] = useState('');
  const [policeStationOption, setPoliceStationOption] = useState('');
  const { id } = useParams();

  const getClientFromApi = async () => {
    getClients(`clients/${id}`)
      .then((response) => {
        const { data } = response;
        setInputName(data.name);
        setInputEmail(data.email);
        setInputCpf(data.cpf);
        setInputPhone(data.phone);
        setInputCity(data.city);
        setOfficeOption(data.office);
        setPoliceStationOption(data.policeStation);
      });
  };

  useEffect(() => {
    getClientFromApi();
  }, []);

  const submit = () => {
    const message = validateFields(inputName, inputEmail, inputCpf, inputPhone,
      inputCity, 'Cadastrado do cliente atualizado com sucesso!');

    if (!message) {
      updateClient(
        inputName, inputEmail, inputCpf, inputPhone,
        inputCity, officeOption, policeStationOption, id,
      );
    }
  };

  const cancel = () => {
    setInputName('');
    setInputEmail('');
    setInputCpf('');
    setInputPhone('');
    setInputCity('');
    setOfficeOption('');
    setPoliceStationOption('');
  };

  if (!localStorage.getItem('@App:token')) {
    return <Redirect to="/login" />;
  }

  return (
    <GenericRegisterScreen
      sidebarList={[inputName, inputCpf,
        inputCity, officeOption, policeStationOption]}
      sidebarFooter={[inputEmail, inputPhone]}
      cancel={cancel}
      submit={submit}
      buttonTitle="Editar"
    >
      <ClientForms
        setInputName={setInputName}
        inputName={inputName}
        setInputEmail={setInputEmail}
        inputEmail={inputEmail}
        setInputCpf={setInputCpf}
        inputCpf={inputCpf}
        setInputPhone={setInputPhone}
        inputPhone={inputPhone}
        setInputCity={setInputCity}
        inputCity={inputCity}
        setOfficeOption={setOfficeOption}
        setPoliceStationOption={setPoliceStationOption}
      />
    </GenericRegisterScreen>
  );
};

export default ClientUpdateScreen;
