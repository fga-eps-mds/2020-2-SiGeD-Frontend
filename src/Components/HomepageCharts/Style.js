import styled from 'styled-components';
import { BiChevronRightCircle } from 'react-icons/bi';
import colors from '../../Constants/colors';

export const Main = styled.div`
  display: flex;
  background-color: ${colors.background};
  border: 2px solid black;
  border-radius: 12px;
  width: 60vw;
  height: 50vh;
//   margin: 2%;
  margin-top: 20vh;
  margin-left: 5vh;
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
  overflow: auto;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 365px; 
   height:200px;
  border-radius:15px;
  border: 2px solid black;
  margin: 10px;
  justify-content: space-evenly;

`;

export const ChartsDiv = styled.div`
  height: max-content;
  width: max-content;
  display: flex;
  justify-content: space-between;

`;

export const Title = styled.p`
  padding: 15px 20px 15px 20px;
  margin-bottom: 0px;
  height: 100%;
  font-size: 40px;

`;

export const Icon = styled(BiChevronRightCircle)`
  height: 30px;
  width: 30px;
  color: ${colors.primary};
  cursor: pointer;
`;

export const TopSide = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
