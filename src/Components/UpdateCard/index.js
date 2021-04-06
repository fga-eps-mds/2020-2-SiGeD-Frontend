import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { BsPencil } from 'react-icons/bs';
import { BiTrash, BiLockAlt } from 'react-icons/bi';
import colors from '../../Constants/colors';
import {
  Card, TopSide, DemandName, EditIcon,
  DemandDescription, BottomSide, CreatedAt, UserIcon,
} from './Style';

const UpdateCard = ({ demand }) => (
  <Card>
    <TopSide>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <UserIcon />
        <DemandName>
          {demand.userName}
        </DemandName>
      </div>
      <EditIcon>
        <Link
          to="/"
          id={demand._id}
          style={{ color: colors.primary, textDecorationLine: 'none' }}
        >
          <BiLockAlt style={{ marginRight: '10px', color: 'black' }} />
          <BsPencil style={{ marginRight: '10px' }} />
          <BiTrash style={{ marginRight: '5px', color: 'red' }} />
        </Link>
      </EditIcon>
    </TopSide>
    <BottomSide>
      <DemandDescription>
        {demand.description}
      </DemandDescription>
      <CreatedAt>
        { format(new Date(demand.updatedAt), 'dd/MM/yyyy')}
      </CreatedAt>
    </BottomSide>
  </Card>

);

export default UpdateCard;
