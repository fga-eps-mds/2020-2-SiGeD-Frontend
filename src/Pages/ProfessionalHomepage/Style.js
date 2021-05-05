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
  @media(max-width: 750px){
    flex-direction: column;
    overflow-y: auto;
  }
  
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
  overflow-y: auto;
  @media(max-width: 750px){
    width: 96%;
    height: 16%;
    border: none;
    background-color: ${colors.primary};
  }
`;

export const ProfessionalPage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: collumn;
  flex-wrap: wrap;
  @media(max-width: 750px){
    display: contents;
  }
`;

export const ProfessionalDiv = styled.div`
  width: 60%;
  margin-right: 3%;
  margin-top: 1%;
  margin-bottom: 1%;
  @media(max-width: 750px){
    display: none;
  }
`;

export const BlankDiv = styled.div`
  background-color: ${colors.background};
  width: 100%;
  height: 3%;
  display: none;
  @media(max-width: 615px){
    display: flex;
  }
`;

export const ResponsovePageBox = styled.div`
  display: none;
  background-color: ${colors.primary};
  width: 96%;
  height: 16%;
  border: none;
  border-radius: 12px;
  margin-left: 2%;
  margin-top: 2%;
  margin-right: 2%;
  margin-bottom: 2%;
  @media(max-width: 750px){
    display: flex;
  }
`;
