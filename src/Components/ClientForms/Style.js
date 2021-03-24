import styled from 'styled-components';

const ClientFormsColumnText = styled.div`
    font-family: 'Montserrat';
    width: 90%;
    height: 70%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
    @media(max-width: 720px){
        align-items: center;
        width: 90%;
        height: 80%;
        justify-content: space-between;
        align-content: center;
    }
`;

export default ClientFormsColumnText;
