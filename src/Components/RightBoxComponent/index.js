import React from 'react';
import {
  RightBox, ContentBox, NameDiv, Line, PersonIcon, Name, CenterName,
} from './Style';

const RightBoxComponent = ({ children, clientName }) => (
  <RightBox>
    <ContentBox>
      <NameDiv>
        <PersonIcon />
        <CenterName>
          <Name>
            {clientName}
          </Name>
        </CenterName>
      </NameDiv>
      <Line />
    </ContentBox>
    <>
      {children[0]}

      {children[1]}

      {children[2]}

      {children[3]}
    </>
  </RightBox>
);

export default RightBoxComponent;
