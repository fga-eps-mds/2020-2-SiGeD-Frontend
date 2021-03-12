import React from 'react';
import TinyButton from '../TinyButton';
import {
  Main, Container, Sidebar, SidebarText, ColumnText, DivButtom, Icon, RightSideContainer,
} from './style';

const GenericRegisterScreen = ({
  sidebarList, children, cancel, submit, buttonTitle,
}) => (
  <Main>
    <Container>
      <Sidebar>
        <Icon />
        <SidebarText>
          {sidebarList.map((sidebarCardText) => <p key={Math.random()}>{sidebarCardText}</p>)}
        </SidebarText>
      </Sidebar>
      <RightSideContainer>
        <ColumnText>
          {children}
        </ColumnText>
        <DivButtom>
          <TinyButton type="secondary" title="Cancelar" click={cancel} />
          <TinyButton type="primary" title={buttonTitle} click={submit} />
        </DivButtom>
      </RightSideContainer>
    </Container>
  </Main>
);

export default GenericRegisterScreen;
