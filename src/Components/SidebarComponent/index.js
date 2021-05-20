import React, { useEffect } from 'react';
import { MdAddAPhoto } from 'react-icons/md';
import {
  Sidebar, SidebarText, SidebarFooter, Img, ButtonPhoto,
  ChooseContainerPhoto, InputPhoto, TopPart,
} from './Style';

const SidebarComponent = ({
  sidebarList, sidebarFooter, inputImage, setInputImage, baseImage, setBaseImage,
}) => {
  const convertBase64 = (file) => new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    setInputImage(baseImage);
  };

  useEffect(() => {
    setInputImage(baseImage);
  }, [baseImage]);

  const renderImage = () => {
    if (!inputImage) {
      return (
        <TopPart>
          <ChooseContainerPhoto>
            <ButtonPhoto className="submit-lente" type="submit">
              <MdAddAPhoto size="100%" />
            </ButtonPhoto>
          </ChooseContainerPhoto>
          <InputPhoto
            type="file"
            onChange={(e) => {
              uploadImage(e);
            }}
          />
        </TopPart>
      );
    }
    return (
      <TopPart>
        <Img
          src={inputImage}
          alt="Foto"
        />
        <InputPhoto
          type="file"
          onChange={(e) => {
            uploadImage(e);
          }}
        />
      </TopPart>
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
