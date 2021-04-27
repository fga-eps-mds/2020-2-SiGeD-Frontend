import styled from 'styled-components';
import { TextareaAutosize } from '@material-ui/core';

export const ButtonDiv = styled.div`
display: flex;
width: 40%;
margin: 5%;
@media(max-width: 750px){
    width: 90%;
    display: none;
}
`;

export const Input = styled.input`
width: 100%;
height: 40%;
display: flex;
border: 2px solid #000000;
border-radius: 9px;
font-size: 100%;
text-indent: 10px;
box-sizing: border-box;
outline: 0;
margin-bottom: 5%;
padding: 5px;

@media(max-width: 750px){
  width: 100%;
  height: 50%;
  font-size: 80%;
}
`;

export const InputDiv = styled.div`
  border: 2px solid #1F3541;
  box-sizing: border-box;
  border-radius: 10px;
  width: 100%;
  height: 5vh;
  margin: 6px;
  outline: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: Montserrat;
`;

export const TextareaComp = styled(TextareaAutosize)`
    width: 100%;
    border-radius: 9px;
    border: 2px solid black;
    resize: none;
    outline: none;
    text-indent: 5px;
`;

export const DropdownDiv = styled.div`
  height: max-content;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin: 10px;
  
  @media(max-width: 750px){
  }
`;

export const TextLabel = styled.p`
  width: 100%;
  height: 25%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  
  @media(max-width: 750px){

  }
`;

export const DateInput = styled.input`
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #000000;
  box-shadow: none !important;
  display: flex;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: white;
  outline: none;
  
  @media(max-width: 750px){

  }
`;

export const Title = styled.p`
  margin-bottom: 0;
`;

export const BottomSide = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
  
  @media(max-width: 750px){

  }
`;
