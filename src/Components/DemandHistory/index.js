import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import {
  TimelineItem,
  TimelineConnector,
  TimelineSeparator,
  TimelineDot,
  TimelineOppositeContent,
  TimelineContent,
} from '@material-ui/lab';
import colors from '../../Constants/colors';
import {
  TimeDiv, UpdateDiv, UserName, Tag,
} from './Style';
import { getUser } from '../../Services/Axios/userServices';
import { getCategories } from '../../Services/Axios/demandsServices';
import { useProfileUser } from '../../Context';
import ModalHistory from '../ModalHistory';

const DemandHistory = ({ show, handleClose, demand }) => {
  const [users, setUsers] = useState([]);
  const { startModal } = useProfileUser();
  const history = useHistory();
  const [categories, setCategories] = useState([]);

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

  const dictionaryDemand = (wordChanged) => {
    if (wordChanged === 'name') {
      return 'nome';
    }
    if (wordChanged === 'description') {
      return 'descrição';
    }
    if (wordChanged === 'category') {
      return 'categoria';
    }
    if (wordChanged === 'process') {
      return 'processo';
    }
    if (wordChanged === 'created') {
      return 'criada';
    }
    return wordChanged;
  };

  const titleDemand = (label) => {
    if (label === 'created') {
      return ' - Demanda ';
    }
    return ' - Atualização de ';
  };

  const updateData = (update, label) => {
    if (label === 'category') {
      const findedCategory = categories?.filter((category) => category?._id === update);
      return (
        <Tag
          style={{ backgroundColor: findedCategory[0]?.color, color: 'white' }}
          key={findedCategory[0]?._id}
        >
          {findedCategory[0]?.name}
        </Tag>
      );
    }
    return update;
  };

  const showHistory = () => demand?.demandHistory.map((updateDemand) => {
    const findedUser = users?.filter((user) => user?._id === updateDemand.userID);

    return (
      <TimelineItem style={{ marginLeft: '8%' }}>
        <TimelineOppositeContent style={{ display: 'none' }} />
        <TimelineSeparator>
          <TimelineDot style={{ backgroundColor: colors.primary }} />
          <TimelineConnector style={{ backgroundColor: colors.navHeaders }} />
        </TimelineSeparator>
        <TimelineContent style={{ width: '100%' }}>
          <TimeDiv>
            {format(new Date(updateDemand.date), 'dd/MM/yyyy')}
            {titleDemand(updateDemand.label)}
            {dictionaryDemand(updateDemand.label)}
            {' por '}
            <UserName onClick={() => history.push('/usuarios')}>
              {findedUser[0]?.name}
            </UserName>
          </TimeDiv>
          <UpdateDiv>
            {updateDemand.before && (
              <p style={{ color: 'red', display: 'flex' }}>
                {'Removido: '}
                {updateData(updateDemand.before, updateDemand.label)}
              </p>
            )}
            {updateDemand.after && (
              <p style={{ color: '#5289B5', display: 'flex' }}>
                {'Adicionado: '}
                {updateData(updateDemand.after, updateDemand.label)}
              </p>
            )}
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
