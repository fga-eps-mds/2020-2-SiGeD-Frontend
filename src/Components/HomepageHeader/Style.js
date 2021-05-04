import styled from 'styled-components';
import { BiChevronRightCircle } from 'react-icons/bi';
import { IoAddCircle } from 'react-icons/io5';
import colors from '../../Constants/colors';

export const Main = styled.div`
  display: flex;
  background-color: ${colors.secondary};
  width: 100%;
  height: 100%;
  border-radius: 12px;
  flex-direction: column;
  align-items: center;
  @media(max-width: 750px){
    display: none;
  }
`;

export const Title = styled.p`
  padding: 10px 15px 15px 15px;
  margin-bottom: 0px;
  height: 100%;
  font-size: 140%;
  
`;

export const Icon = styled(BiChevronRightCircle)`
  height: 22px;
  width: 22px;
  color: ${colors.primary};
  cursor: pointer;
`;

export const TopSide = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftTopSide = styled.div`
  width:100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

export const BottomSide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const AddIcon = styled(IoAddCircle)`
  height: 30px;
  width: 30px;
  color: ${colors.primary};
  cursor: pointer;
  margin-right: 15px;
  display: ${(props) => `${props.RightIconDisplay}`};
`;
