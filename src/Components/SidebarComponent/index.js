import React, { useEffect, useState } from 'react';
import {
  Sidebar, SidebarText, SidebarFooter, Icon,
} from './Style';

const SidebarComponent = ({
  sidebarList, sidebarFooter, inputImage,
}) => {
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    if (!inputImage) {
      setPhoto(<Icon />);
    }
    if (inputImage) {
      setPhoto(inputImage);
    }
  }, [inputImage]);

  return (
    <Sidebar>
      <img src={photo} alt="Foto" height="200px" />
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
