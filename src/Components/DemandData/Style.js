import styled from 'styled-components';
import colors from '../../Constants/colors';

export const DemandCard = styled.div`
    height: 50%;
    width: 30%;
    background-color: ${colors.secondary};
    border-radius: 15px;
    margin-top: 1%;
    border: 1.5px solid black;
`;

export const DemandTitle = styled.div`
    height: 50%;
    width: 100%;
    font-size: 2.5vh;
    text-align: center;
    font-weight: bold;
    border-radius: 15px;
    margin-top: 5%;
`;

export const ClientName = styled.div`
    height: 10%;
    width: 100%;
    background-color: yellow;
    margin-top: 5%;
`;

export const SectorName = styled.div`
    height: 10%;
    width: 100%;
    background-color: gray;
`;

export const ProcessNumber = styled.div`
    height: 10%;
    width: 60%;
    background-color: green;
`;

export const DemandCreatedAt = styled.div`
    height: 10%;
    width: 30%;
    background-color: purple;
`;

export const CategoryField = styled.div`
    height: 40%;
`;
