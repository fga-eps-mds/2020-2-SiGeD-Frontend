import styled from 'styled-components';
import colors from '../../Constants/colors';

export const Main = styled.div`

    width: 100vw;
    height: 100vh;
    background-color: ${colors.secondary};
    display: flex;
    flex-direction: row;
    overflow: hidden;

    @media(max-width: 750px){
        flex-direction: column;
        overflow: auto;

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
    height: 20%;
`;

export const Footer = styled.div`
  display: none;
  align-items: flex-end;
  justify-content: flex-end;
  height: 0%;
  width: 100%;

  @media(max-width: 750px) {
    margin-top: 2%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    height: 10%;
  }
`;
