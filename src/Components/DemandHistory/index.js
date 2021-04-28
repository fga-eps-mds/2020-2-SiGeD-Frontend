import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import {
  TimelineOppositeContent,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@material-ui/lab';
import colors from '../../Constants/colors';
import {
  TimeDiv, UpdateDiv, UserName, Tag,
} from './Style';
import { getUser } from '../../Services/Axios/userServices';
import { useProfileUser } from '../../Context';
import ModalHistory from '../ModalHistory';
import { getCategories } from '../../Services/Axios/demandsServices';

const DemandHistory = ({ show, handleClose, demand }) => {
  const { startModal } = useProfileUser();
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const history = useHistory();

  const getUserFromApi = async () => {
    await getUser('users', startModal)
      .then((response) => setUsers(response.data));
  };

  const getCategoriesFromApi = async () => {
    await getCategories('category')
      .then((response) => setCategories(response.data));
  };

  useEffect(() => {
    getUserFromApi();
    getCategoriesFromApi();
  }, []);

  const dictionary = (word) => {
    if (word === 'name') {
      return 'nome';
    }
    if (word === 'description') {
      return 'descrição';
    }
    if (word === 'category') {
      return 'categoria';
    }
    if (word === 'process') {
      return 'processo';
    }
    return word;
  };

  const updateData = (after, label) => {
    if (label === 'category') {
      const findedCategory = categories?.filter((category) => category?._id === after);
      return (
        <Tag
          style={{ backgroundColor: findedCategory[0]?.color, color: 'white' }}
          key={findedCategory[0]?._id}
        >
          {findedCategory[0]?.name}
        </Tag>
      );
    }
    return after;
  };

  const showHistory = () => demand?.demandHistory.map((update) => {
    const findedUser = users?.filter((user) => user?._id === update.userID);

    return (
      <TimelineItem style={{ marginLeft: '8%' }}>
        <TimelineOppositeContent style={{ display: 'none' }} />
        <TimelineSeparator>
          <TimelineDot style={{ backgroundColor: colors.primary }} />
          <TimelineConnector style={{ backgroundColor: colors.navHeaders }} />
        </TimelineSeparator>
        <TimelineContent style={{ width: '100%' }}>
          <TimeDiv>
            {format(new Date(update.date), 'dd/MM/yyyy')}
            {' - Atualização de '}
            {dictionary(update.label)}
            {' por '}
            <UserName onClick={() => history.push('/usuarios')}>
              {findedUser[0]?.name}
            </UserName>
          </TimeDiv>
          <UpdateDiv>
            <p style={{ color: 'red' }}>
              {'Antes: '}
              {updateData(update.before, update.label)}
            </p>
            <p style={{ color: 'blue' }}>
              {'Depois: '}
              {updateData(update.after, update.label)}
            </p>
          </UpdateDiv>
        </TimelineContent>
      </TimelineItem>
    );
  });

  return (
    <ModalHistory
      show={show}
      handleClose={handleClose}
    >
      {showHistory()}
    </ModalHistory>
  );
};

export default DemandHistory;
