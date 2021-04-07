import styled from 'styled-components';

export const Main = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    overflow: auto;
    @media(max-width: 750px){
        overflow: auto;
        flex-direction: column;
    }
`;

export const CardsContainer = styled.div`
    margin-top: 15vh;
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media(max-width: 750px){
        width: 100%;
        height: min-content;
    }
`;

export const ButtonDiv = styled.div`
    display: flex;
    width: 25%;
    margin: 5%;
    padding-bottom: 5%;
    @media(max-width: 750px){
        width: 90%;
        display: none;
    }
`;

export const MobileButtonDiv = styled.div`
    display: none;
    @media(max-width: 750px){
        width: 90%;
        margin: 5%;
        display: flex;
    }
`;

export const TimelineDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media(max-width: 750px){
        display: none;
    }
`;

export const MobileTimeline = styled.div`
    display: none;
    @media(max-width: 750px){
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-bottom: 5%;
    }
`;

export const ForwardedDemandDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media(max-width: 750px){
        flex-direction: column;
    }
`;
