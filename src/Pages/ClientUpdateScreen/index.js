import React, { useState, useEffect } from 'react';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import GenericRegisterScreen from '../../Components/GenericRegisterScreen';
import { validateFields } from '../../Utils/validations';
import { getClients, updateClient } from '../../Services/Axios/clientServices';
import ClientForms from '../../Components/ClientForms';
import { useProfileUser } from '../../Context';

const ClientUpdateScreen = () => {
  const history = useHistory();
  const [updateClientInputName, setupdateClientInputName] = useState('');
  const [updateClientInputEmail, setupdateClientInputEmail] = useState('');
  const [updateClientInputCpf, setupdateClientInputCpf] = useState('');
  const [updateClientInputAddress, setupdateClientInputAddress] = useState('');
  const [updateClientInputPhone, setupdateClientInputPhone] = useState('');
  const [updateClientInputSecondaryPhone, setupdateClientInputSecondaryPhone] = useState('');
  const [officeOption, setOfficeOption] = useState('');
  const [updateLocation, setupdateLocation] = useState('');
  const { id } = useParams();
  const { startModal, user } = useProfileUser();

  const getClientFromApi = async () => {
    getClients(`clients/${id}`, startModal)
      .then((response) => {
        const { data } = response;
        setupdateClientInputName(data?.name);
        setupdateClientInputEmail(data?.email);
        setupdateClientInputCpf(data?.cpf);
        setupdateClientInputPhone(data?.phone);
        setupdateClientInputSecondaryPhone(data?.secondaryPhone);
        setupdateClientInputAddress(data?.address);
        setOfficeOption(data?.office);
        setupdateLocation(data?.location);
      });
  };

  useEffect(() => {
    getClientFromApi();
  }, []);

  const submit = async () => {
    const validMessage = validateFields(updateClientInputName,
      updateClientInputEmail, updateClientInputCpf,
      updateClientInputPhone, updateClientInputSecondaryPhone);
    if (!validMessage.length) {
      const data = await updateClient(
        updateClientInputName, updateClientInputEmail,
        updateClientInputCpf, updateClientInputPhone,
        updateClientInputSecondaryPhone, updateClientInputAddress,
        officeOption, updateLocation, id, startModal, user._id,
      ).then((response) => response.data);
      return history.push(`/perfil/${data._id}`);
    }
    startModal(validMessage.join('\n'));
    return undefined;
  };

  const cancel = () => {
    history.push(`/perfil/${id}`);
  };

  if (!localStorage.getItem('@App:token')) {
    return <Redirect to="/login" />;
  }

  return (
    <GenericRegisterScreen
      sidebarList={[updateClientInputName, updateClientInputCpf,
        updateClientInputAddress, officeOption, updateLocation]}
      sidebarFooter={[updateClientInputEmail, updateClientInputPhone]}
      cancel={cancel}
      submit={submit}
      buttonTitle="Editar"
    >
      <ClientForms
        setInputName={setupdateClientInputName}
        inputName={updateClientInputName}
        setInputEmail={setupdateClientInputEmail}
        inputEmail={updateClientInputEmail}
        setInputCpf={setupdateClientInputCpf}
        inputCpf={updateClientInputCpf}
        setInputPhone={setupdateClientInputPhone}
        inputPhone={updateClientInputPhone}
        setInputSecondaryPhone={setupdateClientInputSecondaryPhone}
        secondaryPhone={updateClientInputSecondaryPhone}
        setInputAddress={setupdateClientInputAddress}
        inputAddress={updateClientInputAddress}
        setOfficeOption={setOfficeOption}
        setLocationOption={setupdateLocation}
        locationOption={updateLocation}
      />
    </GenericRegisterScreen>
  );
};

export default ClientUpdateScreen;
