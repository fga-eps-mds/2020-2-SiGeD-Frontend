import styled from 'styled-components';
import colors from '../../Constants/colors';

export const Personalbox = styled.div`
  width: 100%;
  height: 10%;
  font-size: 1vh;
  background-color: ${colors.secondary};
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1vh;
  border-radius: 8px;
  overflow: auto;

  @media(max-width: 750px){
    width: 85%;
    height: 40%;
    margin: 0 auto;
    margin-bottom: 2vh;
    display: flex;
    flex-direction: row;
  }
`;

export const TableContent = styled.div`
  display: flex;
  justify-content: center;
  width: ${(props) => `${props.width}%`};
  margin: 10px;
  overflow: auto;

  @media(max-width: 750px){
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    word-break: break-all;
  }
`;

export const TableContainer = styled.div`

    @media(max-width: 750px){
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      margin-bottom: 0;
      padding: 2vh;
    }

    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const P = styled.p`
  font-size: 2vh;
  margin-block-end: 0;
  margin-block-start: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'Montserrat';
  @media(max-width: 750px){
    font-size: 1.5vh;
    align-items: center;
    margin-left: 1vw;
  }
`;

export const Name = styled(P)`
  border-radius: 12px;
  padding: 2%;
  text-align: center;
  color: ${(props) => `${props.color}`};
  background-color: ${(props) => `${props.backgroundColor}`};
  font-weight: bold;
  
  @media(max-width: 750px){
    font-weight: 900;
    font-size: 2vh;
  }
`;

export const Box = styled.div`
  background-color: #FFF;
  border: 1px solid black;
  border-radius: 12px;
  position: absolute;
  width: 15vh;
  right: 0;
  top: 65%;
  z-index: 1;

  @media(max-width: 750px){
    top: 25%;
    width: 10vh;
  }
`;

export const Ul = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
  margin: 0;
`;

export const Li = styled.li`
  list-style-type: none;
  padding: 3px;
`;

export const Icon = styled.div`
  font-size: 80%;
  color: ${(props) => `${props.color}`};
`;

export const Button = styled.button`
  border: none;
  background-color: #FFF;
  font-size: 1.5vh;
  color: ${(props) => `${props.color}`};
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media(max-width: 750px){
    font-size: 1.3vh;
  }
`;

export const Content = styled.div`
  position: relative;
`;

export const DotContent = styled.div`
display: flex;
justify-content: center;
width: ${(props) => `${props.width}%`};
margin: 10px;
overflow: auto;

@media(max-width: 750px){
  position: absolute;
  top: 5%;
  right: 11%;
  width: fit-content;
}
`;
