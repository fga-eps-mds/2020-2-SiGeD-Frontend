import styled from 'styled-components';
import colors from '../../Constants/colors';

export const TimeDiv = styled.div`
    width: 100%;
    height: min-content;

    @media(max-width: 750px){

    }
`;

export const UpdateDiv = styled.div`
    width: 100%;
    height: min-content;
    display: flex;
    flex-direction: column;
    font-weight: bold;

    @media(max-width: 750px){

    }
`;

export const UserName = styled.p`
    font-weight: bold;
    color: ${colors.primary};
    cursor: pointer;

    @media(max-width: 750px){

    }
`;
