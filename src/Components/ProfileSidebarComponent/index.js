import React from 'react';
import {
  Sidebar, SidebarText, SidebarTitle, Icon, SidebarFooter, FooterText,
  SidebarCardText,
} from './style';

const SidebarComponent = ({
  sidebarTitle, sidebarList, sidebarFooter,
}) => (
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
  </Sidebar>
);

export default SidebarComponent;
