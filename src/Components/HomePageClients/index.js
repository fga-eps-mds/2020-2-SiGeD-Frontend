import { useHistory } from 'react-router-dom';
import { TableContainer, TableContent, P } from '../PersonalData/Style';
import Main from './Style';

const HomePageClients = ({
  client, role,
}) => {
  const history = useHistory();
  return (
    <Main onClick={() => history.push(`perfil/${client?._id}`)}>
      {role === 'admin' ? (
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
      )
        : (
          <TableContainer>
            <TableContent width={25}>
              <P>{client?.name}</P>
            </TableContent>
            <TableContent width={25}>
              <P>{client?.email}</P>
            </TableContent>
            <TableContent width={25}>
              <P>{client?.cpf}</P>
            </TableContent>
            <TableContent width={25}>
              <P>{client?.phone}</P>
            </TableContent>
          </TableContainer>
        )}
    </Main>
  );
};

export default HomePageClients;
