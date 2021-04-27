import React, { useState, useEffect } from 'react';
import { BiStopwatch } from 'react-icons/bi';
import {
  RightBox, ContentBox, NameDiv, Line,
  CreatedBy, UserIcon, PersonIcon, P,
  UserName, UserP, SelectionBox,
  CategoryField, MobileHeader,
  PlusButton, LessButton, ButtonsDiv,
  AlertContainer, AlertTitle, CreateAlertDiv,
  CreateAlertTitle, CreateAlertIcon, TextButtom,
} from './Style';
import SendDemandModal from '../SendDemandModal';
import DropdownComponent from '../DropdownComponent';
import SelectedCategories from '../SelectedCategories';
import colors from '../../Constants/colors';
import CreateAlertModal from '../CreateAlertModal';
import { useProfileUser } from '../../Context';

const ViewDemandSidebar = ({
  clientName, userName, selectedCategories, demand, getDemandApi, showUpdates, sectorsResponse,
  changeState, setChangeState, handleShowHistory,
}) => {
  const [sidebarState, setSidebarState] = useState(true);
  const [flag, setFlag] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const { startModal, user } = useProfileUser();

  const actualSector = sectorsResponse?.filter(
    (sectorByID) => sectorByID._id
      === demand.sectorHistory[demand.sectorHistory.length - 1].sectorID,
  );

  const [sectorOption, setSectorOption] = useState(actualSector[0]?.name);

  const sectorsList = () => sectorsResponse.map((sector) => sector.name);

  const alertMessage = () => {
    startModal('Você deve editar a demanda para retirar a categoria!');
  };

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
            <CategoryField>
              <p>
                Categoria:
              </p>
              <SelectedCategories
                selectedCategories={selectedCategories}
                removeCategory={alertMessage}
              />
            </CategoryField>
            <AlertContainer>
              <AlertTitle>
                Alertas:
              </AlertTitle>
              <CreateAlertDiv
                onClick={() => handleShow()}
              >
                <CreateAlertIcon>
                  <BiStopwatch />
                </CreateAlertIcon>
                <CreateAlertTitle>
                  Adicionar Alerta
                </CreateAlertTitle>
              </CreateAlertDiv>
              <CreateAlertModal
                demand={demand}
                show={show}
                handleClose={handleClose}
                startModal={startModal}
                changeState={changeState}
                setChangeState={setChangeState}
              />
            </AlertContainer>
          </SelectionBox>
        )}
        { user.role === 'admin'
        && (
          <TextButtom
            onClick={() => handleShowHistory()}
          >
            Histórico de alterações
          </TextButtom>
        )}
      </ContentBox>
    </RightBox>
  );
};

export default ViewDemandSidebar;
