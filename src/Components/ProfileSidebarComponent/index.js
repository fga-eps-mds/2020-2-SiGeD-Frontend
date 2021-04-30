import React from 'react';
import { BsPencil } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import {
  Sidebar, SidebarText, SidebarTitle, Icon, SidebarFooter, FooterText,
  SidebarCardText, TextButtom,
} from './Style';
import { useProfileUser } from '../../Context';

const SidebarComponent = ({
  sidebarTitle, sidebarList, sidebarFooter, edit, handleShow, id,
}) => {
  const { user } = useProfileUser();
  const history = useHistory();

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
      { sidebarFooter
        && (
          <SidebarFooter
            style={{ marginTop: '3vh' }}
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
            <BsPencil style={{ cursor: 'pointer', marginRight: '2px' }} />
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
