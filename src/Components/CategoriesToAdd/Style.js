import styled from 'styled-components';
import colors from '../../Constants/colors';

export const Demandbox = styled.div`
  width: 100%;
  height: 10%;
  font-size: 1vh;
  background-color: green;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media(max-width: 750px){
    width: 85%;
    height: 40%;
    margin: 0 auto;
    margin-bottom: 2vh;
    display: flex;
    flex-direction: row;
  }
`;

export const Tag = styled.div`

  width: min-content;
  height: 100%;
  border-radius: 15px;

`;

export const Line = styled.div` 
    width: 80%;
    height: 1px;
    background-color: ${colors.primary};
    margin-top: 5px;
    margin-bottom: 5px;
`;
