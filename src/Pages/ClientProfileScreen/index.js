import React, { useState, useEffect } from 'react';

const ClientProfileScreen = ({ id, name, email, cpf, phone, city, office, policeStation }) => {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputCpf, setInputCpf] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputCity, setInputCity] = useState('');
  const [inputOffice, setInputOffice] = useState('');
  const [inputPoliceStation, setInputPoliceStation] = useState('');
 
  useEffect(() => {
    setInputName(name);
    setInputEmail(email);
    setInputCpf(cpf);
    setInputPhone(phone);
    setInputCity(city);
    setInputOffice(office);
    setInputPoliceStation(policeStation);
  }, []);

  return (
    <Sidebar>
      <p>Perfil do cliente</p>
      <Icon />
      <SidebarText>
        {sidebarList.map((sidebarCardText, index) => <p key={index}>{sidebarCardText}</p>)}
      </SidebarText>
    </Sidebar>
  );
};

export default ClientProfileScreen;