import styled from 'styled-components';
import { MdAddAPhoto } from 'react-icons/md';
import colors from '../../Constants/colors';

export const Sidebar = styled.div`
    width: 40%;
    height: 100%;
    background: ${colors.navHeaders};
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    border-radius: 15px 0px 0px 15px;
    @media(max-width: 750px){
        width: 100%;
        height: 25vh;
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
    text-align: center;
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
    width: 150px;
    height: 150px;
    color: ${colors.secondary};
    margin-top: 15%;
    margin-bottom: 15%;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid;
    cursor: pointer;

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
    display: none;
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
    max-width:150px;
    max-height:150px;
    width: 150px;
    height: 150px;
    margin-top: 15%;
    margin-bottom: 15%;
    border-radius: 50%;
    cursor: pointer;
    @media(max-width: 750px){
        width: 150px;
        height: 150px;
        margin-bottom: 0%;
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
