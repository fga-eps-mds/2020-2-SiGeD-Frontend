import styled from 'styled-components';

export const SelectedBox = styled.div`
  width: 100%;
  height: 7vh;
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
  height: min-content;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1rem;
  margin-left: 5%;
  margin-bottom: 5%;
  word-break: break-word;
  cursor: pointer;

  @media(max-width: 750px){
    
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
