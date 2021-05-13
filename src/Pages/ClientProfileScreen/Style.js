import styled from 'styled-components';
import colors from '../../Constants/colors';

export const Main = styled.div`

    width: 100vw;
    height: 100vh;
    background-color: ${colors.primary};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    @media(max-width: 750px){
        flex-direction: column;
        height: max-content;
    }

`;

export const RightBox = styled.div` 

    width: 80%;
    height: 100%;
    background-color: ${colors.secondary};
    display: flex;
    align-items: center;
    flex-direction: column;

    @media(max-width: 750px){
        width: 100%;
    }
`;

export const RightBoxMain = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: ${colors.background};
  width: 100%;
  height: 100vh;
  padding: 5%;
  @media(max-width: 750px){
    height: max-content;
  }
`;

export const HeaderDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 750px){
    height: max-content;
    width: 85%;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    justify-self: center;
    align-self: center;
    flex-wrap: wrap;

  }
`;

export const TitleH = styled.h2`
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 4vh;
  margin: 0;
  margin-bottom: 7vh;

  @media(max-width: 750px){
    width: 100%;
    margin-top: 0vh;
    text-align: center;
    margin-bottom: 1vh;
  }
`;

export const ButtonContainer = styled.div`
  width: 130px;
  height: 50px;
  border-radius: 15px;

  @media(max-width: 750px){
    width: 100%;
    height: 30px;
    float: none;
  }
`;

export const SearchDiv = styled.div`
  float: left;
  height: 50px;

  @media(max-width: 750px){
    width: 100%;
    height: min-content;
    margin-bottom: 5%;
  }
`;

export const ListDiv = styled.div`
  display: flex;
  height: 50vh;
  padding: 5px;
  overflow-x: hidden;
  overflow-y: auto;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  @media(max-width: 750px){
    height: max-content;
    padding: 5px;
    overflow: auto;
  }
`;

export const ContainerDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5%;

  @media(max-width: 750px){
    height: 100vh;
    margin-top: 0%;
  }
`;

export const FilterDiv = styled.div`
  width: 260px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 2%;

  @media(max-width: 750px) {
    width: 100%;
    height: 100px;
    flex-direction: column;
  }
`;

export const styles = {
  dropdownComponentStyle: {
    display: 'flex',
    color: `${colors.text}`,
    height: '100%',
    alignItems: 'center',
    boxSizing: 'border-box',
    borderRadius: '8px',
    border: '1px solid black',
    justifyContent: 'center',
  },
  redirectListButtonStyle: {
    height: '100%',
    fontSize: '100%',
  },
};
