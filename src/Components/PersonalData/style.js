import styled from 'styled-components';
import colors from '../../Constants/colors';

export const PersonalBox = styled.div`
    width: 100%;
    height: 10vh;
    background-color: ${colors.secondary};
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1%;
    border-radius: 10px;
    font-size: 0.8vw;
    overflow: hidden;

    @media(max-width: 425px){
      width: 85%;
      height: 40%;
      margin: 0 auto;
      margin-bottom: 2vh;
      display: flex;
      flex-direction: row;
    }
`;

export const P = styled.p`

    @media(max-width: 425px){
      font-size: 2vh;
      margin-bottom: 10%;
      font-weight: 600;
    }
    font-size: 2vh;
`;

export const ImageUser = styled.div`

      width: 3vw;
      height: 10vh;
      margin-left: 0.5rem;

    @media(max-width:425px){
      width: 50%;
      height: 50%;
      margin-left: 10%;
    }

`;

export const TableContainer = styled.div`

    @media(max-width: 425px){
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 20%;
      margin-top: 10%;
      margin-bottom: 5%;
    }

    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const TableContent = styled.div`

    @media(max-width: 425px){
      width: 40%;
      height: 10%;
      margin: '0 auto';
      flex-direction: row;
      flex-wrap: wrap;
      margin-left: 10%;
      margin-bottom: 0%;
    }

    height: 100%;
    display: flex;
    justify-content: center;
    margin: 0;
    align-items: center;
    width: ${(props) => `${props.width}%`}
`;
