import styled from 'styled-components';

export const SelectedBox = styled.div`
  width: 90%;
  height: 30%;
  font-size: 1rem;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow-y: auto;
  align-content: flex-start;

  @media(max-width: 750px){
    flex: auto;
    margin-left: 0px;
  }
`;

export const Tag = styled.div`

  width: 40%;
  height: 15%;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin-left: 5%;
  margin-bottom: 5%;

  @media(max-width: 750px){
    height: 30%;
  }

`;

export const Word = styled.p`

  font-size: 1rem;
  background-color: transparent;
  color: white;
  margin-left: 10%;

  @media(max-width: 750px){
    color: black;
    margin-left: 9%;
  }
`;
