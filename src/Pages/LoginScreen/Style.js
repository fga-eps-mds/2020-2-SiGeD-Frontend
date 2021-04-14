import styled from 'styled-components';
import colors from '../../Constants/colors';

export const styles = {
  background: {
    width: '100vw',
    height: '100vh',
    backgroundColor: colors.background,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },

  center: {
    width: '55vh',
    height: '55vh',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
    borderRadius: '15px',
    marginTop: '15vh',
    marginBottom: '10vh',

  },

  access: {
    fontFamily: 'Montserrat',
    fontSize: '48px',
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 400,
    letterSpacing: 0,
    marginBottom: '5vh',
    marginTop: '5vh',
    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
};

export const Background = styled.div` 
  width: 100vw;
  height: 100vh;
  background-color: ${colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media(max-width: 750px){
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Center = styled.div`
    width: 55vh;
    height: 55vh;
    background-color: ${colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #FFFFFF;
    border: 3px solid #1F3541;
    box-sizing: border-box;
    border-radius: 15px;
    margin-top: 15vh;
    margin-bottom: 10vh;

    @media(max-width: 750px){
    width: 100vw;
    box-shadow: 0;
    border-radius: 0;
  }
`;
