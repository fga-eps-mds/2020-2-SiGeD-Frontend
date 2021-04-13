import styled from 'styled-components';
import colors from '../../Constants/colors';

export const Demandbox = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(max-width: 750px){
    width: 85%;
    height: 40%;
    margin: 0 auto;
    margin-bottom: 2vh;
    display: flex;
    flex-direction: column;
  }
`;

export const Tag = styled.div`

  width: 60%;
  height: 100%;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 100%;

`;

export const Line = styled.div` 
    width: 80%;
    height: 1px;
    background-color: ${colors.primary};
    align-self: center;
    margin: 10px;
`;
