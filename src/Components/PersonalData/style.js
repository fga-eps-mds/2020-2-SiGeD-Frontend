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
      flex-wrap: wrap;
    }
`;

export const P = styled.p`

    @media(max-width: 425px){
      font-size: 2vh;
      font-weight: 900;
    }
    font-size: 2vh;
`;

export const ImageUser = styled.div`

      width: 3vw;
      height: 10vh;
      margin-left: 0.5rem;

    @media(max-width:425px){
      width: 30%;
      height: 40%;
    }

`;

export const TableContent = styled.div`

    @media(max-width: 425px){
      width: 40%;
      height: 10%;
      margin: '0 auto';
      margin-bottom: 2vh;
      display: flex;
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
