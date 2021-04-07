import { FaSistrix } from 'react-icons/fa';
import {
  Main, Container, Title, Search, ContentBox, Header, List, ButtonDiv, DropDiv,
} from './Style';
import SearchInput from '../SearchInput';
import RedirectListButton from '../RedirectButton';

const GenericListScreen = ({
  ButtonTitle, ButtonFunction, PageTitle, children, setWord, SearchWord, ListType,
  redirectTo,

}) => (
  <Main>
    <Container>
      <Title>{PageTitle}</Title>
      <Header>
        <DropDiv>
          <Search>
            <SearchInput
              type="text"
              icon={<FaSistrix />}
              value={SearchWord}
              setWord={(value) => setWord(value)}
            />
          </Search>
          {children[0]}
        </DropDiv>
        <ButtonDiv>
          <RedirectListButton title={ButtonTitle} redirectTo={redirectTo} click={ButtonFunction} />
        </ButtonDiv>
      </Header>

      <ContentBox>
        {children[1]}
        <List>
          {ListType}
        </List>
      </ContentBox>
    </Container>
  </Main>
);

export default GenericListScreen;
