import styled from 'styled-components';

export const InputRegister = styled.input` 

    width: 100%;
    height: 40%;
    display: flex;
    border: 2px solid #000000;
    border-radius: 9px;
    font-size: 100%;
    text-indent: 10px;
    box-sizing: border-box;
    outline: 0;

    @media(max-width: 750px){
      width: 100%;
      height: 50%;
      font-size: 80%;
    }
`;

export const Container = styled.div`

    width: ${(props) => (props.long ? '100%' : '45%')};
    height: 20%;

    @media(max-width: 750px){
      height: 20%;
  }
`;

export const Label = styled.div`

    font-family: Montserrat;
    font-size: 100%;
    height: min-content;
    align-items: center;
    align-content:center;
    justify-content: center;

    @media(max-width: 750px){
      font-size: 100%;
      height: min-content;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-word;

    
  }
`;
