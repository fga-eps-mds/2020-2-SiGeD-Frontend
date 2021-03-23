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
    @media(max-width: 720px){
        width: 100%;
        height: 20%;
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
        color: ${colors.text};
    }
`;

export const SidebarFooter = styled.div`

    color: ${colors.secondary};
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;

    @media(max-width: 720px){
        visibility: hidden;
        height: 0%;
    }

`;
