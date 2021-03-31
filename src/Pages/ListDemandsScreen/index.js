import { Form } from 'react-bootstrap';
import React from 'react';
import { FaSistrix } from 'react-icons/fa';
import colors from '../../Constants/colors';
import {
  Main, Container, Title, Search, ContentBox, Header, List,
} from '../../Components/GenericListScreen/Style';
import SearchInput from '../../Components/SearchInput';
import { Dropdown } from '../../Components/UserForms/Style';

const ListDemandsScreen = ({
  PageTitle, children, setWord, SearchWord, ListType,
}) => (
  <Main>
    <Container>
      <Title>{PageTitle}</Title>
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
        <Form.Group style={{
          width: '30%', marginTop: '5%', justifyContent: 'space-between', display: 'flex',
        }}
        >
          <Form.Label>Setor:</Form.Label>
          <div style={{
            boxSizing: 'border-box', borderRadius: '10px', border: `1px solid ${colors.text}`, display: 'flex', width: '50%',
          }}
          >
            <Dropdown
              as="select"
              textcolor="black"
              onChange={(Option) => Option.target.value}
              style={{ color: 'black', backgroundColor: 'white' }}
            >
              <option style={{ backgroundColor: `${colors.backgroundColor}`, width: '100%' }}>Administrador(a)</option>
              <option style={{ backgroundColor: `${colors.backgroundColor}`, width: '100%' }}>Profissional</option>
              <option style={{ backgroundColor: `${colors.backgroundColor}`, width: '100%' }}>Recepcionista</option>
            </Dropdown>
          </div>

          <Form.Label>Label:</Form.Label>
          <div style={{
            boxSizing: 'border-box', borderRadius: '10px', border: `1px solid ${colors.text}`, display: 'flex', width: '50%',
          }}
          >
            <Dropdown
              as="select"
              textcolor="black"
              onChange={(Option) => Option.target.value}
              style={{ color: 'black', backgroundColor: 'white' }}
            >
              <option style={{ backgroundColor: `${colors.backgroundColor}`, width: '100%' }}>Porte de Arma</option>
              <option style={{ backgroundColor: `${colors.backgroundColor}`, width: '100%' }}>Perneta</option>
              <option style={{ backgroundColor: `${colors.backgroundColor}`, width: '100%' }}>Sem braço</option>
            </Dropdown>
          </div>
        </Form.Group>
      </Header>

      <ContentBox>
        {children}
        <List>
          {ListType}
        </List>
      </ContentBox>
    </Container>

  </Main>
);

export default ListDemandsScreen;
