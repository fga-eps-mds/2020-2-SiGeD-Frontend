import styled from 'styled-components';

const UserFormsColumnText = styled.div`
    width: 90%;
    height: 70%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
    font-family: Montserrat;
    @media(max-width: 720px){
        align-items: center;
        width: 90%;
        height: 80%;
        justify-content: space-between;
        align-content: center;
    }
`;

export default UserFormsColumnText;
