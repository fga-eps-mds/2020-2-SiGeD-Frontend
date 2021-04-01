import styled from 'styled-components';
import colors from '../../Constants/colors';

export const DemandCard = styled.div`
    height: max-content;
    width: 30%;
    background-color: ${colors.secondary};
    border-radius: 15px;
    margin-top: 1%;
    border: 1.5px solid black;
    margin: 1.5%;
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
    margin-top: 5%;
    margin-left: 1vw;
`;

export const SectorName = styled.div`
    height: 10%;
    width: 100%;
    margin-left: 1vw;
`;

export const ProcessNumber = styled.div`
    height: 10%;
    width: max-content;
    margin-left: 1vw;
`;

export const DemandCreatedAt = styled.div`
    height: 10%;
    width: min-content;
    margin-right: 1vw;
`;

export const CategoryField = styled.div`
    height: 40%;
    margin-left: 1vw;
    background-color: purple;
    
`;

export const CategoryName = styled.p`
  border-radius: 12px;
  padding: 2%;
  text-align: center;
  color: ${colors.secondary};
  background-color: ${(props) => `${props.color}`};
  font-size: 2vh;
  margin-block-end: 0;
  margin-block-start: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Montserrat';
  @media(max-width: 750px){
    font-size: 1.5vh;
    font-weight: 900;
    align-items: center;
    margin-left: 1vw;
  }
`;
