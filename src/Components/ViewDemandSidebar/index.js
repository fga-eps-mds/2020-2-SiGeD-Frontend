import React from 'react';
import {
  RightBox, ContentBox, NameDiv, Line,
  CreatedBy, UserIcon, PersonIcon, P,
  UserName, UserP, CategoryName,
  CategoryField, MobileHeader,
} from './Style';
import SendDemandModal from '../SendDemandModal';

const ViewDemandSidebar = ({
  clientName, userName, category, children,
}) => (
  <RightBox>
    <ContentBox>
      <MobileHeader>
        Cliente:
      </MobileHeader>
      <NameDiv>
        <PersonIcon />
        <P>
          { clientName }
        </P>
      </NameDiv>
      <Line />
      <CreatedBy>
        <p>Criado por:</p>
        <UserName>
          <UserIcon />
          <UserP>
            { userName }
          </UserP>
        </UserName>
      </CreatedBy>
    </ContentBox>
    {children}
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '3%',
        width: '100%',
      }}
    >
      <SendDemandModal />
    </div>
    <CategoryField>
      <p>
        Categoria:
      </p>
      <CategoryName style={{ backgroundColor: category.color }}>{category.name}</CategoryName>
    </CategoryField>
  </RightBox>
);

export default ViewDemandSidebar;
