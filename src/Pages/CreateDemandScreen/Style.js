import styled from 'styled-components';
import colors from '../../Constants/colors';

export const Main = styled.div` 

    width: 100vw;
    height: 100vh;
    background-color: ${colors.background};
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    // overflow-y: scroll;

    @media(max-width: 750px){
    
    }
`;

export const Container = styled.div` 

    width: 90%;
    height: 80%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    @media(max-width: 750px){
    
    }
`;

export const Label = styled.div` 

    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;

    @media(max-width: 750px){
    
    }
`;

export const ContentBox = styled.div` 

    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;

    @media(max-width: 750px){
    
    }
`;
