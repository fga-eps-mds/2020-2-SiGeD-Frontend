import styled from 'styled-components';
import colors from '../../Constants/colors';

export const Sidebar = styled.div`
    width: 30%;
    height: 100%;
    background: ${colors.navHeaders};
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    font-family: Montserrat;
    @media(max-width: 750px){
        width: 100%;
        height: 100%;
        align-content: center;
        flex-direction: column;
        display:flex;
    }
`;

export const SidebarText = styled.div`
    color: ${colors.secondary};
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0% 5% 0% 5%;
    word-break: break-word;
    @media(max-width: 750px){
        font-size: 2vh;
    }
`;

export const SidebarCardText = styled.div`

    color: ${colors.secondary};
    font-size: 3vh;
    text-align: center;
    @media(max-width: 750px){
        font-size: 2vh;
        margin-bottom: 0px;
    }

`;

export const Img = styled.img`
    border-radius: 50%;
    width: 87%;
    height: auto;
    margin: 0 0 0 1px;
    align-content: center;
    justify-content: center;
    @media(max-width: 750px){
        width: 30%;
        height: 100%;
        padding: 2% 0 0 0;
        margin: 4% 0 0 0;
    }

`;

export const ImageUser = styled.div`
  width: 3vw;
  height: 100%;
  margin-left: 0.5rem;
  @media(max-width:750px){
    width: 30%;
    padding: 2%;
    height: 50vh;
    margin-left: 0;
    background-color: ${colors.primary};
  }
`;

export const SidebarFooter = styled.div`

    color: ${colors.secondary};
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    font-size: 2vh;
    text-align: center;
    padding: 0% 5% 5% 5%;
    word-break: break-word;

    @media(max-width: 750px){
        height: 100%;
        font-size: 3vh;
        flex-direction: column;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 5%;
    }

`;

export const FooterText = styled.div`

    color: ${colors.secondary};
    font-size: 2vh;
    text-align: center;
    @media(max-width: 750px){
        font-size: 2vh;
        
    }

`;

export const SidebarTitle = styled.div`

    color: ${colors.secondary};
    margin-top: 10vh;
    font-size: 30px;
    text-align: center;
    padding: 5%;
    @media(max-width: 750px){
        margin-top: 7vh;
        font-size: 3vh;
        padding: 0%;
        margin-top: 10vh;
    }
`;

export const TextButtom = styled.div`

    color: ${colors.primary};
    font-size: 2vh;
    text-align: center;
    text-decoration: underline;
    cursor: pointer;

    @media(max-width: 750px){
        font-size: 2vh;
        
    }
`;
