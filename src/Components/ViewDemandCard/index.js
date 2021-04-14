// import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { BsPencil } from 'react-icons/bs';
import colors from '../../Constants/colors';
import {
  Card, TopSide, DemandName, EditIcon,
  DemandDescription, BottomSide, ProcessNumber,
  CreatedAt,
} from './Style';

const ViewDemandCard = ({ demand }) => (

  <Card>
    <TopSide>
      <DemandName>
        {demand.name}
      </DemandName>
      <EditIcon>
        <Link
          to="/"
          id={demand._id}
          style={{ color: colors.primary, textDecorationLine: 'none' }}
        >
          <BsPencil />
        </Link>
      </EditIcon>
    </TopSide>
    <DemandDescription>
      {demand.description}
    </DemandDescription>
    <BottomSide>
      <ProcessNumber>
        Nº do Processo:
        {demand.process}
      </ProcessNumber>
      <CreatedAt>
        {/* {format(new Date(demand.createdAt), 'dd/MM/yyyy')} */}
        01/04/2021
      </CreatedAt>
    </BottomSide>
  </Card>

);

export default ViewDemandCard;
