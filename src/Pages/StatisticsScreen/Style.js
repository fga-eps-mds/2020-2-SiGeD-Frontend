import styled from 'styled-components';
import colors from '../../Constants/colors';

export const Main = styled.div`
  display: flex;
  background-color: ${colors.background};
  width: 100vw;
  height: 100vh;
  overflow: auto;
  @media(max-width: 750px){
    height: max-content;
  }
`;

export const Container = styled.div`
  height: 95vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  align-items: center;

  @media(max-width: 750px){
    height: 100vh;
    margin-top: 55px;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 750px){
    height: max-content;
    width: 85%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    justify-self: center;
    align-self: center;
  }
`;

export const Title = styled.h2`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 4vh;

  @media(max-width: 750px){
  }
`;

export const ButtonDiv = styled.div`
  float: right;
  width: 150px;
  height: 50px;
  border-radius: 15px;

  @media(max-width: 750px){
    width: 50%;
    height: 100%;
    float: none;
    margin-left: 10px;
}
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 45%;
  box-sizing: border-box;
  border-radius: 0.5rem;
  margin: 1% auto;
  overflow: hidden;

  @media(max-width: 750px){
    width: 100%;
    height: max-content;
    box-sizing: border-box;
    border-radius: 0.5rem;
    margin-top: 20px;
    margin: 1% auto;
    overflow: auto;
  }
`;

export const Search = styled.div`
  float: left;
  height: 50px;

  @media(max-width: 750px){
    width: 50%;
  }
`;

export const TableHeader = styled.div`
  background-color: ${colors.navHeaders};
  color: ${colors.secondary};
  height: 5vh;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media(max-width: 750px){
    visibility: hidden;
  }
`;

export const P = styled.div`
  color: ${colors.secondary};
  font-size: 2vh;

  @media(max-width: 750px){
    font-size: 1.6vh;
  }
`;

export const Bar = styled.div`
  width: 0.05%;
  height: 35%;
  border-radius: 3px;
  background-color: ${colors.secondary};
`;

export const TableTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: ${(props) => `${props.width}%`}
`;

export const List = styled.div`
  height: 50vh;
  padding: 5px;
  overflow: auto;

  @media(max-width: 750px){
    height: max-content;
    padding: 5px;
    overflow: auto;
  }
`;

export const DropDiv = styled.div`
  display: flex;
  width: 475px;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 750px){
    height: max-content;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Card = styled.div`

  display: flex;
  flex-direction: column;
  width: 700px;
  height:400px;
  border-radius:15px;
  border: 2px solid black;
  margin: 10px;
  justify-content: space-evenly;

  @media(max-width: 750px){
    justify-content: space-between;
  }

`;

export const CardTitle = styled.h2`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 3vh;
  margin: 20px;

  @media(max-width: 750px){
    width: 100%;
    height:10%;
    margin: 10px;
    font-size: 3vh;

  }
`;

export const TopDiv = styled.div`
  height: 25%;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media(max-width: 750px){

  }
`;

export const MiddleDiv = styled.div`
  height: max-content;
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media(max-width: 750px){
    justify-content: center;
  }
`;

export const BottomDiv = styled.div`
  height: 10%;
  width: 90%;
  padding: 10px;
  display: flex;
  align-items: center;

  @media(max-width: 750px){

  }
`;

export const FiltersDiv = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  
  @media(max-width: 750px){

  }
`;

export const DropdownDiv = styled.div`
  height: max-content;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin: 10px;
  
  @media(max-width: 750px){

  }
`;

export const DataDiv = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  justify-self: flex-end;
  @media(max-width: 750px){

  }
`;

export const BoldText = styled.h2`
  font-weight: bold;
  font-size: large;
  margin-bottom: 0;
  
  @media(max-width: 750px){

  }
`;

export const TextDiv = styled.p`
  width: 100%;
  height: 25%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  
  @media(max-width: 750px){

  }
`;