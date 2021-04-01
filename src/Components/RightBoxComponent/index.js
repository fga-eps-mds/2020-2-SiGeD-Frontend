import React from 'react';
import {
  RightBox, ContentBox, NameDiv, Line, PersonIcon,
} from './Style';

const RightBoxComponent = ({ children }) => (
  <RightBox>
    <ContentBox>
      <NameDiv>
        <PersonIcon />
        <p size="200%">
          Ayrton Senna
        </p>
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
