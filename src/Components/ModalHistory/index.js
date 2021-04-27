import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import {
  TimelineOppositeContent, TimelineItem, TimelineSeparator,
  TimelineConnector, TimelineContent, TimelineDot,
} from '@material-ui/lab';
import colors from '../../Constants/colors';
import { TimeDiv, UpdateDiv, UserName } from './Style';
import { getUser } from '../../Services/Axios/userServices';
import { useProfileUser } from '../../Context';

const ModalHistory = ({
  show, handleClose, client,
}) => {
  const { startModal } = useProfileUser();
  const [users, setUsers] = useState([]);
  const history = useHistory();

  const getUserFromApi = async () => {
    await getUser('users', startModal)
      .then((response) => setUsers(response.data));
  };

  useEffect(() => {
    getUserFromApi();
  }, []);

  const dictionary = (word) => {
    if (word === 'address') {
      return 'endereço';
    } if (word === 'name') {
      return 'nome';
    } if (word === 'office') {
      return 'cargo';
    } if (word === 'cpf') {
      return 'CPF';
    } if (word === 'phone') {
      return 'telefone';
    } if (word === 'location') {
      return 'lotação';
    } if (word === 'secondaryPhone') {
      return 'telefone secundário';
    } if (word === 'created') {
      return 'criação';
    }
    return word;
  };

  const showHistory = () => client?.history.map((update) => {
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
            <UserName
              onClick={() => history.push('/usuarios')}
            >
              {findedUser[0]?.name}
            </UserName>
          </TimeDiv>
          <UpdateDiv>
            <p style={{ color: 'red' }}>
              {'Antes: '}
              {update.before}
            </p>
            <p style={{ color: 'blue' }}>
              {'Depois: '}
              {update.after}
            </p>
          </UpdateDiv>
        </TimelineContent>
      </TimelineItem>
    );
  });

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Histórico de alterações de dados</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {showHistory()}
      </Modal.Body>
    </Modal>
  );
};

export default ModalHistory;
