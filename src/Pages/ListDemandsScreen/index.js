import React, { useState, useEffect } from 'react';
import { FaSistrix } from 'react-icons/fa';
import colors from '../../Constants/colors';
import {
  Main, Container, Title, Search, ContentBox, Header, List,
} from '../../Components/GenericListScreen/Style';
import SearchInput from '../../Components/SearchInput';
import DropdownComponent from '../../Components/DropdownComponent';
// import DemandData from '../../Components/DemandData';
import { getDemands } from '../../Services/Axios/demandsServices';

const ListDemandsScreen = ({
  setWord, SearchWord, ListType,
}) => {
  const [DemandsList, setDemandsList] = useState([]);

  const getDemandsFromApi = async () => {
    await getDemands('demand')
      .then((response) => setDemandsList(response.data));
  };

  console.log(DemandsList);

  useEffect(() => {
    getDemandsFromApi();
  }, []);

  return (
    <Main>
      <Container>
        <Title>Demandas</Title>
        <Header>
          <Search style={{ width: '30%' }}>
            <SearchInput
              type="text"
              icon={<FaSistrix />}
              value={SearchWord}
              setWord={(value) => setWord(value)}
              style={{ width: '100%' }}
            />
          </Search>
          <div style={{
            width: '30%', marginTop: '5%', justifyContent: 'space-between', display: 'flex',
          }}
          >
            <div>
              <p>Setor:</p>
              <div style={{
                boxSizing: 'border-box', borderRadius: '10px', border: `1px solid ${colors.text}`, display: 'flex', width: '100%',
              }}
              >
                <DropdownComponent
                  textColor="black"
                  OnChangeFunction={(Option) => console.log(Option.target.value)}
                  style={{
                    color: 'black',
                    backgroundColor: 'white',
                    height: '5vh',
                  }}
                  optionStyle={{
                    backgroundColor: `${colors.backgroundColor}`,
                    width: '100%',
                  }}
                  optionList={['option1', 'option2', 'option3']}
                />
              </div>
            </div>

            <div>

              <p>Label:</p>
              <div style={{
                boxSizing: 'border-box', borderRadius: '10px', border: `1px solid ${colors.text}`, display: 'flex', width: '100%',
              }}
              >
                <DropdownComponent
                  textColor="black"
                  OnChangeFunction={(Option) => console.log(Option.target.value)}
                  style={{
                    color: 'black',
                    backgroundColor: 'white',
                    height: '5vh',
                  }}
                  optionStyle={{
                    backgroundColor: `${colors.backgroundColor}`,
                    width: '100%',
                  }}
                  optionList={['option1', 'option2', 'option3']}
                />
              </div>
            </div>
          </div>
        </Header>

        <ContentBox>
          {/* { DemandsList.map((DemandsListItem, index) => (
            <DemandData demand={DemandsListItem} key={index} />
          ))} */}
          <List>
            {ListType}
          </List>
        </ContentBox>
      </Container>

    </Main>
  );
};

export default ListDemandsScreen;
