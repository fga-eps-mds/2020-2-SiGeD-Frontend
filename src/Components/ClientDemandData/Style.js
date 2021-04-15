import styled from 'styled-components';
import colors from '../../Constants/colors';

export const DemandDiv = styled.div`
    height: max-content;
    width: 48.5%;
    background-color: ${colors.secondary};
    border-radius: 15px;
    border: 1.5px solid black;
    margin: 1.5% 1.5% 1.5% 0;
    textDecorationLine: 'none';
    @media(max-width: 750px){
        width: 100%;
    }
`;

export const SectorNameDiv = styled.div`
    height: 10%;
    width: 100%;
    margin-left: 1vw;
    margin-bottom: 1.5%;
`;

export const CategoriesDiv = styled.div`
    height: 40%;
    background-color: ${colors.backgroundColor};
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    padding 1%;
`;

export const CategoryTag = styled.p`
  border-radius: 12px;
  padding: 1%;
  text-align: center;
  color: ${colors.secondary};
  background-color: ${(props) => `${props.color}`};
  font-size: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Montserrat';
  width: 30%;
  height: 30%;
  margin-right: 1.5%;
  margin-left: 1.5%;
  @media(max-width: 750px){
    font-size: 1.5vh;
    font-weight: 900;
    align-items: center;
    margin-left: 1vw;
  }
`;
