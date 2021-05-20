import styled from 'styled-components';
import { MdAddAPhoto } from 'react-icons/md';
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
        height: 30vh;
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

export const Icon = styled(MdAddAPhoto)`
    width: 1000%;
    height: 30%;
    color: ${colors.secondary};
    margin-top: 10px;
    @media(max-width: 750px){
        width: 100%;
        height: 100%;
        color: ${colors.text};
    }
`;

export const ButtonPhoto = styled.button`
    background-color: ${colors.navHeaders};
    border: none;
    width: 80%;
    height: 30%;
    color: ${colors.secondary};
    margin-top: 50px;
    @media(max-width: 750px){
        background-color: white;
        width: 80%;
        height: 50%;
        color: ${colors.text};
        margin-top: 30px;
    }
`;

export const ChooseContainerPhoto = styled.div`
    background-color: ${colors.navHeaders};
    width: 50%;
    height: 60%;
    color: ${colors.secondary};
    margin-top: 20px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid;
    @media(max-width: 750px){
        background-color: white;
        width: 50%;
        height: 60%;
        color: ${colors.text};
    }
`;

export const InputPhoto = styled.input`
    width: 90%;
    height: 15%;
    color: ${colors.secondary};
    margin-top: 30px;
    display: flex;
    flex-direction: column;
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
    max-width:200px;
    max-height:150px;
    width: auto;
    height: auto;
    margin-top: 4%;
    @media(max-width: 750px){
        width: auto;
        height: 100%;
        padding: 2% 0 0 0;
        margin: 4% 0 0 0;
    }

`;

export const TopPart = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    @media(max-width: 750px){
        margin-top: 0%;
    }

`;
