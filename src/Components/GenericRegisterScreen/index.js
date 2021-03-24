import React from 'react';
import SidebarComponent from '../SidebarComponent';
import TinyButton from '../TinyButton';
import {
  Main, Container, DivButtom, RightSideContainer,
} from './style';

const GenericRegisterScreen = ({
  sidebarList, children, cancel, submit, buttonTitle, sidebarFooter, visibility,
  sidebarFooterHeight, sidebarTextHeight, mobileBackgroundColor, mobileIconColor,
  sidebarTitleHeight,
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
