import React, { useState, useEffect } from 'react';
import HomepageHeader from '../../Components/HomepageHeader';
import HomepageSector from '../../Components/HomepageSector';
import HomepageCharts from '../../Components/HomepageCharts';
import { getSectors } from '../../Services/Axios/sectorServices';
import {
  Main, PageBox, ProfessionalPage, BlankDiv, ProfessionalDiv, ResponsovePageBox,
} from './Style';
import { useProfileUser } from '../../Context';

const ProfessionalHomepage = () => {
  const { user, startModal } = useProfileUser();
  const [sectors, setSectors] = useState([]);

  const listSectors = async () => {
    await getSectors(startModal)
      .then((response) => setSectors(response.data))
      .catch((error) => {
        console.error(`An unexpected error ocourred while getting sectors.${error}`);
      });
  };

  useEffect(() => {
    listSectors();
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
              />
            </PageBox>
            <PageBox width="29%" height="43%">
              <HomepageHeader
                HeaderTitle="Clientes"
                LeftIcon="/clientes"
                RightIcon="/cliente"
              />
            </PageBox>
            <PageBox width="29%" height="43%">
              <HomepageHeader
                HeaderTitle="Demandas"
                LeftIcon="/demandas"
                RightIcon="/demanda"
              />
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
                HeaderTitle="Setor"
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
                />
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
              />
            </PageBox>
          </ProfessionalPage>
        )}
    </Main>
  );
};

export default ProfessionalHomepage;
