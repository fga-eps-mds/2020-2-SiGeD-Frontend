import { TableContainer, TableContent, P } from '../PersonalData/Style';
import { Main } from '../HomepageSector/Style';

const HomePageClients = ({
  client,
}) => (
  <Main>
    <TableContainer>
      <TableContent width={33.3}>
        <P>{client?.name}</P>
      </TableContent>
      <TableContent width={33.3}>
        <P>{client?.cpf}</P>
      </TableContent>
      <TableContent width={33.3}>
        <P>{client?.phone}</P>
      </TableContent>
    </TableContainer>
  </Main>
);

export default HomePageClients;
