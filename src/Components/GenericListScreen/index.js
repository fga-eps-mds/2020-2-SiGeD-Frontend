import { FaSistrix } from 'react-icons/fa';
import {
  Main, Container, Title, Search, ContentBox, Header, style, List,
} from './style';
import SearchInput from '../SearchInput';
import TinyButton from '../TinyButton';

const GenericListScreen = ({
  ButtonTitle, ButtonFunction, PageTitle, children, setWord, SearchWord, ListType,
}) => (
  <Main>
    <Container>
      <Title>{PageTitle}</Title>
      <Header>
        <Search>
          <SearchInput
            type="text"
            icon={<FaSistrix />}
            value={SearchWord}
            setWord={(value) => setWord(value)}
          />
        </Search>
        <TinyButton style={style.buttonStyle} title={ButtonTitle} type="primary" click={ButtonFunction} />
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

export default GenericListScreen;
