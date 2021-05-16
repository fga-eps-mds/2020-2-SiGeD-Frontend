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

border-radius: 12px;
padding: 2%;
text-align: center;
color: ${(props) => `${props.color}`};
background-color: ${(props) => `${props.backgroundColor}`};
font-weight: bold;

@media(max-width: 750px){
  font-weight: 900;
  font-size: 2vh;
}
`;

export const Line = styled.div` 
    width: 80%;
    height: 1px;
    background-color: ${colors.primary};
    align-self: center;
    margin: 10px;
`;
