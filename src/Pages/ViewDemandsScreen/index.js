import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';
import Timeline from '@material-ui/lab/Timeline';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { getDemands, getCategories } from '../../Services/Axios/demandsServices';
import ViewDemandSidebar from '../../Components/ViewDemandSidebar';
import ViewDemandCard from '../../Components/ViewDemandCard';
import UpdateCard from '../../Components/UpdateCard';
import TinyButton from '../../Components/TinyButton';
import CloseDemandModal from '../../Components/CloseDemandModal';
import {
  Main, CardsContainer, MobileButtonDiv, ButtonDiv,
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

  useEffect(() => {
    if (demand) {
      getClientApi();
      getUserApi();
      getCategoryApi();
    } else {
      getDemandApi();
    }
  }, [demand]);

  const exibeAtualizacoes = () => {
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
    return list.map((valor) => {
      if (valor.userName) {
        // atualizacao
        return (
          <TimelineItem style={{ marginLeft: '8%' }}>
            <TimelineOppositeContent style={{ display: 'none' }} />
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: colors.primary }} />
              <TimelineConnector style={{ backgroundColor: colors.navHeaders }} />
            </TimelineSeparator>
            <TimelineContent>
              <UpdateCard demand={valor} />
            </TimelineContent>
          </TimelineItem>
        );
      }
      // setor
      return (
        <TimelineItem style={{ marginLeft: '8%' }}>
          <TimelineOppositeContent style={{ display: 'none' }} />
          <TimelineSeparator>
            <TimelineDot style={{ backgroundColor: colors.primary }} />
            <TimelineConnector style={{ backgroundColor: colors.navHeaders }} />
          </TimelineSeparator>
          <TimelineContent>
            <div style={{ display: 'flex', width: 'max-content' }}>
              <p>
                Setor:
                {valor.sectorID}
              </p>
              <p style={{ marginLeft: '50%' }}>{ format(new Date(valor.createdAt), 'dd/MM/yyyy') }</p>
            </div>
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
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Timeline>
              { exibeAtualizacoes() }
            </Timeline>
          </div>
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
        <ViewDemandSidebar clientName={client.name} userName={user.name} category={category} />
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
