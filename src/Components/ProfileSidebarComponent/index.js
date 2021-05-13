import React from 'react';
import { BsPencil } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import {
  Sidebar, SidebarText, SidebarTitle, Icon, SidebarFooter, FooterText,
  SidebarCardText, TextButtom,
} from './Style';
import { useProfileUser } from '../../Context';
import SelectedFeatures from '../SelectedFeatures';

const SidebarComponent = ({
  sidebarTitle, sidebarList, sidebarFooter, edit, handleShow, id, features,
}) => {
  const { user } = useProfileUser();
  const history = useHistory();

  const styles = {
    sidebarFooter: {
      marginTop: '3vh',
    },
    icon: {
      cursor: 'pointer',
      marginRight: '2px',
    },
  };

  return (
    <Sidebar>
      {sidebarTitle
        && (
          <SidebarTitle>
            {sidebarTitle}
          </SidebarTitle>
        )}
      <Icon />
      <SidebarText>
        {sidebarList.map((sidebarCardText, index) => (
          <SidebarCardText key={index}>
            {sidebarCardText}
          </SidebarCardText>
        ))}
      </SidebarText>
      { features
        && (
        <SelectedFeatures features={features} />
        )}
      { sidebarFooter
        && (
          <SidebarFooter
            style={styles.sidebarFooter}
          >
            {sidebarFooter.map((sidebarCardFooterText) => (
              (
                <FooterText>
                  {sidebarCardFooterText}
                </FooterText>
              )))}
          </SidebarFooter>
        )}
      { edit
        && (
          <TextButtom
            onClick={() => history.push(`/editar/${id}`)}
          >
            <BsPencil style={styles.icon} />
            Editar
          </TextButtom>
        )}
      { user.role === 'admin' && edit
        && (
          <TextButtom
            onClick={() => handleShow()}
          >
            Histórico de alterações
          </TextButtom>
        )}
    </Sidebar>
  );
};

export default SidebarComponent;
