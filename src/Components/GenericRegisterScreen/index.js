import React from 'react';
import SidebarComponent from '../SidebarComponent';
import TinyButton from '../TinyButton';
import {
  Main, Container, DivButtom, RightSideContainer,
} from './Style';

const GenericRegisterScreen = ({
  sidebarList, children, cancel, submit, buttonTitle, sidebarFooter, visibility,
  sidebarFooterHeight, sidebarTextHeight, mobileBackgroundColor, mobileIconColor,
  sidebarTitleHeight, inputImage, setInputImage, baseImage, setBaseImage,
}) => (
  <Main>
    <Container>
      <SidebarComponent
        sidebarList={sidebarList}
        sidebarFooter={sidebarFooter}
        visibility={visibility}
        mobileBackgroundColor={mobileBackgroundColor}
        sidebarTextHeight={sidebarTextHeight}
        sidebarFooterHeight={sidebarFooterHeight}
        mobileIconColor={mobileIconColor}
        sidebarTitleHeight={sidebarTitleHeight}
        inputImage={inputImage}
        setInputImage={setInputImage}
        baseImage={baseImage}
        setBaseImage={setBaseImage}
      />
      <RightSideContainer>
        {children}
        <DivButtom>
          <TinyButton type="secondary" title="Cancelar" click={cancel} />
          <TinyButton type="primary" title={buttonTitle} click={() => submit()} />
        </DivButtom>
      </RightSideContainer>
    </Container>
  </Main>
);

export default GenericRegisterScreen;
