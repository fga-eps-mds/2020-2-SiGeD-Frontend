import { IoPersonCircleOutline } from 'react-icons/io5';
import styled from 'styled-components';

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
  outline: none;

  @media(max-width: 750px) {
    height: 30%;
    width: 100%;
  }
`;

export const InputField = styled.input`
  border: 2px solid black;
  border-radius: 8px;
  text-indent: 3px;
  font-size: 90%;
  outline: none;
  @media(max-width: 750px) {
    width: 80%;
    height: 50%;
  }
`;

export const FieldsDiv = styled.div`
  margin-top: 5%;
  height: 95%;
  display: flex;
  justify-content: flex-start;
  width: 65%;

  @media(max-width: 750px){
    width: 100%;
    heigth: 50%;
  }
`;

export const Title = styled.h1`
  font-size: 200%;
  
  @media(max-width: 750px) {
    font-size: 150%;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  @media(max-width: 750px) {
    display: none;
    flex-direction: column-reverse;
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
  display: flex;
  justify-content: flex-start;
  margin-top: 10%;
  @media(max-width: 750px) {
    flex-direction: column;
  }
`;

export const InputDiv = styled.div`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  outline: none;
  @media(max-width: 750px){

  }
`;

export const DescriptionDiv = styled.div`
  display: flex;
  height: 40%;
  flex-direction: column;
  justify-content: flex-start;
  @media(max-width: 750px){

  }
`;

export const PersonIcon = styled(IoPersonCircleOutline)`
    width: 30%;
    height: 60%;
    color: white;

    @media(max-width: 750px){
        
    }
`;

export const centerDiv = styled.div`
  display: flex;
  height: 100%;
  width: 90%;
  flex-direction: column;

  @media(max-width: 750px){
    width: 100%;
  }
`;
