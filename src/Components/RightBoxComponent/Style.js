import { IoPersonCircleOutline } from 'react-icons/io5';
import styled from 'styled-components';
import colors from '../../Constants/colors';

export const RightBox = styled.div` 

    width: 35%;
    height: 100%;
    background-color: ${colors.navHeaders};
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;

    @media(max-width: 750px){
        margin-top: -48%;
        background-color: ${colors.secondary};
        width: 100%;
        height: 80%;
    }
`;

export const Line = styled.div` 

    width: 80%;
    height: 1px;
    background-color: ${colors.primary};
`;

export const ContentBox = styled.div`

    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: column;
    margin-top: 20%;
    align-items: center;

    @media(max-width: 750px){
        display: none;
    }
`;

export const NameDiv = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;


`;

export const PersonIcon = styled(IoPersonCircleOutline)`
    width: 30%;
    height: 60%;
    color: white;

    @media(max-width: 750px){
        display: none;
    }
`;
