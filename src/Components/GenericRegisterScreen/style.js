import styled from 'styled-components';
import colors from '../../Constants/colors';

export const Main = styled.div` 
    width: 100vw;
    height: 100vh;
    background-color: #BFBFBF;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    @media(max-width: 720px){
    
    }
`;

export const Container = styled.div`
    width: 80%;
    height: 70%;
    background: ${colors.secondary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
    border-radius: 1.5vw;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media(max-width: 720px){
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 10vh;
    }
`;

export const RightSideContainer = styled.div`
    width: 100%;
    height: 100%;
    background: ${colors.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    @media(max-width: 720px){
        width: 100%;
        height: 100%;
    }
`;

export const ColumnText = styled.div`
    width: 90%;
    height: 70%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
    @media(max-width: 720px){
        align-items: center;
        width: 90%;
        height: 80%;
        justify-content: space-between;
        align-content: center;
    }
`;

export const DivButtom = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-right: 10%;
    margin-top: 10%;
    margin-bottom: 3%;
    flex-direction: row;
    @media(max-width: 720px){
        height: 20%;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        align-content: space-around;
        margin-left: 10%;
    }
`;

export const InputLine = styled.div`
    width: 100%;
    height: 10%;
    @media(max-width: 720px){
    
    }
`;
