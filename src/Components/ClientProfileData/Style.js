import styled from 'styled-components';

const Img = styled.img`
    border-radius: 50%;
    width: 87%;
    height: auto;
    margin: 0 0 0 1px;
    align-content: center;
    justify-content: center;
    @media(max-width: 750px){
        width: auto;
        height: 100%;
        padding: 2% 0 0 0;
        margin: 4% 0 0 0;
    }

`;

export default Img;
