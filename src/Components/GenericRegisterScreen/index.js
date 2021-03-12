import React from 'react';
import SidebarComponent from '../SidebarComponent';
import TinyButton from '../TinyButton';
import {
  Main, Container, ColumnText, DivButtom, RightSideContainer,
} from './style';

const GenericRegisterScreen = ({
  sidebarList, children, cancel, submit, buttonTitle,
}) => (
  <Main>
    <Container>
      <SidebarComponent sidebarList={sidebarList} />
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
