import styled from 'styled-components';
import colors from '../../Constants/colors';

export const Main = styled.div`
  background-color: red;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: #BFBFBF;
  width: 100vw;
  height: 100vh;
  display: flex;
  justifyContent: center;
  alignItems: center;
`;

export const Container = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  margin: 2vh 0;
`;

export const Title = styled.h2`
  font: Open Sans;
  font-weight: 400;
  font-size: 3vh;

`;

export const ContentBox = styled.div`
  width: 100%;
  height: 45%;
  box-sizing: border-box;
  border-radius: 0.5rem;
  margin: 0 auto;
  overflow: hidden;

`;

export const Search = styled.div`
  float: left;
`;

export const TableHeader = styled.div`
  background-color: ${colors.primary};
  color: colors.secondary;
  height: 5vh;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const P = styled.div`
  color: ${colors.secondary};
  font-size: 1.2vh;
`;

export const Bar = styled.div`
  width: 0.05%;
  height: 35%;
  border-radius: 3px;
  background-color: ${colors.secondary};
`;

export const TableTitle = styled.div`
  fontSize: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: ${(props) => `${props.width}%`}
`;

export const Button = styled.div`
  float: right;
`;

export const style = {
  button: {
    position: 'absolute',
  },
};

export const Lista = styled.div`
  overflow: auto;
  margin-bottom: 
`;
