import React from 'react';
import SidebarComponent from '../../Components/SidebarComponent';

const ClientProfileScreen = ({
  name, email, cpf, phone, city, office, policeStation,
}) => {
  const sidebarList = [name, email, cpf, phone, city, office, policeStation];

  return (
    <SidebarComponent sidebarList={sidebarList} />
  );
};

export default ClientProfileScreen;
