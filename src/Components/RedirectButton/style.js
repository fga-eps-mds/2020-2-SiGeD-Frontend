import styled from 'styled-components';
import colors from '../../Constants/colors';

const Button = styled.button`

    font: Open Sans;
    font-size: 100%;
    color: ${colors.secondary};
    width: max-content;
    height: 100%;
    background-color: ${colors.primary};
    border-radius: 1vw;
    border: 2% solid ${colors.primary};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    float: right;
    text-decoration-line: none,


    @media(max-width: 720px){
      width: 80%;
      height: 100%;
      margin-right: 0px;
      text-decoration-line: none,
    }

`;

export default Button;
