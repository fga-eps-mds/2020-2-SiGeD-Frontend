import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileSidebarComponent from '../../Components/ProfileSidebarComponent';
import {
  Main, RightBox,
} from './style';
import { apiClients } from '../../Services/Axios';

const ClientProfileScreen = () => {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputCpf, setInputCpf] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputCity, setInputCity] = useState('');
  const [officeOption, setOfficeOption] = useState('');
  const [policeStationOption, setPoliceStationOption] = useState('');
  const { id } = useParams();

  const getClient = async () => {
    apiClients.get(`clients/${id}`)
      .then((response) => {
        const { data } = response;
        setInputName(data.name);
        setInputEmail(data.email);
        setInputCpf(data.cpf);
        setInputPhone(data.phone);
        setInputCity(data.city);
        setOfficeOption(data.office);
        setPoliceStationOption(data.policeStation);
      })
      .catch((err) => {
        console.error(`Não foi possível encontrar os dados do cliente.${err}`);
      });
  };

  useEffect(() => {
    getClient();
  }, []);

  return (
    <Main>
      <ProfileSidebarComponent
        sidebarTitle="Perfil do Cliente"
        sidebarList={[inputName, inputCpf,
          inputCity, officeOption, policeStationOption]}
        sidebarFooter={[inputEmail, inputPhone]}
      />
      <RightBox />
    </Main>

  );
};

export default ClientProfileScreen;
