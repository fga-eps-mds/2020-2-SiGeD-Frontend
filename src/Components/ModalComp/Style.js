import styled from 'styled-components';

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => `${props.flexDirection}`};

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
  width: 100%;
  outline: none;
`;

export const DivName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2vh;
`;

export const DivColor = styled.div`
  display: flex;
  margin-right: 10%;
  margin-top: auto;
  padding: 2vh;

  @media(max-width: 750px) {
    width: 25%;
  }
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
  width: ${(props) => `${props.Input}`};
  height: 35px;
  outline: none;

  @media(max-width: 1000px) {
    width: 100%;
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

export const ColorInput = styled.input`
  display: solid;
  opacity: 0;
  height: 100%;
  width: 100%;
`;

export const ColorField = styled.div`
  border-radius: 50%;
  width: 4vh;
  border: 1px solid black;
  height: 4vh; 
  background-color: ${(props) => `${props.background}`};
  display:inline-block;
  @media(max-width: 750px) {
    margin-top: 4%;
  }
`;
