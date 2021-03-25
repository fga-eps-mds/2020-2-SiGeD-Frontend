import React from 'react';
import {
  Sidebar, SidebarText, Icon, SidebarFooter,
} from './Style';

const SidebarComponent = ({
  sidebarList, sidebarFooter,
}) => (
  <Sidebar>
    <Icon />
    <SidebarText>
      {sidebarList.map((sidebarCardText, index) => <p key={index}>{sidebarCardText}</p>)}
    </SidebarText>
    { sidebarFooter
        && (
          <SidebarFooter
            style={{ marginTop: '3vh' }}
          >
            {sidebarFooter.map((sidebarCardFooterText, index) => (
              <p style={{ fontSize: '2vh' }} key={index}>
                {sidebarCardFooterText}
              </p>
            ))}
          </SidebarFooter>
        )}
  </Sidebar>
);

export default SidebarComponent;
