import styled from 'styled-components';
import colors from '../../Constants/colors';

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
=======
        position: 'relative',
        marginRight: '0',
    },

    header2: {

        backgroundColor: colors.primary,
        color: colors.secondary,
        height: '20%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    
    p: {
        color: colors.secondary,
        fontWeight: '700',
        fontSize: '75%',
        padding: '0 5%',
    },

    barra: {
        width: '0.25%',
        height: '60%',
        borderRadius: '5px',
        backgroundColor: colors.secondary,
    },

    dataContainer: {
         
        flexDirection: 'column', 
        justifyContent: 'space-around',
        alignItems: 'center',
<<<<<<< HEAD
        height: '90%',
        width: '100%'

    
<<<<<<< HEAD
>>>>>>> [51] adjusts on user component and listing function.
=======
=======
        height: '84%',
        overflowX: 'hidden',
        width: '96%',
        overflow: 'scroll',
        marginLeft: '4%',
>>>>>>> [51] Finish list screen and add scroll in contentBox
    
>>>>>>> [51] Adjustment on PersonalData component format
    }
`;
