import styled from 'styled-components';
import { BiStopwatch } from 'react-icons/bi';
import { FormControlLabel } from '@material-ui/core';
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
    justify-content: center;
    padding: 2%;
    background-color: ${colors.secondary};
`;

export const WatchIcon = styled(BiStopwatch)`
    height: initial;
    width: 80px;
    margin-right: 2%;
    @media(max-width: 750px){
        width: 120px;
    }
`;

export const AlertAbout = styled.div`
    width: 100%;
`;

export const AlertDemandName = styled.p`
    height: max-content;
    width: 100%;
    margin-bottom: 0px;
    flex-wrap: wrap;
    word-break: break-word;
    color: ${colors.primary};
    font-weight: bold;
`;

export const AlertName = styled.p`
    margin-bottom: 0px;
    width: 100%;
    flex-wrap: wrap;
    word-break: break-word;
    overflow: auto;
    font-weight: bold;
    height:max-content;
`;

export const AlertDate = styled.p`
    margin-bottom: 0px;
    width: max-content;
    justify-content: flex-end;
`;

export const AlertDescription = styled.p`
    margin-bottom: 0px;
    width: 100%;
`;

export const AlertRightSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const AlertFormControlLabel = styled(FormControlLabel)`
    justify-content: center;
    width: 100%;
    margin: 0px;
    background-color: red;
`;
