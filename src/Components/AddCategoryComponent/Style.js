import { IoAddCircle } from 'react-icons/io5';
import styled from 'styled-components';

export const AddCategory = styled.div`
  display: flex;
  width: 100%;
  height: 5%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 750px){
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
  width: 26vw;
  height: 20vh;
  right: 3%;
  margin-top: 22vh;
  z-index: 1;
  overflow: hidden;
  margin-right: 3%;

  @media(max-width: 750px){
    width: 90%;
    padding: 5px;
    overflow: auto;
  }
`;

export const List = styled.div`
  height: 100%;
  padding: 5px;
  overflow-y: auto;
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
  margin-bottom: 0px;
  font-size: 1.5rem;
  margin-left: 10%;
  @media(max-width: 750px){
    font-size: 120%;
    color: black;
    margin-left: 3%;
  }
`;

export const P2 = styled.p`
  color: #5289B5;
  margin-bottom: 0px;
  font-size: 100%;
  margin-left: 10%;
`;

export const CreateCategory = styled.div`
  margin-right: 10%;
  align-items: center;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
