import styled from 'styled-components';
import colors from '../../Constants/colors';

export const AlertData = styled.div`
    height: max-content;
    width: 100%;
    background-color: ${colors.navHeaders};
    border-radius: 15px;
    border: 1.5px solid black;
    margin: 1.5% 1.5% 1.5% 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2%;
    @media(max-width: 750px){
        width: 100%;
    }
`;

export const AlertName = styled.p`
    margin-bottom: 0px;
    width: 80%;
    flex-wrap: wrap;
    word-break: break-all;
    overflow: auto;
    @media(max-width: 750px){
        width: 100%;
    }
`;

export const AlertDate = styled.p`
    margin-bottom: 0px;
    width: max-content;
    @media(max-width: 750px){
        width: 100%;
    }
`;

export const EditIcon = styled.div`
  float: right;
  font-size: 100%;
  width: 8%;
  margin-left: 5%;
  cursor: pointer;
  @media(max-width: 750px){
    font-size: 100%;
}
`;

export const TrashIcon = styled.div`
  float: right;
  font-size: 100%;
  width: 5%;
  cursor: pointer;
  @media(max-width: 750px){
    font-size: 100%;
}
`;
