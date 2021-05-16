import { useEffect, useState } from 'react';
import { TableContainer, TableContent, P } from '../PersonalData/Style';
import { Main } from '../HomepageSector/Style';
import { getSector } from '../../Services/Axios/sectorServices';

const HomepageUsers = ({
  user, startModal,
}) => {
  const [userSector, setUserSector] = useState([]);

  const getSectorFromAPI = (id) => {
    getSector(`sector/${id}`, startModal)
      .then((response) => setUserSector(response.data));
  };

  useEffect(() => {
    getSectorFromAPI(user?.sector);
  }, []);

  return (
    <Main>
      <TableContainer>
        <TableContent width={33.3}>
          <P>{user?.name}</P>
        </TableContent>
        <TableContent width={33.3}>
          <P>{user?.role}</P>
        </TableContent>
        <TableContent width={33.3}>
          <P>{userSector?.name}</P>
        </TableContent>
      </TableContainer>
    </Main>
  );
};

export default HomepageUsers;
