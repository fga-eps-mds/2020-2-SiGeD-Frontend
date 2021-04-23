import styled from 'styled-components';
import colors from '../../Constants/colors';

export const Title = styled.div`
    font-family: Montserrat;
    font-size: 30px;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const BackgroundContainer = styled.div` 
  width: 100vw;
  height: 100vh;
  background-color: ${colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media(max-width: 750px){
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const CenterContainer = styled.div`
    width: 55vh;
    height: 55vh;
    background-color: ${colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #FFFFFF;
    border: 3px solid #1F3541;
    box-sizing: border-box;
    border-radius: 15px;
    margin-top: 15vh;
    margin-bottom: 10vh;

    @media(max-width: 750px){
    width: 100vw;
    box-shadow: 0;
    border-radius: 0;
  }
`;

export const InputDiv = styled.div`
  border: 2px solid #1F3541;
  box-sizing: border-box;
  border-radius: 10px;
  width: 77%;
  height: 5vh;
  margin: 6px;
  outline: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: Montserrat;
`;

export const InputIcon = styled.div`
  height: 50%;
  display: flex;
  margin-left: 0%;
`;

export const Input = styled.input`
  outline: 0;
  width: 80%;
  display: flex;
  border: none;
  margin-left: 5%;
`;
