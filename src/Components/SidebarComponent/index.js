import React from 'react';
import {
  Sidebar, SidebarText, SidebarFooter, Icon, Img,
} from './Style';

const SidebarComponent = ({
  sidebarList, sidebarFooter, inputImage,
}) => {
  const renderImage = () => {
    if (!inputImage) {
      return (
        <Icon />
      );
    }
    return (
      <Img
        src={inputImage}
        alt="Foto"
      />
    );
  };

  return (
    <Sidebar>
      {renderImage()}
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
};

export default SidebarComponent;
