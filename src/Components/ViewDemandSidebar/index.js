import React, { useState, useEffect } from 'react';
import {
  RightBox, ContentBox, NameDiv, Line,
  CreatedBy, UserIcon, PersonIcon, P,
  UserName, UserP, SelectionBox,
  CategoryField, MobileHeader,
  PlusButton, LessButton, ButtonsDiv,
} from './Style';
import SendDemandModal from '../SendDemandModal';
import DropdownComponent from '../DropdownComponent';
import SelectedCategories from '../SelectedCategories';
import colors from '../../Constants/colors';

const ViewDemandSidebar = ({
  clientName, userName, selectedCategories, demand, getDemandApi, showUpdates, sectorsResponse,
  changeState, setChangeState,
}) => {
  const [sidebarState, setSidebarState] = useState(true);
  const [flag, setFlag] = useState(false);

  const actualSector = sectorsResponse?.filter(
    (sectorByID) => sectorByID._id
      === demand.sectorHistory[demand.sectorHistory.length - 1].sectorID,
  );

  const [sectorOption, setSectorOption] = useState(actualSector[0]?.name);

  const sectorsList = () => sectorsResponse.map((sector) => sector.name);

  useEffect(() => {
    if (actualSector[0] && !flag) {
      setSectorOption(actualSector[0]?.name);
      setFlag(true);
    }
  }, [actualSector]);

  return (
    <RightBox>
      <ContentBox>
        <ButtonsDiv>
          {sidebarState && <LessButton onClick={() => setSidebarState(false)} />}
          {!sidebarState && <PlusButton onClick={() => setSidebarState(true)} />}
        </ButtonsDiv>
        <MobileHeader>
          Cliente:
        </MobileHeader>
        <NameDiv>
          <PersonIcon />
          <P>
            {clientName}
          </P>
        </NameDiv>
        <Line />
        {sidebarState
          && (
            <CreatedBy>
              <p>Criado por:</p>
              <UserName>
                <UserIcon />
                <UserP>
                  {userName}
                </UserP>
              </UserName>
            </CreatedBy>
          )}
        <p style={{
          display: 'flex',
          justifyContent: 'flex-start',
          width: '100%',
          marginTop: '2vh',
        }}
        >
          Setor:
        </p>
        <DropdownComponent
          OnChangeFunction={(Option) => setSectorOption(Option.target.value)}
          style={{
            display: 'flex',
            color: `${colors.secondary}`,
            width: '90%',
            height: 'min-content',
            flexDirection: 'column',
            alignItems: 'center',
            boxSizing: 'border-box',
            borderRadius: '8px',
            border: '1px solid #ffffff',
          }}
          optionStyle={{
            backgroundColor: `${colors.navHeaders}`,
          }}
          optionList={sectorsList()}
          value={sectorOption}
        />
        {sidebarState
          && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                paddingRight: '3%',
                width: '100%',
                marginTop: '5%',
              }}
            >
              <SendDemandModal
                sectorOption={sectorOption}
                getDemandApi={getDemandApi}
                showUpdates={showUpdates}
                demand={demand}
                sectorsResponse={sectorsResponse}
                setChangeState={setChangeState}
                changeState={changeState}
              />
            </div>
          )}
        {sidebarState && (
          <SelectionBox>
            {sidebarState
              && (
                <CategoryField>
                  <p>
                    Categoria:
                  </p>
                  <SelectedCategories selectedCategories={selectedCategories} />
                </CategoryField>
              )}
          </SelectionBox>
        )}
      </ContentBox>
      <SelectionBox>
        {sidebarState
          && (
            <CategoryField>
              <p>
                Categoria:
              </p>
              <SelectedCategories selectedCategories={selectedCategories} />
            </CategoryField>
          )}
      </SelectionBox>
    </RightBox>
  );
};

export default ViewDemandSidebar;
