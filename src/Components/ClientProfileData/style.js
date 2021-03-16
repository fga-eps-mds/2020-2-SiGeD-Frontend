import styled from 'styled-components';
import colors from '../../Constants/colors';

export const ClientDataBox = styled.div`

    width: 100%;
    height: 20%;
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 5px;
    border-radius: 10px;
    justify-content: space-around;
    font-size: 0.8vw;

`;

export const TableContent = styled.div`

    height: 100%;
    width: ${(props) => `${props.width}%`};
    font-size: 150%;
    display: flex;
    justify-content: ${(props) => `${props.justifyContent}`};
    align-items: center;
    background-color: ${colors.secondary};
    border-radius: 10px;

`;

export const Personalbox = styled.div`
  width: 100%;
  height: 10%;
  font-size: 1vh;
  background-color: ${colors.secondary};
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  overflow: auto;
`;

export const P = styled.p`
  font-size: 1.5vh;
  margin-block-end: 0;
  margin-block-start: 0;
  @media(max-width: 600px) {
    font-size: 1.3vh;
  }
`;

export const Name = styled(P)`
  border-radius: 12px;
  padding: 2%;
  text-align: center;
  color: ${colors.secondary};
  background-color: ${(props) => `${props.color}`};
`;

// Caixa de opcoes
export const Box = styled.div`
  background-color: #FFF;
  border: 1px solid black;
  border-radius: 12px;
  position: relative;
  width: 12vh;
  right: 0;
  top: 65%;
  z-index: 1;
`;

export const Ul = styled.ul`
  listStyleType: none;
  padding-inline-start: 0;
  margin: 0;
`;

export const Li = styled.li`
  list-style-type: none;
  padding: 3px;
`;

export const Icon = styled.div`
  float: right;
  margin-top: 5%;
  font-size: 100%;
`;

export const Button = styled.button`
  border: none;
  background-color: white;
  color: black;
  font-size: 1.5vh;
  font-weight: bold;
  border-radius: 10px;
`;

export const Content = styled.div`
  position: relative;
`;
