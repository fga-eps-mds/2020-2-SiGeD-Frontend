import styled from 'styled-components';

export const Main = styled.div`
    height: 100vh;
    width: 100%
    background-color: red;
    display: flex;
    overflow: hidden;
    @media(max-width: 750px){
        overflow: auto;
        flex-direction: column;
    }
`;

export const CardsContainer = styled.div`
    margin-top: 15vh;
    width: 65%;
    height: 100%;
    justify-content: center;
    display: flex;
    @media(max-width: 750px){
        width: 100%;
        height: min-content;
    }
`;
