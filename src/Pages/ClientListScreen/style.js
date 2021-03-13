import styled from 'styled-components';
import colors from '../../Constants/colors';

export const Main = styled.div`
    display: flex;
    background-color: #bfbfbf;
    width: 100vw;
    height: 100%;
    justify-content: center;
    overflow: auto;
`;

export const Container = styled.div`
    display: flex;
    width: 90vw;
    height: 100%;
    flex-direction: column;
    background-color: ${colors.background};
    
    @media(max-width: 425px){
        margin-top: 0;
    }
`;

export const Header = styled.div`
    margin: 2vh 0;
    height: 100%;
    @media(max-width: 425px){
        margin-top: 0;
        height: 4%;
    }
`;

export const Title = styled.h1`
    margin-top: 5%;
    margin-bottom: 0%;
    font: Open Sans;
    font-weight: 400;
    font-size: 5vh;
    height: min-content;
    @media(max-width: 425px){
        width: 25%;
    }
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
    height: 8vh;
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
`;

export const Bar = styled.div`
    width: 0.25%;
    height: 60%;
    border-radius: 5px;
    background-color: ${colors.secondary};
`;

export const DataContainer = styled.div`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 80%;
    width: 100%;
    // overflow-y: scroll;
`;

export const ButtonDiv = styled.div`
    float: right;
    background-color: ${colors.primary};
    color: ${colors.secondary};
    border-radius: 10px;
    width: 10%;
    height: 3%;
    justify-content: center;
    align-items: center;
    display: flex;

    @media(max-width: 435px){
        top: -8%;
        margin-top: -30%;
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
