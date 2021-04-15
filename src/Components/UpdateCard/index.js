import moment from 'moment-timezone';
import { Link } from 'react-router-dom';
import { BsPencil } from 'react-icons/bs';
import { BiTrash, BiLockAlt } from 'react-icons/bi';
import colors from '../../Constants/colors';
import {
  Card, TopSide, DemandName, EditIcon,
  DemandDescription, BottomSide, CreatedAt, UserIcon,
  LockIcon, TrashIcon, IconsContainer,
} from './Style';

const UpdateCard = ({ demand, sector }) => {
  const sectorName = sector?.filter((sectorByID) => sectorByID?._id === demand.userSector);
  return (
    <Card>
      <TopSide>
        <div style={{ display: 'flex', width: '70%' }}>
          <UserIcon />
          <DemandName>
            {demand.userName}
            (
            {sectorName[0]?.name}
            )
          </DemandName>
        </div>
        <IconsContainer>
          <LockIcon>
            <BiLockAlt style={{ marginRight: '10px', color: 'black' }} />
          </LockIcon>
          <EditIcon>
            <Link
              to="/"
              id={demand._id}
              style={{ color: colors.primary, textDecorationLine: 'none' }}
            >
              <BsPencil style={{ marginRight: '10px' }} />
            </Link>
          </EditIcon>
          <TrashIcon>
            <BiTrash style={{ marginRight: '5px', color: 'red' }} />
          </TrashIcon>
        </IconsContainer>
      </TopSide>
      <BottomSide>
        <DemandDescription>
          {demand.description}
        </DemandDescription>
        <CreatedAt>
          { moment.parseZone(demand.updatedAt).local(true).format('DD/MM/YYYY HH:mm:ss')}
        </CreatedAt>
      </BottomSide>
    </Card>

  );
};

export default UpdateCard;
