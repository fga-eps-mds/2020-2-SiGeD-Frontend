import styled from 'styled-components';

export const SelectedBox = styled.div`
  width: 100%;
  height: 10%;
  font-size: 1rem;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow-y: scroll;
  align-content: flex-start;
  margin-top: 25px;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;

  @media(max-width: 750px){
    flex: auto;
    margin-left: 0px;
    height: 50%;
  }
`;

export const Tag = styled.div`
  color: white;
  font-weight: bold;
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
`;

export const Word = styled.p`

  font-size: 1rem;
  background-color: transparent;
  color: white;
  margin-left: 10%;

  @media(max-width: 750px){
    color: white;
    margin-left: 9%;
  }
`;
