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
  HeaderDiv, ListDiv, ButtonContainer, ContainerDiv,
} from './Style';
import { DropdownField } from '../ListDemandsScreen/Style';
import { DropDiv, ContentBox } from '../../Components/GenericListScreen/Style';
import { getClients } from '../../Services/Axios/clientServices';
import { getSectors } from '../../Services/Axios/sectorServices';
import { useProfileUser } from '../../Context';
import colors from '../../Constants/colors';
import ModalHistory from '../../Components/ModalHistory';

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
  const [dropdownYears, setDropdownYears] = useState([]);
  const [filterYear, setFilterYear] = useState('Todos');
  const [client, setClient] = useState('');
  const { id } = useParams();
  const { startModal } = useProfileUser();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false); // vai para a modal
  const handleShow = () => setShow(true); // vai para o profile

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
        setInputCity(data.city);
        setOfficeOption(data.office);
        setPoliceStationOption(data.policeStation);
        setClient(data);
      });
  };

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
                inputCity, officeOption, policeStationOption]}
              sidebarFooter={[inputEmail, inputPhone]}
              edit
              handleShow={handleShow}
              id={client._id}
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
                          style={{
                            display: 'flex',
                            color: `${colors.text}`,
                            height: '100%',
                            alignItems: 'center',
                            boxSizing: 'border-box',
                            borderRadius: '8px',
                            border: '1px solid black',
                            justifyContent: 'center',
                          }}
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
                          style={{ height: '100%', fontSize: '100%' }}
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
            <ModalHistory
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
