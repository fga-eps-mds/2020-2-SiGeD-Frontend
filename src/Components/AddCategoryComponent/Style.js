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
`;

export const AddIcon = styled(IoAddCircle)`
    width: 40%;
    height: 40%;
    color: white;

    @media(max-width: 750px){
        
    }
`;

export const CategoriesBox = styled.div`
  background-color: #FFFFFF;
  border: 2px solid black;
  border-radius: 12px;
  position: absolute;
  width: 25vw;
  height: 40vh;
  right: 3%;
  margin-top: 35%;
  z-index: 1;
`;

export const List = styled.div`
  height: 100%;
  padding: 5px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 750px){
    height: max-content;
    padding: 5px;
    overflow: auto;
  }
`;
