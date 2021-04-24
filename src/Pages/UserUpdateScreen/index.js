import React, { useState, useEffect } from 'react';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import GenericRegisterScreen from '../../Components/GenericRegisterScreen';
import { validateSignUp } from '../../Utils/validations';
import { getUser, updateUser } from '../../Services/Axios/userServices';
import { getSector } from '../../Services/Axios/sectorServices';
import UserForms from '../../Components/UserForms';
import { useProfileUser } from '../../Context';

const UserUpdateScreen = () => {
  const { user, startModal } = useProfileUser();
  const history = useHistory();
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputRole, setInputRole] = useState('');
  const [inputSector, setInputSector] = useState('');
  const [inputSectorID, setInputSectorID] = useState('');
  const [sectors, setSectors] = useState([]);
  const { id } = useParams();

  const getSectorFromApi = async (sectorID) => {
    await getSector(`sector/${sectorID}`, startModal)
      .then((response) => setInputSector(response?.data?.name));
  };

  const getUserFromApi = async () => {
    await getUser(`users/${id}`, startModal)
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

  const submit = async () => {
    if (validateSignUp(inputEmail, inputName)) {
      await updateUser(inputName, inputEmail, inputRole, inputSectorID, id, startModal);
      startModal('Usuário atualizado com sucesso!');
      return history.push('/usuarios');
    }
    startModal("Nome deve ser completo, sem números. Email deve conter o formato 'nome@email.com'. Senha deve conter no minimo 6 caracteres. As senhas devem ser iguais!");
    return undefined;
  };

  const cancel = () => {
    getUser();
  };

  if (!localStorage.getItem('@App:token')) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      {user ? (
        <>
          {user.role === 'admin'
            ? (
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
                />
              </GenericRegisterScreen>
            )
            : <Redirect to="/nao-autorizado" />}
        </>
      )
        : <h1>Carregando...</h1>}
    </>
  );
};

export default UserUpdateScreen;
