import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import { useParams, Redirect } from 'react-router-dom';
import {
  Timeline, TimelineOppositeContent, TimelineItem, TimelineSeparator,
  TimelineConnector, TimelineContent, TimelineDot,
} from '@material-ui/lab';
import { getDemands, getAlertsByDemand } from '../../Services/Axios/demandsServices';
import { getSectors } from '../../Services/Axios/sectorServices';
import ViewDemandSidebar from '../../Components/ViewDemandSidebar';
import ViewDemandCard from '../../Components/ViewDemandCard';
import UpdateCard from '../../Components/UpdateCard';
import NewUpdateCard from '../../Components/NewUpdateCard';
import TinyButton from '../../Components/TinyButton';
import CloseDemandModal from '../../Components/CloseDemandModal';
import { useProfileUser } from '../../Context';
import {
  Main, CardsContainer, MobileButtonDiv, ButtonDiv, TimelineDiv, MobileTimeline,
  ForwardedDemandDiv,
} from './Style';
import { getClients } from '../../Services/Axios/clientServices';
import { getUser } from '../../Services/Axios/userServices';
import colors from '../../Constants/colors';
import DemandHistory from '../../Components/DemandHistory';

const ViewDemandsScreen = () => {
  const [client, setClient] = useState('');
  const [demand, setDemand] = useState('');
  const [userDemand, setUserDemand] = useState('');
  const [buttonColor, setButtonColor] = useState('');
  const [buttonTitle, setButtonTitle] = useState('');
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [showHistory, setShowHistory] = useState(false);
  const handleShowHistory = () => setShowHistory(true);
  const handleCloseHistory = () => setShowHistory(false);
  const [sectorsResponse, setSectorsResponse] = useState([]);
  const [flag, setFlag] = useState(false);
  const [changeState, setChangeState] = useState(false);
  const [message, setMessage] = useState('');
  const { user, startModal } = useProfileUser();
  const { id } = useParams();
  const [alerts, setAlerts] = useState([]);

  const getClientApi = async (clientID) => {
    await getClients(`clients/${clientID}`, startModal)
      .then((response) => setClient(response?.data));
  };

  const getUserApi = async (paramUserID) => {
    await getUser(`users/${paramUserID}`, startModal)
      .then((response) => { setUserDemand(response?.data); });
  };

  const getDemandApi = async () => {
    await getDemands(`demand/${id}`, startModal)
      .then((response) => {
        const { data } = response;
        setDemand(data);
        getClientApi(data?.clientID);
        getUserApi(data?.userID);
      });
  };

  const getAlertsApi = async () => {
    await getAlertsByDemand(id, startModal)
      .then((response) => { setAlerts(response); })
      .catch((err) => {
        console.error(`An unexpected error ocourred while getting alerts. ${err}`);
      });
  };

  const getSectorsApi = async () => {
    await getSectors(startModal)
      .then((response) => setSectorsResponse(response.data))
      .catch((err) => {
        console.error(`An unexpected error ocourred while getting sectors. ${err}`);
      });
  };

  const setMessageLocal = () => {
    if (demand.open === false) {
      setMessage('Você tem certeza que deseja reabrir essa demanda?');
    }
    if (demand.open === true) {
      setMessage('Você tem certeza que deseja concluir essa demanda?');
    }
  };

  const setButtons = async () => {
    if (demand?.open === true) {
      setButtonColor(colors.alertMessages);
      setButtonTitle('Concluir demanda');
    } else {
      setButtonColor(colors.primary);
      setButtonTitle('Reabrir demanda');
    }
  };

  useEffect(() => {
    if (id) {
      getDemandApi();
      getAlertsApi();
    }
  }, [changeState]);

  useEffect(() => {
    setMessageLocal();
  }, [handleClose]);

  useEffect(() => {
    if (demand) {
      getSectorsApi();
      setButtons();
      getAlertsApi();
      setFlag(true);
    }
  }, [demand && flag]);

  const showUpdates = () => {
    let list = demand.sectorHistory;
    list = list.concat(demand.updateList);
    list.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return 1;
      }
      if (a.updatedAt < b.updatedAt) {
        return -1;
      }
      return 0;
    });
    return list.map((value, index) => {
      if ((value.userName && value.visibilityRestriction === false)
        || (value.userName && (value.userSector === user.sector))) {
        return (
          <TimelineItem style={{ marginLeft: '8%' }} key={index}>
            <TimelineOppositeContent style={{ display: 'none' }} />
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: colors.primary }} />
              <TimelineConnector style={{ backgroundColor: colors.navHeaders }} />
            </TimelineSeparator>
            <TimelineContent style={{ width: '100%' }}>
              <UpdateCard
                update={value}
                sector={sectorsResponse}
                demand={demand}
                setChangeState={setChangeState}
                changeState={changeState}
              />
            </TimelineContent>
          </TimelineItem>
        );
      } if (value.userName) {
        return false;
      }

      const sectorName = sectorsResponse?.filter((sectorByID) => sectorByID._id === value.sectorID);
      return (
        <TimelineItem style={{ marginLeft: '8%' }} key={index}>
          <TimelineOppositeContent style={{ display: 'none' }} />
          <TimelineSeparator>
            <TimelineDot style={{ backgroundColor: colors.primary }} />
            <TimelineConnector style={{ backgroundColor: colors.navHeaders }} />
          </TimelineSeparator>
          <TimelineContent>
            <ForwardedDemandDiv>
              <p>
                Setor:
                {' '}
                {sectorName[0]?.name}
              </p>
              <p style={{ marginRight: '12%' }}>{ moment.parseZone(value.createdAt).local(true).format('DD/MM/YYYY')}</p>
            </ForwardedDemandDiv>
          </TimelineContent>
        </TimelineItem>
      );
    });
  };

  if (!localStorage.getItem('@App:token')) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      { demand && client && userDemand
      && (
      <Main>
        <CardsContainer>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
          >
            <ViewDemandCard
              demand={demand}
            />
          </div>
          <TimelineDiv>
            <Timeline>
              { showUpdates() }
            </Timeline>
            <div style={{ width: '90%', marginLeft: '8%' }}>
              <NewUpdateCard
                demand={demand}
                showUpdates={showUpdates}
                getDemandApi={getDemandApi}
                setChangeState={setChangeState}
                changeState={changeState}
              />
            </div>
          </TimelineDiv>
          <ButtonDiv>
            <TinyButton
              type="primary"
              title={buttonTitle}
              click={handleShow}
              style={{
                backgroundColor: buttonColor,
                color: `${colors.secondary}`,
                border: `1px solid ${buttonColor}`,
                height: 'min-content',
                width: '100%',
                display: 'flex',
                margin: '0%',
              }}
            />
            <CloseDemandModal
              demand={demand}
              id={id}
              show={show}
              handleClose={handleClose}
              message={message}
              startModal={startModal}
            />
          </ButtonDiv>
        </CardsContainer>
        <ViewDemandSidebar
          clientImage={client.image}
          clientName={client.name}
          userName={userDemand.name}
          selectedCategories={demand.categoryID}
          demand={demand}
          getDemandApi={getDemandApi}
          showUpdates={showUpdates}
          sectorsResponse={sectorsResponse}
          changeState={changeState}
          setChangeState={setChangeState}
          handleShowHistory={handleShowHistory}
          alerts={alerts}
          setAlerts={setAlerts}
        />
        <DemandHistory
          show={showHistory}
          handleClose={handleCloseHistory}
          demand={demand}
        />
        <MobileTimeline>
          <Timeline>
            { showUpdates() }
          </Timeline>
          <div style={{ width: '90%', marginLeft: '5%' }}>
            <NewUpdateCard
              demand={demand}
              user={user}
              getDemandApi={getDemandApi}
              changeState={changeState}
              setChangeState={setChangeState}
            />
          </div>
        </MobileTimeline>
        <MobileButtonDiv>
          <TinyButton
            type="primary"
            title={buttonTitle}
            click={handleShow}
            style={{
              backgroundColor: buttonColor,
              color: `${colors.secondary}`,
              border: `1px solid ${buttonColor}`,
              height: 'min-content',
              width: '100%',
              display: 'flex',
              margin: '0%',
            }}
          />
          <CloseDemandModal
            demand={demand}
            id={id}
            show={show}
            handleClose={handleClose}
            message={message}
            startModal={startModal}
          />
        </MobileButtonDiv>
      </Main>
      )}
    </>
  );
};

export default ViewDemandsScreen;
