import styled from 'styled-components';
import colors from '../../Constants/colors';

export const Main = styled.div`
  background-color: ${colors.background};
  width: 100vw;
  height: 94vh;
  padding: 1%;
  margin-top: 6vh;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  
`;

export const PageBox = styled.div`
  background-color: white;
  width: ${(props) => `${props.width}`};
  height: ${(props) => `${props.height}`};
  border: 2px solid black;
  border-radius: 12px;
  margin-left: 2%;
  margin-top: 2%;
  margin-right: 2%;
  margin-bottom: 2%; 
`;

export const ProfessionalPage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: collumn;
  flex-wrap: wrap;
`;
