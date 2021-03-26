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
  padding: 2vh;

`;

export const TextArea = styled.textarea`
  font-family: Montserrat;
  border: 2px solid black;
  border-radius: 12px;
  text-indent: 3px;
  font-size: 90%;
  width: 90%;

  @media(max-width: 750px) {
    width: 100%;
  }
`;

export const DivName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2vh;
`;

export const DivColor = styled.div`
  margin-right: 10%;
  display: flex;
  margin-top: auto;
  padding: 2vh;
`;

export const P1 = styled.p`
  display: inline-block;
  margin: 2% 1%;
  
  @media(max-width: 750px) {
    margin-top: 5%;
  }
`;

export const Input = styled.input`
  border: 2px solid black;
  border-radius: 12px;
  text-indent: 3px;
  font-size: 90%;

  @media(max-width: 1000px) {
    width: 100%;
    height: 50%;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 3vh;

  @media(max-width: 750px) {
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 150%;
  padding: 2vh;

  @media(max-width: 800px) {
    font-size: 120%;
  }
`;
