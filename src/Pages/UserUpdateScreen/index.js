import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import GenericRegisterScreen from '../../Components/GenericRegisterScreen';
import { validateSignUp } from '../../Utils/validations';
import { getUser, updateUser } from '../../Services/Axios/userServices';
import { getSector } from '../../Services/Axios/sectorServices';
import UserForms from '../../Components/UserForms';

const UserUpdateScreen = () => {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputRole, setInputRole] = useState('');
  const [inputSector, setInputSector] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputSectorID, setInputSectorID] = useState('');
  const [inputConfirmPassword, setInputConfirmPassword] = useState('');
  const [sectors, setSectors] = useState([]);
  const { id } = useParams();

  const getSectorFromApi = async (sectorID) => {
    await getSector(`sector/${sectorID}`)
      .then((response) => setInputSector(response.data.name));
  };

  const getUserFromApi = async () => {
    await getUser(`users/${id}`)
      .then((response) => {
        const { data } = response;
        setInputName(data.name);
        setInputEmail(data.email);
        setInputRole(data.role);
        setInputSectorID(data.sector);
        getSectorFromApi(data.sector);
      });
  };

  useEffect(() => {
    getUserFromApi();
  }, []);

  useEffect(() => {
    setInputSectorID(sectors?.find((sector) => sector.name === inputSector)?._id);
  }, [inputSector]);

  const submit = () => {
    if (validateSignUp(inputEmail, inputName, inputPassword, inputConfirmPassword)) {
      updateUser(inputName, inputEmail, inputRole, inputSectorID, inputPassword, id);
    } else {
      alert("Nome deve ser completo, sem números\nEmail deve conter o formato 'nome@email.com'\nSenha deve conter no minimo 6 caracteres\nAs senhas devem ser iguais!");
    }
  };

  const cancel = () => {
    getUser();
  };

  if (!localStorage.getItem('@App:token')) {
    return <Redirect to="/login" />;
  }

  return (
    <GenericRegisterScreen
      sidebarList={[inputName, inputEmail, inputRole, inputSector]}
      cancel={cancel}
      submit={submit}
      buttonTitle="Atualizar"
    >
      <UserForms
        setInputName={setInputName}
        inputName={inputName}
        setInputEmail={setInputEmail}
        inputEmail={inputEmail}
        setInputRole={setInputRole}
        inputRole={inputRole}
        sectors={sectors}
        setSectors={setSectors}
        setInputSector={setInputSector}
        inputSector={inputSector}
        setInputPassword={setInputPassword}
        inputPassword={inputPassword}
        setInputConfirmPassword={setInputConfirmPassword}
        inputConfirmPassword={inputConfirmPassword}
      />
    </GenericRegisterScreen>
  );
};

export default UserUpdateScreen;
