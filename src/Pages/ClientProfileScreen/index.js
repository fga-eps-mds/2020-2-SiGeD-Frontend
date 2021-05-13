import React, { useEffect, useState } from 'react';
import { FaSistrix } from 'react-icons/fa';
import { useParams, Redirect } from 'react-router-dom';
import ProfileSidebarComponent from '../../Components/ProfileSidebarComponent';
import { getDemands } from '../../Services/Axios/demandsServices';
import ClientDemandData from '../../Components/ClientDemandData';
import SearchInput from '../../Components/SearchInput';
import RedirectListButton from '../../Components/RedirectButton';
import DropdownComponent from '../../Components/DropdownComponent';
import {
  Main, RightBox, RightBoxMain, TitleH, SearchDiv, FilterDiv,
  HeaderDiv, ListDiv, ButtonContainer, ContainerDiv, styles,
} from './Style';
import { DropdownField } from '../ListDemandsScreen/Style';
import { DropDiv, ContentBox } from '../../Components/GenericListScreen/Style';
import {
  getClients, getClientFeatures,
} from '../../Services/Axios/clientServices';
import { getSectors } from '../../Services/Axios/sectorServices';
import { useProfileUser } from '../../Context';
import colors from '../../Constants/colors';
import ClientHistory from '../../Components/ClientHistory';

const ClientProfileScreen = () => {
  const [sectors, setSectors] = useState([]);
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputCpf, setInputCpf] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputSecondaryPhone, setInputSecondaryPhone] = useState('');
  const [location, setLocation] = useState('');
  const [officeOption, setOfficeOption] = useState('');
  const [address, setAddress] = useState('');
  const [word, setWord] = useState();
  const [filterDemands, setFilterDemands] = useState([]);
  const [demands, setDemands] = useState([]);
  const [dropdownYears, setDropdownYears] = useState([]);
  const [filterYear, setFilterYear] = useState('Todos');
  const [client, setClient] = useState('');
  const [show, setShow] = useState(false);
  const [clientFeatures, setClientFeatures] = useState([]);
  const [clientFeaturesID, setClientFeaturesID] = useState([]);
  const { id } = useParams();
  const { startModal } = useProfileUser();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getDemandsFromApi = async () => {
    await getDemands('demand', startModal)
      .then((response) => setDemands(response?.data));
  };

  const getClientFromApi = async () => {
    getClients(`clients/${id}`, startModal)
      .then((response) => {
        const { data } = response;
        setInputName(data.name);
        setInputEmail(data.email);
        setInputCpf(data.cpf);
        setInputPhone(data.phone);
        setInputSecondaryPhone(data.secondaryPhone); // sec phone
        setOfficeOption(data.office);
        setLocation(data.location); // location
        setAddress(data.address);
        setClient(data);
        setClientFeaturesID(data?.features);
      });
  };

  const getClientFeaturesList = () => {
    getClientFeatures(clientFeaturesID, startModal)
      .then((response) => setClientFeatures(response.data));
  };

  useEffect(() => {
    getClientFeaturesList();
  }, [clientFeaturesID]);

  const getSectorsFromApi = async () => {
    await getSectors(startModal)
      .then((response) => {
        setSectors(response.data);
      });
  };

  const getYearsList = () => {
    const years = ['Todos'];
    demands?.map((demand) => {
      const year = new Date(demand.createdAt).getFullYear();
      if (!years.find((y) => y === year)) {
        years.push(year);
      }
      return undefined;
    });
    setDropdownYears(years);
  };

  const filterDemandsByYear = () => {
    const filteredDemands = [];
    demands.map((demand) => {
      const year = new Date(demand.createdAt).getFullYear().toString();
      if (year === filterYear) {
        filteredDemands.push(demand);
      }
      return undefined;
    });
    setFilterDemands(filteredDemands);
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
    getYearsList();
  }, [demands]);

  useEffect(() => {
    if (filterYear !== 'Todos') {
      filterDemandsByYear();
    } else {
      setFilterDemands(demands);
    }
  }, [filterYear]);

  const listDemandsForProfile = () => {
    if (demands?.length === 0) {
      return <h1>Sem resultados</h1>;
    }
    if (filterDemands?.length === 0) {
      return <h1>Sem resultados</h1>;
    }
    return filterDemands?.map((demand) => {
      if (demand.clientID === client._id && demand.open === true) {
        return (
          <ClientDemandData
            demand={demand}
            key={demand._id}
            sectors={sectors}
          />
        );
      } if (demand.clientID === client._id && demand.open === false) {
        return (
          <ClientDemandData
            demand={demand}
            key={demand._id}
            sectors={sectors}
            style={{ backgroundColor: 'rgb(0, 0, 0, 0.1)' }}
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
              sidebarTitle="Perfil do Cliente"
              sidebarList={[inputName, inputCpf,
                address, officeOption, location]}
              sidebarFooter={[inputEmail, inputPhone, inputSecondaryPhone]}
              edit
              handleShow={handleShow}
              id={client._id}
              features={clientFeatures}
            />
            <RightBox>
              <RightBoxMain>
                <ContainerDiv>
                  <TitleH>Prontuário</TitleH>
                  <HeaderDiv>
                    <DropDiv width="260px">
                      <SearchDiv>
                        <SearchInput
                          type="text"
                          icon={<FaSistrix />}
                          value={word}
                          setWord={(value) => setWord(value)}
                        />
                      </SearchDiv>
                    </DropDiv>
                    <FilterDiv>
                      <DropdownField width="35%">
                        <p style={{ marginBottom: '0' }}>Ano: </p>
                        <DropdownComponent
                          OnChangeFunction={(Option) => setFilterYear(Option.target.value)}
                          style={styles.dropdownComponentStyle}
                          optionStyle={{
                            backgroundColor: `${colors.secondary}`,
                          }}
                          optionList={dropdownYears}
                        />
                      </DropdownField>
                      <ButtonContainer>
                        <RedirectListButton
                          title="Nova Demanda"
                          redirectTo="/demanda"
                          style={styles.redirectListButtonStyle}
                        />
                      </ButtonContainer>
                    </FilterDiv>
                  </HeaderDiv>

                  <ContentBox>
                    <ListDiv>
                      {listDemandsForProfile()}
                    </ListDiv>
                  </ContentBox>
                </ContainerDiv>
              </RightBoxMain>
            </RightBox>
            <ClientHistory
              show={show}
              handleClose={handleClose}
              client={client}
            />
          </Main>
        )}
    </>
  );
};

export default ClientProfileScreen;
