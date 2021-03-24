import styled from 'styled-components';

export const Line = styled.div`
  display: flex;
  justify-content: space-between;

  @media(max-width: 800px) {
    flex-direction: column;
  }
`;

export const DivDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;


`;

export const TextArea = styled.textarea`
  font-family: Montserrat;
  border: 2px solid black;
  border-radius: 12px;
  text-indent: 3px;
  font-size: 90%;
  width: 90%;
`;

export const DivName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 10%;
`;

export const DivColor = styled.div`
  margin-right: 10%;
  @media(max-width: 800px) {
    margin-top: 5%;
  }
`;

export const P1 = styled.p`
  display: inline-block;
  margin: 2% 1%;

  @media(max-width: 1000px) {
    font-size: 80%;
  }
`;

export const Input = styled.input`
  border: 2px solid black;
  border-radius: 12px;
  text-indent: 3px;
  font-size: 90%;

  @media(max-width: 1000px) {
    width: 80%;
    height: 50%;
  }
`;
