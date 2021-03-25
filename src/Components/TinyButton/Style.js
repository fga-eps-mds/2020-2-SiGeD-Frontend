import styled from 'styled-components';
import colors from '../../Constants/colors';

export const Primary = styled.button`
    font: Montserrat;
    font-size: 100%;
    color: ${colors.secondary};
    width: 10vw;
    height: 100%;
    background-color: ${colors.primary};
    border-radius: 15px;
    border: 1px solid ${colors.primary};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    font-family: Montserrat;
    p {
      
    }

    @media(max-width: 750px){
      width: 80%;
      height: 100%;
      margin-right: 0px;
      margin-bottom: 5px;
    }

`;

export const Secondary = styled.button`

    font: Montserrat;
    font-size: 100%;
    color: ${colors.text};
    width: 10vw;
    height: 100%;
    background-color: ${colors.secondary};
    border-radius: 15px;
    border: 2% solid ${colors.primary};
    box-sizing: border-box;
    display: flex;
    align-Items: center;
    justify-content: center;
    margin-right: 15px;
    font-family: Montserrat;
    @media(max-width: 750px){
      width: 80%;
      height: 100%;
      margin-right: 0px;
      margin-bottom: 5px;
    }
`;
