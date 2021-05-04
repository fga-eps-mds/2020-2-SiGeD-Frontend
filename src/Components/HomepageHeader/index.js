import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Main, Title, Icon, TopSide, BottomSide, AddIcon, LeftTopSide,
} from './Style';

const HomepageHeader = ({
  HeaderTitle, LeftIcon, RightIcon, children, RightIconDisplay,
}) => {
  const history = useHistory();

  return (
    <Main>
      <TopSide>
        <LeftTopSide
          onClick={() => history.push(`${LeftIcon}`)}
        >
          <Title>
            {HeaderTitle}
          </Title>
          <Icon />
        </LeftTopSide>
        <AddIcon
          RightIconDisplay={RightIconDisplay}
          onClick={() => history.push(`${RightIcon}`)}
        />
      </TopSide>
      <BottomSide>
        {children}
      </BottomSide>
    </Main>
  );
};

export default HomepageHeader;
