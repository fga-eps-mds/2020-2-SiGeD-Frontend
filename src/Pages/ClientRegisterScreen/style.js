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

    @media(max-width: 425px){
    
    }
`;

export const Container = styled.div`

    width: 65%;
    height: 60%;
    background: ${colors.secondary};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15vh;
    margin-bottom: 10vh;
    overflow: hidden;
    border-radius: 1.5vw;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media(max-width: 650px){
        width: 320px;
        flex-direction: column;
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

    @media(max-width: 650px){
        width: 100%;
        height: 40%;
   
    }
`;

export const RightBox = styled.div`

    width: 70%;
    height: 100%;
    background: ${colors.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow: hidden;

    @media(max-width: 650px){
        width: 100%;
        height: max-content;

   
    }
`;

export const ColumnText = styled.div`

    width: 70%;
    height: min-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
    clear: both;

    @media(max-width: 650px){
        align-items: center;
        width: 100%;
        height: max-content;
        justify-content: flex-start;
    }
`;

export const DivButtom = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    @media(max-width: 425px){
    
    }
`;

export const SidebarText = styled.div`

    color: ${colors.secondary};
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;

    @media(max-width: 425px){
    
    }

    p {
        font: Open Arial;
        font-size: 1.5vw;

    }
`;// talvez não precise

// export const sidebarDiv = styled.div`

//     font: Open Sans;
//     font-size: 1.5vw;
//     color: ${colors.secondary};
//     display: flex;
//     flex-wrap: wrap;
//     flex-direction: column;

//     @media(max-width: 425px){
//     }
// `;

export const Icon = styled(IoPersonCircleOutline)`

    width: 10vw;
    height: 10vw;
    color: ${colors.secondary};
    margin-top: 20%;
    margin-bottom: 8%;

    @media(max-width: 425px){
    
    }
`;

export const InputLine = styled.div`

    width: 100%;
    height: 10%;

    @media(max-width: 425px){
    
    }
`;
