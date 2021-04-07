import React, { useEffect, useState } from 'react';
import { FaSistrix } from 'react-icons/fa';
import { useParams, Redirect } from 'react-router-dom';
import ProfileSidebarComponent from '../../Components/ProfileSidebarComponent';
import { getDemands } from '../../Services/Axios/demandsServices';
import ClientDemandData from '../../Components/ClientDemandData';
import SearchInput from '../../Components/SearchInput';
import RedirectListButton from '../../Components/RedirectButton';
import {
  Main, RightBox, RightBoxMain, TitleH, SearchDiv,
  HeaderDiv, ListDiv, ButtonContainer,
} from './Style';
import { DropDiv, ContentBox, Container } from '../../Components/GenericListScreen/Style';
import { getClients } from '../../Services/Axios/clientServices';
import { getSectors } from '../../Services/Axios/sectorServices';

const ClientProfileScreen = () => {
  const [sectors, setSectors] = useState([]);
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputCpf, setInputCpf] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputCity, setInputCity] = useState('');
  const [officeOption, setOfficeOption] = useState('');
  const [policeStationOption, setPoliceStationOption] = useState('');
  const [word, setWord] = useState();
  const [filterDemands, setFilterDemands] = useState([]);
  const [demands, setDemands] = useState([]);
  const [client, setClient] = useState('');
  const { id } = useParams();

  const getDemandsFromApi = async () => {
    await getDemands('demand?open=true')
      .then((response) => setDemands(response?.data));
  };

  const getClientFromApi = async () => {
    getClients(`clients/${id}`)
      .then((response) => {
        const { data } = response;
        setInputName(data.name);
        setInputEmail(data.email);
        setInputCpf(data.cpf);
        setInputPhone(data.phone);
        setInputCity(data.city);
        setOfficeOption(data.office);
        setPoliceStationOption(data.policeStation);
        setClient(data);
      });
  };

  const getSectorsFromApi = async () => {
    await getSectors()
      .then((response) => {
        setSectors(response.data);
      });
  };

  useEffect(() => {
    getSectorsFromApi();
    getClientFromApi();
    getDemandsFromApi();
  }, []);

  useEffect(() => {
    setFilterDemands(
      demands.filter((demand) => demand.name.toLowerCase().includes(word?.toLowerCase())),
    );
  }, [word]);

  useEffect(() => {
    setFilterDemands(demands);
  }, [demands]);

  const listDemandsForProfile = () => {
    if (demands?.length === 0) {
      return <h1>Sem resultados</h1>;
    }
    if (filterDemands?.length === 0) {
      return <h1>Sem resultados</h1>;
    }
    return filterDemands?.map((demand) => {
      if (demand.clientID === client._id) {
        return (
          <ClientDemandData
            demand={demand}
            key={demand._id}
            sectors={sectors}
          />
        );
      }
      return <></>;
    });
  };
  if (!localStorage.getItem('@App:token')) {
    return <Redirect to="/login" />;
  }

  return (
    <>
      { demands && client
        && (
          <Main>
            <ProfileSidebarComponent
              sidebarTitleH="Perfil do Cliente"
              sidebarList={[inputName, inputCpf,
                inputCity, officeOption, policeStationOption]}
              sidebarFooter={[inputEmail, inputPhone]}
            />
            <RightBox>
              <RightBoxMain>
                <Container>
                  <TitleH>Prontuário</TitleH>
                  <HeaderDiv>
                    <DropDiv>
                      <SearchDiv>
                        <SearchInput
                          type="text"
                          icon={<FaSistrix />}
                          value={word}
                          setWord={(value) => setWord(value)}
                        />
                      </SearchDiv>
                    </DropDiv>
                    <ButtonContainer>
                      <RedirectListButton
                        title="Nova Demanda"
                        redirectTo="/demanda"
                        style={{ height: '100%', fontSize: '100%' }}
                      />
                    </ButtonContainer>
                  </HeaderDiv>

                  <ContentBox>
                    <ListDiv>
                      {listDemandsForProfile()}
                    </ListDiv>
                  </ContentBox>
                </Container>
              </RightBoxMain>
            </RightBox>
          </Main>
        )}
    </>
  );
};

export default ClientProfileScreen;
