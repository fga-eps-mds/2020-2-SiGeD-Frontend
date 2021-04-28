import styled from 'styled-components';
import colors from '../../Constants/colors';

export const AlertData = styled.div`
    height: max-content;
    width: 48.5%;
    background-color: ${colors.navHeaders};
    border-radius: 15px;
    border: 1.5px solid black;
    margin: 1.5% 1.5% 1.5% 0;
    textDecorationLine: 'none';
    @media(max-width: 750px){
        width: 100%;
    }
`;

export const AlertName = styled.p`
    margin-bottom: 0px;
    width: min-content;
    @media(max-width: 750px){
        width: 100%;
    }
`;
