import React from 'react';
import { Main, PageBox, ProfessionalPage } from './Style';
import { useProfileUser } from '../../Context';

const ProfessionalHomepage = () => {
  const { user } = useProfileUser();
  return (
    <Main>
      {user?.role === 'admin'
        && (
          <>
            <PageBox width="29%" height="43%" />
            <PageBox width="29%" height="43%" />
            <PageBox width="29%" height="43%" />
            <PageBox width="54%" height="43%" />
            <PageBox width="37%" height="43%" />
          </>
        )}
      {user?.role === 'professional'
        && (
          <ProfessionalPage>
            <div style={{
              width: '60%', marginRight: '3%', marginTop: '1%', marginBottom: '1%',
            }}
            >
              <PageBox width="100%" height="45%" />
              <PageBox width="100%" height="45%" />
            </div>
            <PageBox width="32%" height="90%" />
          </ProfessionalPage>
        )}
      {user?.role === 'receptionist'
        && (
          <>
            <PageBox width="54%" height="43%" />
            <PageBox width="37%" height="43%" />
            <PageBox width="54%" height="43%" />
            <PageBox width="37%" height="43%" />
          </>
        )}
    </Main>
  );
};

export default ProfessionalHomepage;
