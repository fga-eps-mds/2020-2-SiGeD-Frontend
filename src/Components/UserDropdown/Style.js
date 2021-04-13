import styled from 'styled-components';

export const UserSearchDiv = styled.div`
  width: 100%;
  height: 15%;
  font-size: 1rem;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-width: 750px){
    height: 30%;
  }
`;

export const Label = styled.p`
    margin-left: 10%;
    font-size: 1.5rem;
    align-self: flex-start;

    @media(max-width: 750px){
      font-size: 120%;
      color: black;
    }
`;
