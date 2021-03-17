import styled from 'styled-components';
import colors from '../../Constants/colors';

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
  font-size: 2vh;
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

export const Button = styled.div`
`;
