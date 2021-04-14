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
  font-size: 120%;
  width: 100%;
  outline: none;

  @media(max-width: 750px) {
    width: 100%;
    font-size: 100%;
  }
`;

export const InputField = styled.input`
  border: 2px solid black;
  border-radius: 8px;
  text-indent: 3px;
  font-size: 120%;
  outline: none;
  @media(max-width: 750px) {
    width: 100%;
    font-size: 100%;
  }
`;

export const FieldsDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  width: 65%;

  @media(max-width: 750px){
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 200%;
  margin-top: 15%;
  
  @media(max-width: 750px) {
    font-size: 200%;
    align-self: flex-start;
    margin-left: 5%;
    margin-top: 25%;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 10%;

  @media(max-width: 750px) {
    display: none;
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const P = styled.h1`
  display: inline-block;
  font-size: 120%;
  @media(max-width: 750px) {
  }
`;

export const InputsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3%;
  height: 10%;
  @media(max-width: 750px) {
    flex-direction: column;
    width: 90%;
    height: 30%;
    align-items: center;
    margin-top: 10%;
  }
`;

export const InputDiv = styled.div`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  outline: none;
  @media(max-width: 750px){
    width: 100%;
    height: 40%;
  }
`;

export const DescriptionDiv = styled.div`
  display: flex;
  height: 20%;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 5%;

  @media(max-width: 750px){
    align-items: flex-start;
    width: 90%;
    height: 40%;
  }
`;

export const PersonIcon = styled(IoPersonCircleOutline)`
    width: 30%;
    height: 60%;
    color: white;

    @media(max-width: 750px){
        
    }
`;

export const CenterDiv = styled.div`
  display: flex;
  height: 100%;
  width: 90%;
  flex-direction: column;

  @media(max-width: 750px){
    align-items: center;
  }
`;
