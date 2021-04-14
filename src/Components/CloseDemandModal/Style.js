import styled from 'styled-components';

const ButtonDiv = styled.div`
display: flex;
width: 40%;
margin: 5%;
@media(max-width: 750px){
    width: 90%;
    display: none;
}
`;

export default ButtonDiv;
