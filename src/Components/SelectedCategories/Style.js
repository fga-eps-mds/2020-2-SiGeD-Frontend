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
  margin-left: 8%;

  @media(max-width: 750px){
    flex: auto;
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
    width 120px;
  }
`;
