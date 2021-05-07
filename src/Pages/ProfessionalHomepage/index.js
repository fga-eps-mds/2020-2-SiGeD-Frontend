import React, { useState, useEffect } from 'react';
import HomepageHeader from '../../Components/HomepageHeader';
import HomepageSector from '../../Components/HomepageSector';
import HomepageCharts from '../../Components/HomepageCharts';
import { getFourSectors } from '../../Services/Axios/sectorServices';
import { getFourUsers } from '../../Services/Axios/userServices';
import { getFourClients } from '../../Services/Axios/clientServices';
import { getFourDemands } from '../../Services/Axios/demandsServices';
import {
  Main, PageBox, ProfessionalPage, BlankDiv, ProfessionalDiv, ResponsovePageBox, ScrollDiv,
} from './Style';
import { useProfileUser } from '../../Context';
import HomepageUsers from '../../Components/HomePageUsers';
import HomePageClients from '../../Components/HomePageClients';
import HomePageDemand from '../../Components/HomePageDemands';

const ProfessionalHomepage = () => {
  const { user, startModal } = useProfileUser();
  const [sectors, setSectors] = useState([]);
  const [users, setUsers] = useState([]);
  const [clients, setClients] = useState([]);
  const [demands, setDemands] = useState([]);

  const listSectors = async () => {
    await getFourSectors(startModal)
      .then((response) => setSectors(response.data))
      .catch((error) => {
        console.error(`An unexpected error ocourred while getting sectors.${error}`);
      });
  };

  const listUsers = async () => {
    await getFourUsers(startModal)
      .then((response) => setUsers(response.data))
      .catch((error) => {
        console.error(`An unexpected error ocourred while getting users.${error}`);
      });
  };

  const listClients = async () => {
    await getFourClients(startModal)
      .then((response) => setClients(response.data))
      .catch((error) => {
        console.error(`An unexpected error ocourred while getting clients.${error}`);
      });
  };

  const listDemands = async () => {
    await getFourDemands(startModal)
      .then((response) => setDemands(response.data))
      .catch((error) => {
        console.error(`An unexpected error ocourred while getting demands.${error}`);
      });
  };

  useEffect(() => {
    listSectors();
    listUsers();
    listClients();
    listDemands();
  }, [user]);

  const renderSectors = () => {
    if (sectors?.length === 0) {
      return <h1>Sem resultados</h1>;
    }
    return sectors?.map((sector, idx) => (
      <HomepageSector
        key={idx}
        sector={sector.name}
      />
    ));
  };

  const renderUsers = () => {
    if (users?.length === 0) {
      return <h1>Sem resultados</h1>;
    }
    return users?.map((User, idx) => (
      <HomepageUsers
        key={idx}
        user={User}
        startModal={startModal}
      />
    ));
  };

  const renderClients = () => {
    if (clients?.length === 0) {
      return <h1>Sem resultados</h1>;
    }
    return clients?.map((client, idx) => (
      <HomePageClients
        key={idx}
        client={client}
        role={user.role}
      />
    ));
  };

  const renderDemands = () => {
    if (demands?.length === 0) {
      return <h1>Sem resultados</h1>;
    }
    console.log(demands);
    return demands?.map((demand, idx) => (
      <HomePageDemand
        demand={demand}
        key={idx}
        sectors={sectors}
        style={{ width: '90%' }}
      />
    ));
  };

  return (
    <Main>
      <BlankDiv />
      {user?.role === 'admin'
        ? (
          <>
            <PageBox width="29%" height="43%">
              <HomepageHeader
                HeaderTitle="Usuários"
                LeftIcon="/usuarios"
                RightIcon="/cadastro"
              >
                {renderUsers()}
              </HomepageHeader>
            </PageBox>
            <PageBox width="29%" height="43%">
              <HomepageHeader
                HeaderTitle="Clientes"
                LeftIcon="/clientes"
                RightIcon="/cliente"
              >
                {renderClients()}
              </HomepageHeader>
            </PageBox>
            <PageBox width="29%" height="43%">
              <HomepageHeader
                HeaderTitle="Demandas"
                LeftIcon="/demandas"
                RightIcon="/demanda"
              >
                <ScrollDiv height="80%">
                  {renderDemands()}
                </ScrollDiv>

              </HomepageHeader>
            </PageBox>
            <PageBox width="54%" height="43%">
              <HomepageHeader
                HeaderTitle="Estatísticas"
                LeftIcon="/estatisticas"
                RightIconDisplay="none"
              >
                <HomepageCharts />
              </HomepageHeader>
            </PageBox>
            <PageBox width="37%" height="43%">
              <HomepageHeader
                HeaderTitle="Setores"
                LeftIcon="/setores"
                RightIconDisplay="none"
              >
                {renderSectors()}
              </HomepageHeader>
            </PageBox>
          </>
        )
        : (
          <ProfessionalPage>
            <ResponsovePageBox>
              <HomepageHeader
                HeaderTitle="Clientes"
                LeftIcon="/clientes"
                RightIcon="/cliente"
              />
            </ResponsovePageBox>
            <ResponsovePageBox>
              <HomepageHeader
                HeaderTitle="Estatísticas"
                LeftIcon="/estatisticas"
                RightIconDisplay="none"
              />
            </ResponsovePageBox>
            <ProfessionalDiv>
              <PageBox width="100%" height="45%">
                <HomepageHeader
                  HeaderTitle="Clientes"
                  LeftIcon="/clientes"
                  RightIcon="/cliente"
                >
                  {renderClients()}
                </HomepageHeader>
              </PageBox>
              <PageBox width="100%" height="45%">
                <HomepageHeader
                  HeaderTitle="Estatísticas"
                  LeftIcon="/estatisticas"
                  RightIconDisplay="none"
                >
                  <HomepageCharts />
                </HomepageHeader>
              </PageBox>
            </ProfessionalDiv>
            <PageBox width="32%" height="90%">
              <HomepageHeader
                HeaderTitle="Demandas"
                LeftIcon="/demandas"
                RightIcon="/demanda"
              >
                <ScrollDiv height="90%">
                  {renderDemands()}
                </ScrollDiv>

              </HomepageHeader>
            </PageBox>
          </ProfessionalPage>
        )}
    </Main>
  );
};

export default ProfessionalHomepage;
