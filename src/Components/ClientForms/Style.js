import styled from 'styled-components';

const ClientFormsColumnText = styled.div`
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
        height: 80%;
        justify-content: space-between;
        align-content: center;
    }
`;

export default ClientFormsColumnText;
