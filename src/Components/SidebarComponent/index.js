import React from 'react';
import { Sidebar, SidebarText, Icon } from './style';

const SidebarComponent = ({
  sidebarList,
}) => (
  <Sidebar>
    <Icon />
    <SidebarText>
      {sidebarList.map((sidebarCardText) => <p>{sidebarCardText}</p>)}
    </SidebarText>
  </Sidebar>
);

export default SidebarComponent;
