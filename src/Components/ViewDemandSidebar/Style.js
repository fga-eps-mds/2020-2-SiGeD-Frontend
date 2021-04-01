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
    margin-top: 10vh;
    align-items: center;
    padding: 5%;
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
    @media(max-width: 750px){
        
    }
`;

export const P = styled.div`
    margin-top: 20%;
    width: 100%;
    height: 100%;
    text-align: center;
    @media(max-width: 750px){
        
    }
`;
