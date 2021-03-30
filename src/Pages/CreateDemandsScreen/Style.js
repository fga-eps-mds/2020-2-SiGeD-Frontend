import { IoPersonCircleOutline } from 'react-icons/io5';
import styled from 'styled-components';
import colors from '../../Constants/colors';

export const Main = styled.div`

    width: 100vw;
    height: 100vh;
    background-color: ${colors.secondary};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;

    @media(max-width: 750px){
        flex-direction: column;
        margin-top: 8vh;
    }

`;

export const RightBox = styled.div` 

    width: 35%;
    height: 100%;
    background-color: ${colors.navHeaders};
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;

    @media(max-width: 750px){
        width: 100%;
        height: 80%;
    }
`;

export const Line = styled.div` 

    width: 80%;
    height: 1px;
    background-color: ${colors.primary};
`;

export const ContentBox = styled.div`

    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    margin-top: 20%;
    align-items: center;
`;

export const NameDiv = styled.div`

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;


`;

export const DescriptionField = styled.textarea`
  font-family: Montserrat;
  border: 2px solid black;
  border-radius: 12px;
  text-indent: 3px;
  font-size: 90%;
  width: 100%;
  height: 100%;

  @media(max-width: 750px) {
    width: 100%;
  }
`;

export const InputField = styled.input`
  border: 2px solid black;
  border-radius: 12px;
  text-indent: 3px;
  font-size: 90%;
  @media(max-width: 1000px) {
    width: 100%;
    height: 50%;
  }
`;

export const FieldsDiv = styled.div`
  margin-top: 5%;
  height: 95%;
  margin-left: 2%;
  margin-right: 2%;
  display: flex;
  flex-direction: column;
  width: 65%;
`;

export const Title = styled.h1`
  font-size: 200%;
  padding: 5vh;

  @media(max-width: 800px) {
    font-size: 120%;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 4vh;

  @media(max-width: 750px) {
    align-items: center;
  }
`;

export const P = styled.p`
  display: inline-block;
  font-size: 120%;
  @media(max-width: 750px) {
    margin-top: 5%;
  }
`;

export const InputsDiv = styled.div`
  margin-left: 3vh;
  margin-right: 3vh;
  margin-top: -2vh;
  display: flex;
  justify-content: flex-start;
  @media(max-width: 800px) {
    flex-direction: column;
  }
`;

export const InputDiv = styled.div`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2vh;
`;

export const DescriptionDiv = styled.div`
  display: flex;
  height: 40%;
  flex-direction: column;
  justify-content: space-between;
  padding: 5vh;
`;

export const PersonIcon = styled(IoPersonCircleOutline)`
    width: 30%;
    height: 60%;
    color: white;

    @media(max-width: 750px){
        
    }
`;
