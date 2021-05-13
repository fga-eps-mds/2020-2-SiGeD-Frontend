import styled from 'styled-components';
import { IoPersonCircleOutline } from 'react-icons/io5';
import colors from '../../Constants/colors';

export const Sidebar = styled.div`
    width: 30%;
    height: 100%;
    background: ${colors.navHeaders};
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    @media(max-width: 750px){
        width: 100%;
        height: 20vh;
        background-color: ${colors.secondary};
        align-content: center;
        justify-content: center;
    }
`;

export const SidebarText = styled.div`
    color: ${colors.secondary};
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    font-family: Montserrat;
    @media(max-width: 750px){
        visibility: hidden;
        height: 0%;
    }
    p {
        font-family: 'Montserrat';
        font-size: 1.5vw;
    }
`;

export const Icon = styled(IoPersonCircleOutline)`
    width: 80%;
    height: 30%;
    color: ${colors.secondary};
    margin-top: 10px;
    @media(max-width: 750px){
        width: 100%;
        height: 100%;
        color: ${colors.text};
    }
`;

export const SidebarFooter = styled.div`

    color: ${colors.secondary};
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;

    @media(max-width: 750px){
        visibility: hidden;
        height: 0%;
    }

`;

export const Img = styled.img`
    border-radius: 50%;
    margin-top: 15px;
    width: 50%;
    height: auto;
    @media(max-width: 750px){
        width: auto;
        height: 100%;
        padding: 2% 0 0 0;
        margin: 4% 0 0 0;
    }

`;
