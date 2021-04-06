import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';
import {
  Timeline, TimelineOppositeContent, TimelineItem, TimelineSeparator,
  TimelineConnector, TimelineContent, TimelineDot,
} from '@material-ui/lab';
import { getDemands, getCategories } from '../../Services/Axios/demandsServices';
import { getSectors } from '../../Services/Axios/sectorServices';
import ViewDemandSidebar from '../../Components/ViewDemandSidebar';
import ViewDemandCard from '../../Components/ViewDemandCard';
import UpdateCard from '../../Components/UpdateCard';
import NewUpdateCard from '../../Components/NewUpdateCard';
import TinyButton from '../../Components/TinyButton';
import CloseDemandModal from '../../Components/CloseDemandModal';
import {
  Main, CardsContainer, MobileButtonDiv, ButtonDiv, TimelineDiv, MobileTimeline,
  ForwardedDemandDiv,
} from './Style';
import { getClients } from '../../Services/Axios/clientServices';
import { getUser } from '../../Services/Axios/userServices';
import colors from '../../Constants/colors';

const ViewDemandsScreen = () => {
  const [client, setClient] = useState('');
  const [demand, setDemand] = useState('');
  const [category, setCategory] = useState([]);
  const [user, setUser] = useState('');
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [sectorsResponse, setSectorsResponse] = useState([]);
  const [flag, setFlag] = useState(false);
  const { id } = useParams();

  const getDemandApi = async () => {
    await getDemands(`demand/${id}`)
      .then((response) => setDemand(response.data));
  };

  const getClientApi = async () => {
    await getClients(`clients/${demand.clientID}`)
      .then((response) => setClient(response.data));
  };

  const getUserApi = async () => {
    await getUser(`users/${demand.userID}`)
      .then((response) => { setUser(response.data); });
  };

  const getCategoryApi = async () => {
    await getCategories(`/category/${demand.categoryID}`)
      .then((response) => setCategory(response.data));
  };

  const getSectorsApi = async () => {
    await getSectors()
      .then((response) => setSectorsResponse(response.data))
      .catch((err) => {
        console.error(`An unexpected error ocourred while getting sectors. ${err}`);
      });
  };

  useEffect(() => {
    if (demand && !flag) {
      getClientApi();
      getUserApi();
      getCategoryApi();
      getSectorsApi();
      setFlag(true);
    } else {
      getDemandApi();
    }
  }, [demand]);

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
    return list.map((value) => {
      if (value.userName) {
        return (
          <TimelineItem style={{ marginLeft: '8%' }}>
            <TimelineOppositeContent style={{ display: 'none' }} />
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: colors.primary }} />
              <TimelineConnector style={{ backgroundColor: colors.navHeaders }} />
            </TimelineSeparator>
            <TimelineContent>
              <UpdateCard demand={value} />
            </TimelineContent>
          </TimelineItem>
        );
      }
      return (
        <TimelineItem style={{ marginLeft: '8%' }}>
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
                {value.sectorID}
              </p>
              <p style={{ marginRight: '12%' }}>{ format(new Date(value.createdAt), 'dd/MM/yyyy') }</p>
            </ForwardedDemandDiv>
          </TimelineContent>
        </TimelineItem>
      );
    });
  };

  return (
    <>
      { demand && client && user && category
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
                userName={user.name}
                showUpdates={showUpdates}
                getDemandApi={getDemandApi}
              />
            </div>
          </TimelineDiv>
          <ButtonDiv>
            <TinyButton
              type="primary"
              title="Fechar Demanda"
              click={handleShow}
              style={{
                backgroundColor: `${colors.alertMessages}`,
                color: `${colors.secondary}`,
                border: `1px solid ${colors.alertMessages}`,
                height: 'min-content',
                width: '100%',
                display: 'flex',
                margin: '0%',
              }}
            />
            <CloseDemandModal
              id={id}
              show={show}
              handleClose={handleClose}
            />
          </ButtonDiv>
        </CardsContainer>
        <ViewDemandSidebar
          clientName={client.name}
          userName={user.name}
          category={category}
          demand={demand}
          getDemandApi={getDemandApi}
          showUpdates={showUpdates}
          sectorsResponse={sectorsResponse}
        />
        <MobileTimeline>
          <Timeline>
            { showUpdates() }
          </Timeline>
          <div style={{ width: '90%', marginLeft: '5%' }}>
            <NewUpdateCard demand={demand} userName={user.name} getDemandApi={getDemandApi} />
          </div>
        </MobileTimeline>
        <MobileButtonDiv>
          <TinyButton
            type="primary"
            title="Fechar Demanda"
            click={handleShow}
            style={{
              backgroundColor: `${colors.alertMessages}`,
              color: `${colors.secondary}`,
              border: `1px solid ${colors.alertMessages}`,
              height: 'min-content',
              width: '100%',
              display: 'flex',
              margin: '0%',
            }}
          />
          <CloseDemandModal
            id={id}
            show={show}
            handleClose={handleClose}
          />
        </MobileButtonDiv>
      </Main>
      )}
    </>
  );
};

export default ViewDemandsScreen;
