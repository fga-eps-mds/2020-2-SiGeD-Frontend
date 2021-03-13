import React from 'react';
import { Sidebar, SidebarText, Icon } from './style';

const SidebarComponent = ({
  title, sidebarList,
}) => (
  <Sidebar>
    <p>
      {title}
    </p>
    <Icon />
    <SidebarText>
      {sidebarList.map((sidebarCardText) => <p>{sidebarCardText}</p>)}
    </SidebarText>
  </Sidebar>
);

export default SidebarComponent;
