import styled from 'styled-components';
import colors from '../../Constants/colors';

export const Demandbox = styled.div`
  width: 100%;
  height: 15%;
  font-size: 1vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

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

  width: 40%;
  height: 50%;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin-left: 10%;

`;

export const Line = styled.div` 
    width: 80%;
    height: 1px;
    background-color: ${colors.primary};
    align-self: center;
    margin: 10px;
`;
