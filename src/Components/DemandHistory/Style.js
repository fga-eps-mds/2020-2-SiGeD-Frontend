import styled from 'styled-components';
import colors from '../../Constants/colors';

export const TimeDiv = styled.div`
    width: 100%;
    height: min-content;
    display: flex;
    flex-direction: row;

    @media(max-width: 750px){

    }
`;

export const UpdateDiv = styled.div`
    width: 100%;
    height: min-content;
    display: flex;
    flex-direction: column;
    font-weight: bold;

    @media(max-width: 750px){

    }
`;

export const UserName = styled.p`
    font-weight: bold;
    color: ${colors.primary};
    cursor: pointer;
    width: max-content;
    margin-left: 5px;

    @media(max-width: 750px){

    }
`;

export const Tag = styled.p`

  width: 40%;
  height: min-content;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1rem;
  word-break: break-word;
  margin-left: 10px;

  @media(max-width: 750px){
    
  }

`;
