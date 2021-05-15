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


`;

export const Img = styled.img`
    border-radius: 50%;
    width: 38%;
    height: auto;
    margin: 0 0 0 1px;
    align-content: center;
    justify-content: center;
    margin-left: 10%;
    @media(max-width: 750px){
        width: auto;
        height: 100%;
        padding: 2% 0 0 0;
        margin: 4% 0 0 0;
    }

`;

export const Name = styled.p` 
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 25px;
    width: max-content;
    margin-right: 5%;
`;

export const CenterName = styled.div` 
    width: 70%;
    height: 100%;
    margin-left: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;
