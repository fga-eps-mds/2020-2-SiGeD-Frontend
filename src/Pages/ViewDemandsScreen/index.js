import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getDemands, getCategories } from '../../Services/Axios/demandsServices';
import ViewDemandSidebar from '../../Components/ViewDemandSidebar';
import ViewDemandCard from '../../Components/ViewDemandCard';
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

  if (!localStorage.getItem('@App:token')) {
    return <Redirect to="/login" />;
  }

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
