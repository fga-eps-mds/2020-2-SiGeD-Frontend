import styled from 'styled-components';
// import { IoPersonCircleOutline } from 'react-icons/io5';
import colors from '../../Constants/colors';

export const RightBox = styled.div` 

    width: 70%;
    height: 100vh;
    background-color: ${colors.secondary};
    display: flex;
    align-items: center;
    flex-direction: column;

    @media(max-width: 720px){
    
    }
`;

export const Label = styled.div`

    width: 100%;
    height: 25%;
    background-color: blue;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    align-items: center;


`;

export const ContentBox = styled.div`

    width: 100%;
    height: 75%;
    background-color: green;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const Header = styled.div`

    width: 80%;
    height: 10%;
    background-color: #222222;
    justify-content: space-around;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 20px 20px 0px 0px;

`;

export const Bar = styled.div`

    width: 0.5%;
    height: 70%;
    background-color: ${colors.secondary};
    border-radius: 10px 10px 10px 10px;

`;

export const DemandsList = styled.div`

    width: 80%;
    height: 90%;
    background-color: ${colors.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: scroll;

`;
