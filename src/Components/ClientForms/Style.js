import styled from 'styled-components';

export const ClientFormsColumnText = styled.div`
    font-family: 'Montserrat';
    width: 90%;
    height: 70%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 5%;
    flex-wrap: wrap;
    justify-content: space-between;
    @media(max-width: 750px){
        align-items: center;
        width: 90%;
        height: max-content;
        justify-content: space-between;
        align-content: center;
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
      font-size: 80%;
      height: min-content;
    
  }
`;
