import styled from 'styled-components';
import { TextareaAutosize } from '@material-ui/core';
import colors from '../../Constants/colors';

export const Card = styled.div`
    width: 90%;
    height: max-content;
    background-color: ${colors.secondary};
    border-radius: 15px;
    border: 1.5px solid black;
    padding: 2%;
    margin-bottom: 2%;
    justify-content: center;
    @media(max-width: 750px){
        width: 100%;
    }
`;

export const TopSide = styled.div`
    height: max-content;
    display: flex;
    justify-content: space-between;
`;

export const BottomSide = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 2%;
    width: 100%;
    @media(max-width: 750px){
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const TextareaComp = styled(TextareaAutosize)`
    width: 100%;
    border-radius: 15px;
    border: 2px solid black;
    resize: none;
    outline: none;
    text-indent: 5px;
`;

export const CheckboxContainer = styled.div`
    width: '100%';
    height: max-content;
    display: flex;

`;
