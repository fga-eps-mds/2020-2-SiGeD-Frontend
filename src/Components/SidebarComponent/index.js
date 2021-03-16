import React from 'react';
import {
  Sidebar, SidebarText, Icon, SidebarFooter,
} from './style';

const SidebarComponent = ({
  sidebarList, sidebarFooter,
}) => (
  <Sidebar>
    <Icon />
    <SidebarText>
      {sidebarList.map((sidebarCardText) => <p>{sidebarCardText}</p>)}
    </SidebarText>
    { sidebarFooter
    && (
    <SidebarFooter
      style={{ marginTop: '3vh' }}
    >
      {sidebarFooter.map((sidebarCardFooterText) => <p style={{ fontSize: '2vh' }}>{sidebarCardFooterText}</p>)}
    </SidebarFooter>
    )}
  </Sidebar>
);

export default SidebarComponent;
