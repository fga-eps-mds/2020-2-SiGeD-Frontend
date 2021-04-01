import styled from 'styled-components';
import colors from '../../Constants/colors';

export const Card = styled.div`
    width: 90%;
    height: max-content;
    background-color: ${colors.secondary};
    border-radius: 15px;
    border: 1.5px solid black;
    padding: 3%;
    justify-content: center;
`;

export const TopSide = styled.div`
    height: max-content;
    display: flex;
    justify-content: space-between;
`;

export const DemandName = styled.div`
    width: 70%;
    height: max-content;
    text-align: left;
    font-size: 30px;
`;

export const EditIcon = styled.div`
  float: right;
  margin: 0 1%;
  font-size: 150%;
`;

export const DemandDescription = styled.div`
    font-size: 20px;
    width: 70%;
    text-align: left;
    margin-top: 2%;
`;

export const BottomSide = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2%;
    margin-bottom: 2%;
`;

export const ProcessNumber = styled.div`
    font-size: 20px;
    width: 70%;
    text-align: left;
`;

export const CreatedAt = styled.div`
    text-align: right;
    font-size: 20px;

`;
