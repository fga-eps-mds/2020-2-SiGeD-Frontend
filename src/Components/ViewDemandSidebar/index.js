import React from 'react';
import {
  RightBox, ContentBox, NameDiv, Line, PersonIcon,
} from './Style';

const ViewDemandSidebar = ({ children }) => (
  <RightBox>
    <ContentBox>
      <NameDiv>
        <PersonIcon />
        <p>
          Ayrton Senna Adalberto Silva
        </p>
      </NameDiv>
      <Line />
    </ContentBox>
    <>
      {children}
    </>
  </RightBox>
);

export default ViewDemandSidebar;
