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
        margin-top: 8vh;
    }

`;

export const RightBox = styled.div` 

    width: 70%;
    height: 100%;
    background-color: ${colors.secondary};
    display: flex;
    align-items: center;
    flex-direction: column;

    @media(max-width: 750px){
        width: 100%;
        height: 80%;
    }
`;

export const Label = styled.div`

    width: 100%;
    height: 25%;
    background-color: blue;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    align-items: center;


`;

export const ContentBox = styled.div`

    width: 100%;
    height: 75%;
    background-color: green;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const TableHeader = styled.div`
    background-color: ${colors.primary};
    color: ${colors.secondary};
    height: 5vh;
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px 10px 0px 0px;
    
    @media(max-width: 750px){
        visibility: hidden;
    }
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

export const P = styled.div`
    color: ${colors.secondary};
    font-weight: 700;
    font-size: 75%;
    padding: 0;
    left: 0;
    @media(max-width: 750px){
      font-size: 1.6vh;
    }
`;

export const Header = styled.div`
    margin: 2vh 0;
    @media(max-width: 750px){
        margin-top: 0;
        height: 4%;
    }
`;

export const Bar = styled.div`

    width: 0.5%;
    height: 70%;
    background-color: ${colors.secondary};
    border-radius: 10px 10px 10px 10px;

`;

export const DemandsList = styled.div`

    width: 80%;
    height: 90%;
    background-color: ${colors.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    overflow-y: scroll;

`;

export const Search = styled.div`
    float: left;
    @media(max-width: 750px){
        margin-top: -8%;
        left: 100%;
    }
`;
