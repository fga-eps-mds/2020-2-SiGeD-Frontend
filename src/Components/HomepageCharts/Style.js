import styled from 'styled-components';
import { BiChevronRightCircle } from 'react-icons/bi';
import colors from '../../Constants/colors';

export const Main = styled.div`
  display: flex;
  background-color: ${colors.secondary};
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  @media(max-width: 750px){
    display: none;
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  border-radius:15px;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 365px; 
  height:250px;
  border-radius:15px;
  border: 2px solid black;
  margin: 10px;
  justify-content: space-evenly;

`;

export const ChartsDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius:15px;
`;

export const Icon = styled(BiChevronRightCircle)`
  height: 30px;
  width: 30px;
  color: ${colors.primary};
  cursor: pointer;
`;
