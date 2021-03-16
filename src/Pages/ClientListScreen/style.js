import styled from 'styled-components';
import colors from '../../Constants/colors';

export const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #bfbfbf;

`;

export const ContentBox = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    background-color: ${colors.background};
    
`;

export const Container = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    background-color: ${colors.background};
    margin-top: 10vh;

`;

export const Header = styled.div`
    height: 20%;
    width: 100%;

`;

export const Title = styled.h1`
    margin-bottom: 0%;
    font: Open Sans;
    font-weight: 400;
    font-size: 5vh;
    height: min-content;

`;

export const Search = styled.div`
    float: left;
`;

export const TableHeader = styled.div`
    background-color: ${colors.primary};
    color: ${colors.secondary};
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px 10px 0px 0px;
    
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
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    overflow-y: scroll;
`;

export const ButtonDiv = styled.div`
    width: 10%;
    height: 25%;
    float: right;
    marginBottom: 0px;
    color: ${colors.secondary};
    background-color: ${colors.primary};
    color: ${colors.secondary};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    display: flex;

`;

export const TableTitle = styled.div`
    width: ${(props) => `${props.width}%`}
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
`;
