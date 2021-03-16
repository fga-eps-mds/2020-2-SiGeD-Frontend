import styled from 'styled-components';

export const InputRegister = styled.input` 

    width: 100%;
    height: 100%;
    display: flex;
    border: 2px solid #000000;
    border-radius: 1.5vw;
    font-size: 100%;
    text-indent: 10px;
    box-sizing: border-box;
    outline: 0;

    @media(max-width: 720px){
      width: 95%;
      height: 80%;
    }
`;

export const Container = styled.div`

    width: 90%;
    height: 25%;
    justify-content: space-around;

    @media(max-width: 720px){
      height: 25%;
  }
`;

export const Text = styled.div`

    font: Open-Sans;
    font-size: 1.3vw;
    height: 50%;
    flex-direction: column;

    @media(max-width: 720px){
      font-size: 4vw;
      height: 60%;
    
  }
`;
