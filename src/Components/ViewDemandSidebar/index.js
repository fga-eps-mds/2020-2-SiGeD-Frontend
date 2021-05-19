import React, { useState, useEffect } from 'react';
import { BiStopwatch } from 'react-icons/bi';
import moment from 'moment-timezone';
import {
  RightBox, ContentBox, NameDiv, Line,
  CreatedBy, UserIcon, PersonIcon, P,
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
import { getAlertsByDemand } from '../../Services/Axios/demandsServices';

const ViewDemandSidebar = ({
  clientName, userName, selectedCategories, demand, getDemandApi, showUpdates, sectorsResponse,
  changeState, setChangeState, alerts, setAlerts, handleShowHistory,
}) => {
  const [sidebarState, setSidebarState] = useState(true);
  const [flag, setFlag] = useState(false);
  const [show, setShow] = useState(false);
  const [sorted, setSorted] = useState(false);
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

  const sortList = () => {
    const sortedAlerts = alerts.sort((a, b) => moment(a.date).format('YYYYMMDD') - moment(b.date).format('YYYYMMDD'));
    setAlerts(sortedAlerts);
    setSorted(true);
    console.log(sortedAlerts);
  };

  const getAlertsApi = async () => {
    await getAlertsByDemand(demand?._id, startModal)
      .then((response) => {
        setAlerts(response.sort((a, b) => moment(a.date).format('YYYYMMDD') - moment(b.date).format('YYYYMMDD')));
      })
      .catch((err) => {
        console.error(`An unexpected error ocourred while getting alerts. ${err}`);
      });
  };

  useEffect(() => {
    if (!sorted) {
      getAlertsApi();
      sortList();
    }
  }, [sorted, alerts]);

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
              <p style={{ marginBottom: '0px' }}>Criado por:</p>
              <UserName>
                <UserIcon />
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
                { alerts && alerts?.map((alert) => (
                  <AlertByDemandData
                    alert={alert}
                    demand={demand}
                    changeState={changeState}
                    setChangeState={setChangeState}
                    setSorted={setSorted}
                  />
                )) }
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
                setSorted={setSorted}
                user={user}
                title="Cadastrar"
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
