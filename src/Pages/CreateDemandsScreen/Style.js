import styled from 'styled-components';
import colors from '../../Constants/colors';

export const Main = styled.div`

    width: 100vw;
    height: 100vh;
    background-color: ${colors.secondary};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow:hidden;

    @media(max-width: 750px){
        flex-direction: column;
        margin-top: 8vh;
    }

`;

export const Label = styled.p`
    margin-top: 5%;
    margin-left: 10%;
    font-size: 1.5rem;
    align-self: flex-start;

`;

export const SearchDiv = styled.div`
    display: contents;
    padding: 5%;
    heigth: 20%;
`;

export const Footer = styled.div`
  display: none;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 4vh;
  width: 100%;

  @media(max-width: 750px) {
    margin-top: -15%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
`;
