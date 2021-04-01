import React from 'react';
import {
  RightBox, ContentBox, NameDiv, Line, PersonIcon, P,
} from './Style';

const ViewDemandSidebar = ({ children, clientName, userName }) => (
  <RightBox>
    <ContentBox>
      <NameDiv>
        <PersonIcon />
        <P>
          { clientName }
        </P>
      </NameDiv>
      <Line />
      <P>
        Criado por:
        { userName }
      </P>
    </ContentBox>
    <>
      {children}
    </>
  </RightBox>
);

export default ViewDemandSidebar;
