import styled from 'styled-components';
import colors from '../../Constants/colors';

<<<<<<< HEAD
export const Main = styled.div`
    display: flex;
    background-color: ${colors.background};
    width: 100vw;
    justify-content: center;
    overflow: auto;
`;

export const Container = styled.div`
    display: flex;
    width: 90vw;
    height: 90vh;
    flex-direction: column;
    
    @media(max-width: 425px){
        margin-top: 0;
    }
`;

export const Header = styled.div`
    margin: 2vh 0;

    @media(max-width: 425px){
        margin-top: 0;
        height: 4%;
    }
`;

export const Title = styled.h1`
    margin-top: 5%;
    margin-bottom: 0%;
    font-family: Open Sans;
    font-weight: 400;
    font-size: 5vh;

    @media(max-width: 425px){
        width: 25%;
    }
`;

export const ContentBox = styled.div`
    width: 100%;
    height: 45%;
    box-sizing: border-box;
    border-radius: 0.5rem;
    margin: 0 auto;
`;

export const Search = styled.div`
    float: left;

    @media(max-width: 425px){
        margin-top: -8%;
        left: 100%;
    }
`;

export const TableHeader = styled.div`

    background-color: ${colors.primary};
    color: ${colors.secondary};
    height: 5vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px 10px 0px 0px;
    

    @media(max-width: 425px){
        visibility: hidden;
    }

`;

export const P = styled.div`
    color: ${colors.secondary};
    font-weight: 700;
    font-size: 75%;
    padding: 0;
    left: 0;
    @media(max-width: 656px){
    font-size: 1.6vh;
    }
`;

export const Bar = styled.div`
    width: 0.25%;
    height: 60%;
    border-radius: 5px;
    background-color: ${colors.secondary};
`;

export const DataContainer = styled.div`

    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 84%;
    width: 100%;
`;

export const TableTitle = styled.div`

    flex-direction: row;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: ${(props) => `${props.width}%`}
`;

export const Button = styled.div`
    float: right;

    @media(max-width: 435px){
        top: -8%;
        margin-top: -30%;
`;
=======
const styles = {

  main: {

    backgroundColor: '#BFBFBF',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },

  container: {

    marginTop: '15vh',
    backgroundColor: 'white',
    width: '65vw',
    height: '70vh',
    boxShadow: '0vw 0.2vw 0.2vw rgba(0, 0, 0, 0.25)',
    borderRadius: '0.5vw',
    display: 'flex',
    flexDirection: 'column',

  },

  header: {

    width: '65vw',
    height: 'min-content',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },

  title: {
    font: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '5vh',
    lineHeight: '3rem',
    height: 'min-content',
    position: 'relative',
    left: '3rem',
  },

  contentBox: {
    width: '90%',
    height: '70%',
    background: '#F7F7F7',
    border: '1px solid #5E5E5E',
    boxSizing: 'border-box',
    borderRadius: '0.5rem',
    margin: '0 auto',
    overflow: 'hidden',
  },

  search: {

    display: 'flex',
    flexDirection: 'row',
    width: 'min-content',
    alignItems: 'center',
    position: 'relative',
    marginRight: '0',
  },

  tableHeader: {

    backgroundColor: colors.primary,
    color: colors.secondary,
    height: '20%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  },

  p: {
    color: colors.secondary,
    fontWeight: '700',
    fontSize: '75%',
    padding: '0 5%',
  },

  bar: {
    width: '0.25%',
    height: '60%',
    borderRadius: '5px',
    backgroundColor: colors.secondary,
  },

  dataContainer: {

    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '84%',
    overflowX: 'hidden',
    width: '96%',
    overflow: 'scroll',
    marginLeft: '4%',

  },

  tableTitle: {

    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },

};

export default styles;
>>>>>>> [51] Fix styles container names for better code understanding
