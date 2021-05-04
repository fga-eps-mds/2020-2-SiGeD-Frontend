import React, { useState, useEffect } from 'react';
import HomepageHeader from '../../Components/HomepageHeader';
import HomepageSector from '../../Components/HomepageSector';
import { getSectors } from '../../Services/Axios/sectorServices';
import {
  Main, PageBox, ProfessionalPage,
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
      {user?.role === 'admin'
        && (
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
                RightIcon=""
              />
            </PageBox>
            <PageBox width="54%" height="43%">
              <HomepageHeader
                HeaderTitle="Estatísticas"
                LeftIcon="/estatisticas"
                RightIconDisplay="none"
              />
            </PageBox>
            <PageBox width="37%" height="43%">
              <HomepageHeader
                HeaderTitle="Setor"
                LeftIcon="/setores"
                RightIcon=""
              >
                {renderSectors()}
              </HomepageHeader>
            </PageBox>
          </>
        )}
      {user?.role === 'professional'
        && (
          <ProfessionalPage>
            <div style={{
              width: '60%', marginRight: '3%', marginTop: '1%', marginBottom: '1%',
            }}
            >
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
                />
              </PageBox>
            </div>
            <PageBox width="32%" height="90%">
              <HomepageHeader
                HeaderTitle="Demandas"
                LeftIcon="/demandas"
                RightIcon=""
              />
            </PageBox>
          </ProfessionalPage>
        )}
      {user?.role === 'receptionist'
        && (
          <>
            <PageBox width="54%" height="43%">
              <HomepageHeader
                HeaderTitle="Clientes"
                LeftIcon="/clientes"
                RightIcon="/cliente"
              />
            </PageBox>
            <PageBox width="37%" height="43%">
              <HomepageHeader
                HeaderTitle="Usuários"
                LeftIcon="/usuarios"
                RightIcon="/cadastro"
              />
            </PageBox>
            <PageBox width="54%" height="43%">
              <HomepageHeader
                HeaderTitle="Estatísticas"
                LeftIcon="/estatisticas"
                RightIconDisplay="none"
              />
            </PageBox>
            <PageBox width="37%" height="43%">
              <HomepageHeader
                HeaderTitle="Demandas"
                LeftIcon="/demandas"
                RightIcon=""
              />
            </PageBox>
          </>
        )}
    </Main>
  );
};

export default ProfessionalHomepage;
