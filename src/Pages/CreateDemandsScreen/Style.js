import styled from 'styled-components';
import colors from '../../Constants/colors';

const Main = styled.div`

    width: 100vw;
    height: 100vh;
    background-color: ${colors.secondary};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;

    @media(max-width: 750px){
        flex-direction: column;
        margin-top: 8vh;
    }

`;

export default Main;
