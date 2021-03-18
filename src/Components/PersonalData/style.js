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
      font-size: 1.5vh;
      font-weight: 900;
      flex-wrap: wrap;
      display:flex;
      align-items: center;
      margin-left: 1vw;
    }
    font-size: 2vh;
`;

export const ImageUser = styled.div`

      width: 3vw;
      height: 10vh;
      margin-left: 0.5rem;

    @media(max-width:425px){
      width: 30%;
      padding: 2%;
      height: 100%;
      margin-left: 0;
      background-color: ${colors.primary};
    }

`;

export const TableContainer = styled.div`

    @media(max-width: 425px){
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 60%;
      height: 100%;
      margin-bottom: 0;
      padding: 2vh;
    }

    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const TableContent = styled.div`

    @media(max-width: 425px){
      width: 100%;
      height: 4vh;
      display: flex;
      justify-content: left;
      align-items: center;
      flex-direction: row;
      flex-wrap: wrap;
      word-break: break-all;
      margin-top: 2%;
    }

    height: 100%;
    display: flex;
    justify-content: center;
    margin: 0;
    align-items: center;
    width: ${(props) => `${props.width}%`}
`;
