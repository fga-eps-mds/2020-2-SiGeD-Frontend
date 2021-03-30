import { IoAddCircle } from 'react-icons/io5';
import styled from 'styled-components';

export const AddCategory = styled.div`
  display: flex;
  width: 90%;
  height: 5%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AddIcon = styled(IoAddCircle)`
    width: 40%;
    height: 40%;
    color: white;

    @media(max-width: 750px){
        
    }
`;
