import { IoAddCircle } from 'react-icons/io5';
import styled from 'styled-components';

export const AddCategory = styled.div`
  display: flex;
  width: 90%;
  height: 5%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 5vw;

  @media(max-width: 750px){
    margin-top: 7 %;
    padding: 8%;
  }
`;

export const AddIcon = styled(IoAddCircle)`
    width: 40%;
    height: 40%;
    color: white;

    @media(max-width: 750px){
      color: black;
      width: auto;
      height: auto;
    }
`;

export const CategoriesBox = styled.div`
  background-color: #FFFFFF;
  border: 2px solid black;
  border-radius: 12px;
  position: absolute;
  width: 25vw;
  height: 20vh;
  right: 3%;
  margin-top: 22vh;
  z-index: 1;
  overflow: hidden;

  @media(max-width: 750px){
    width: 90%;
    padding: 5px;
    overflow: auto;
  }
`;

export const List = styled.div`
  height: 100%;
  padding: 5px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 750px){
    height: max-content;
    padding: 5px;
    overflow: auto;
  }
`;

export const P = styled.p`
  color: white;
  margin-bottom: 0;
  margin-left: -4%;
  font-size: 1.5rem;
  @media(max-width: 750px){
    font-size: 120%;
    color: black;
  }
`;
