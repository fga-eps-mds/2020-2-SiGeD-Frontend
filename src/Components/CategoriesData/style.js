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
  overflow: hidden;
`;

export const TableContent = styled.div`
  display: flex;
  justify-content: center;
  width: ${(props) => `${props.width}%`};
  margin: 10px;
`;

export const P = styled.p`
  font-size: 1.5vh;
  margin-block-end: 0;
  margin-block-start: 0;

  @media(max-width: 500px) {
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
  display: inline-block;
  position: fixed;
`;

export const Ul = styled.ul`
  listStyleType: none;
  padding-inline-start: 0;
  margin: 0;
`;

export const Li = styled.li`
  margin: 1vh;
  list-style-type: none;
`;

export const Icon = styled.div`
  float: right;
  margin: 0 1vh;
`;

export const Button = styled.button`
  border: none;
  background-color: #FFF;
  font-size: 1.3vh;
`;
