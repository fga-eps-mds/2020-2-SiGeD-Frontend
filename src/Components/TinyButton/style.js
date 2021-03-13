import styled from 'styled-components';
import colors from '../../Constants/colors';

export const Primary = styled.button`
    font: Open Sans;
    font-size: 100%;
    color: ${colors.secondary};
    width: 10vw;
    height: 100%;
    background-color: ${colors.primary};
    border-radius: 1vw;
    border: 2% solid ${colors.primary};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;

    p {
      
    }

    @media(max-width: 720px){
      width: 80%;
      height: 100%;
      margin-right: 0px;
      margin-bottom: 5px;
    }

`;

export const Secondary = styled.button`

    font: Open Sans;
    font-size: 100%;
    color: ${colors.primary};
    width: 10vw;
    height: 100%;
    background-color: ${colors.secondary};
    border-radius: 1vw;
    border: 2% solid ${colors.primary};
    box-sizing: border-box;
    display: flex;
    align-Items: center;
    justify-content: center;
    margin-right: 15px;
    @media(max-width: 720px){
      width: 80%;
      height: 100%;
      margin-right: 0px;
      margin-bottom: 5px;
    }
`;
