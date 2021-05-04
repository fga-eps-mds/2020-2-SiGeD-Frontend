import styled from 'styled-components';
import { BiChevronRightCircle } from 'react-icons/bi';
import colors from '../../Constants/colors';

export const Main = styled.div`
  width: 90%;
  height: 18%;
  margin: 1.5%;
  border-radius: 12px;
  border: 2px solid black;
  display: flex;
  justify-content: space-between;
`;

export const SectorName = styled.p`
  margin-bottom: 0px;
  height: 100%;
  font-size: 100%;
  padding: 1% 0 0 2%;
  
`;

export const Icon = styled(BiChevronRightCircle)`
  height: 26px;
  width: 25px;
  color: ${colors.primary};
  cursor: pointer;
  padding: 1% 1% 0 0;
`;
