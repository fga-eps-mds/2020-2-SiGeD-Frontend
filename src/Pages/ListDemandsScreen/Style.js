import styled from 'styled-components';
import colors from '../../Constants/colors';

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: ${colors.background};
  width: 100vw;
  height: 100vh;
  @media(max-width: 750px){
    height: max-content;
    background-color: ${colors.secondary};
  }
`;

export const ScreenContainer = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  @media(max-width: 750px){
    height: 100%;
    margin-top: 0%;
  }
`;

export const ScreenHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media(max-width: 750px){
    margin-bottom: 200px;
    height: max-content;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ScreenTitle = styled.h2`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 4vh;
  margin: 0;
  margin-bottom: 7vh;
  @media(max-width: 750px){
    width: 25%;
    margin-top: 10vh;
    margin-bottom: 1vh;
  }
`;

export const ScreenContentBox = styled.div`
  width: 100%;
  height: 45%;
  box-sizing: border-box;
  border-radius: 0.5rem;
  margin: 1% auto;
  overflow: hidden;
  @media(max-width: 750px){
    height: max-content;
    box-sizing: border-box;
    border-radius: 0.5rem;
    overflow: auto;
  }
`;

export const ScreenSearch = styled.div`
  float: left;
  width: 35%;
  @media(max-width: 750px){
    width: 90%;
  }
`;

export const ScreenList = styled.div`
  height: 50vh;
  padding: 5px;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  @media(max-width: 750px){
    height: max-content;
    flex-direction: column;
  }
`;

export const Dropdown = styled.div`
  width: 500px;
  height: 50px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  margin: 1%;
  @media(max-width: 750px){
    width: 100%;
    height: 50px;
    float: none;
    justify-self: center;
    margin-top: 5%;
    flex-direction: column;
  }
`;

export const DropdownField = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => `${props.width}%`};
  @media(max-width: 750px) {
    width: 100%;
  }  
`;
