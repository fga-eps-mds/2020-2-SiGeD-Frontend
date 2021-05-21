import React, { useState, useEffect } from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { BiStopwatch } from 'react-icons/bi';
import moment from 'moment-timezone';
import {
  RightBox, ContentBox, NameDiv, Line,
  CreatedBy, Img, P,
  UserName, UserP, SelectionBox,
  CategoryField, MobileHeader,
  PlusButton, LessButton, ButtonsDiv,
  AlertContainer, AlertTitle, CreateAlertDiv,
  CreateAlertTitle, CreateAlertIcon, ListAlert,
  TextButton, styles,
} from './Style';
import SendDemandModal from '../SendDemandModal';
import DropdownComponent from '../DropdownComponent';
import SelectedCategories from '../SelectedCategories';
import AlertByDemandData from '../AlertByDemandData';
import colors from '../../Constants/colors';
import CreateAlertModal from '../CreateAlertModal';
import { useProfileUser } from '../../Context';

const ViewDemandSidebar = ({
  clientImage, clientName, userName, selectedCategories, demand,
  getDemandApi, showUpdates, sectorsResponse,
  changeState, setChangeState, alerts, handleShowHistory,
}) => {
  const [sidebarState, setSidebarState] = useState(true);
  const [flag, setFlag] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const { user, startModal } = useProfileUser();

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

  const sortedAlerts = alerts.sort((a, b) => moment(a.date).format('YYYYMMDD') - moment(b.date).format('YYYYMMDD'));

  const ListAlertData = () => sortedAlerts?.map((alert) => (
    <AlertByDemandData alert={alert} />
  ));

  const renderImageClient = () => {
    if (!clientImage) {
      return (
        <IoPersonCircleOutline size="100%" />
      );
    }
    return (
      <Img
        src={clientImage}
        alt="Foto"
      />
    );
  };

  const renderImageUser = () => {
    if (!user.image) {
      return (
        <IoPersonCircleOutline size="20%" />
      );
    }
    return (
      <Img
        src={user.image}
        alt="Foto"
      />
    );
  };

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
          {renderImageClient()}
          <P>
            {clientName}
          </P>
        </NameDiv>
        <Line />
        {sidebarState
          && (
            <CreatedBy>
              <p style={{ marginBottom: '0px' }}>Criado por:</p>
              <UserName>
                {renderImageUser()}
                <UserP>
                  {userName}
                </UserP>
              </UserName>
            </CreatedBy>
          )}
        <p style={styles.textStyle}>
          Setor:
        </p>
        <DropdownComponent
          OnChangeFunction={(Option) => setSectorOption(Option.target.value)}
          style={styles.dropdownComponentStyle}
          optionStyle={{
            backgroundColor: `${colors.navHeaders}`,
          }}
          optionList={sectorsList()}
          value={sectorOption}
        />
        {sidebarState
          && (
            <div style={styles.sidebarStateDiv}>
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
              <ListAlert>
                {ListAlertData()}
              </ListAlert>
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
                user={user}
              />
            </AlertContainer>
          </SelectionBox>
        )}
        { user.role === 'admin'
        && (
          <TextButton
            onClick={() => handleShowHistory()}
          >
            Histórico de alterações
          </TextButton>
        )}
      </ContentBox>
    </RightBox>
  );
};

export default ViewDemandSidebar;
