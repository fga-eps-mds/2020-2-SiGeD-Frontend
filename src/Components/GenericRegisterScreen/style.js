import styled from 'styled-components';
import { IoPersonCircleOutline } from 'react-icons/io5';
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
    width: 65%;
    height: 60%;
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

export const Sidebar = styled.div`

    width: 30%;
    height: 100%;
    background: ${colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    @media(max-width: 720px){
        width: 100%;
        height: 20%;
        background-color: ${colors.secondary};
        align-content: center;
        justify-content: center;
   
    }
`;

export const RightSideContainer = styled.div`

    width: 70%;
    height: 80%;
    background: ${colors.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media(max-width: 720px){
        width: 100%;
        height: 80%;

    }
`;

export const ColumnText = styled.div`

    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    clear: both;
    overflow-y: scroll;
    margin-top: 10px;

    @media(max-width: 720px){
        align-items: center;
        width: 90%;
        height: 80%;
        justify-content: flex-start;
        align-content: center;
    }
`;

export const DivButtom = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-right: 10%;
    margin-top: 5%;
    flex-direction: row;
    @media(max-width: 720px){
        height: 20%;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        align-content: space-around;
        margin-right: 0%;
        
    }
`;

export const SidebarText = styled.div`

    color: ${colors.secondary};
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;

    @media(max-width: 720px){
        visibility: hidden;
        height: 0%;
    }

    p {
        font: Open Arial;
        font-size: 1.5vw;

    }
`;

export const Icon = styled(IoPersonCircleOutline)`

    width: 100%;
    height: 40%;
    color: ${colors.secondary};
    margin-top: 10px;

    @media(max-width: 720px){
        width: 100%;
        height: 100%;

        color: ${colors.primary};
    }
`;

export const InputLine = styled.div`

    width: 100%;
    height: 10%;

    @media(max-width: 720px){
    
    }
`;
