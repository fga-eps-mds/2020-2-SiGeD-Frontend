import { IoPersonCircleOutline } from 'react-icons/io5';
import { BsPlusCircle, BsDashCircle } from 'react-icons/bs';
import { BiStopwatch } from 'react-icons/bi';
import styled from 'styled-components';
import colors from '../../Constants/colors';

export const RightBox = styled.div` 
    width: 35%;
    height: 100%;
    background-color: ${colors.navHeaders};
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    right: 0;
    color: white;
    @media(max-width: 750px){
        position: relative;
        width: 100%;
        height: max-content;
        border-radius: 0px 0px 15px 15px;
    }
`;

export const PlusButton = styled(BsPlusCircle)`
    visibility: hidden;
    @media(max-width: 750px){
        visibility: visible;
        height: 25px;
        width: 25px;
    }
`;

export const LessButton = styled(BsDashCircle)`
    visibility: hidden;
    @media(max-width: 750px){
        visibility: visible;
        height: 25px;
        width: 25px;
    }
`;

export const ButtonsDiv = styled.div`
    visibility: hidden;
    height: 0%;    
    @media(max-width: 750px){
        display: flex;
        visibility: visible;
        height: max-content;
        width: 100%;
        justify-content: flex-end;
    }
`;

export const MobileHeader = styled.div`
    visibility: hidden;
    color: ${colors.secondary};
    height: 0%;
    @media(max-width: 750px){
        visibility: visible;
        height: min-content;
        justify-content: flex-start;
        font-size: 120%;
        width: 100%;
    }
`;

export const Line = styled.div` 
    width: 80%;
    height: 1px;
    background-color: ${colors.primary};
    padding-bottom: 0.5%;
    @media(max-width: 750px){
        visibility: hidden;
        height: 0px;
    }
`;

export const CreatedBy = styled.div`
    height: max-content;
    width: 100%;
    font-size: 100%;
    padding-top: 2%;
`;

export const UserIcon = styled(IoPersonCircleOutline)`
    width: 60px;
    height: 60px;
    color: white;
    justify-content: flex-start;
`;

export const UserName = styled.div`
    text-align: center;
    display: flex;
    height: max-content;
    padding-right: 3%;
    align-items: center;
`;

export const UserP = styled.p`
    text-align: center;
    padding-left: 2%;
    margin-top: 5%;
`;

export const ContentBox = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
    align-items: center;
    padding: 5%;
    @media(max-width: 750px){
        margin-top: 5vh;
        height: min-content;
    }
`;

export const SelectionBox = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(max-width: 750px){
        margin-top: 0;
        height: min-content;
    }
`;

export const NameDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    font-size: 120%;
    font-weight: bold;
`;

export const PersonIcon = styled(IoPersonCircleOutline)`
    width: 100px;
    height: 100px;
    color: white;
`;

export const P = styled.div`
    margin-top: 20%;
    width: 100%;
    height: 100%;
    text-align: center;
    @media(max-width: 750px){
        margin-top: 8vh;
    }
`;

export const CategoryField = styled.div`
    width: 100%;
    height: 50%;
`;

export const CategoryName = styled.div`
    border-radius: 12px;
    padding: 1%;
    text-align: center;
    color: ${colors.secondary};
    font-size: 2vh;
    margin-block-end: 0;
    margin-block-start: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: 'Montserrat';
    width: 70%;
    height: 70%;
    margin: 3% 0 3% 0;
    @media(max-width: 750px){
        font-size: 80%;
        font-weight: 900;
        align-items: center;
        margin-left: 1vw;
    }
`;

export const AlertContainer = styled.div`
    width: 100%;
    height: 50%;
`;

export const AlertTitle = styled.p`
    width: 100%;
    height: min-content;
    margin-top: 5px;
`;

export const CreateAlertTitle = styled.p`
    height: 100%;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 100%;
    text-align: center;
`;

export const CreateAlertIcon = styled(BiStopwatch)`
    height: 35px;
    width: 35px;
`;

export const CreateAlertDiv = styled.div`
    background-color: ${colors.navHeaders};
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid ${colors.secondary};
    display: flex;
    flex-direction: row;
    cursor: pointer;
    align-items: center;
    padding: 5px;
    margin-top: 2%;
    justify-content: space-between;
    @media(max-width: 750px){
        margin-top: 0px;
    }
`;

export const TextButtom = styled.div`
    color: ${colors.primary};
    font-size: 2vh;
    text-align: center;
    text-decoration: underline;
    cursor: pointer;
    margin-top: 20px;

    @media(max-width: 750px){
        font-size: 2vh;
    }
`;

export const ListAlert = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 40%;
    @media(max-width: 750px){
        margin-top: 0px;
    }
`;
