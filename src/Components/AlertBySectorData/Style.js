import styled from 'styled-components';
import { BiStopwatch } from 'react-icons/bi';
import colors from '../../Constants/colors';

export const AlertData = styled.div`
    height: max-content;
    width: 100%;
    background-color: ${colors.secondary};
    border-radius: 15px;
    border: 1.5px solid black;
    margin: 1.5% 1.5% 1.5% 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2%;
    background-color: yellow;
    @media(max-width: 750px){
        width: 100%;
    }
`;

export const WatchIcon = styled(BiStopwatch)`
    height: 90px;
    width: 250px;
    background-color: blue;
`;

export const AlertAbout = styled.div`
    height: 90px;
    width: 250px;
    background-color: blue;
`;

export const AlertDemandName = styled.div`
    height: 90px;
    width: 250px;
    background-color: blue;
`;

export const AlertName = styled.p`
    margin-bottom: 0px;
    width: 80%;
    flex-wrap: wrap;
    word-break: break-all;
    overflow: auto;
    background-color: green;
    @media(max-width: 750px){
        width: 100%;
    }
`;

export const AlertDate = styled.p`
    margin-bottom: 0px;
    width: max-content;
    background-color: red;
    @media(max-width: 750px){
        width: 100%;
    }
`;

export const AlertDescription = styled.p`
    margin-bottom: 0px;
    width: 30%;
    background-color: pink;
    @media(max-width: 750px){
        width: 100%;
    }
`;
