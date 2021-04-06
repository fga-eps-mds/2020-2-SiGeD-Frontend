import styled from 'styled-components';
import { IoPersonCircleOutline } from 'react-icons/io5';
import colors from '../../Constants/colors';

export const Card = styled.div`
    width: 90%;
    height: max-content;
    background-color: ${colors.secondary};
    border-radius: 15px;
    border: 1.5px solid black;
    padding: 2%;
    margin-bottom: 2%;
    justify-content: center;
    @media(max-width: 750px){
        width: 100%;
        padding: 0;
    }
`;

export const TopSide = styled.div`
    height: max-content;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const DemandName = styled.div`
    height: max-content;
    white-space: nowrap;
    margin-left: 5%;
    text-align: left;
    font-size: 22px;
    font-weight: bold;
    margin-top: 4%;
    @media(max-width: 750px){
        font-size: 100%;
        width: 80%;
        white-space: normal;

    }
`;

export const EditIcon = styled.div`
  float: right;
  font-size: 150%;
  @media(max-width: 750px){
    font-size: 100%;
}
`;

export const DemandDescription = styled.div`
    font-size: 20px;
    width: 70%;
    text-align: left;
    margin-top: 2%;
    padding-left: 8%;
    @media(max-width: 750px){
        font-size: 18px;
    }
`;

export const BottomSide = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const CreatedAt = styled.div`
    display: flex;
    text-align: right;
    font-size: 20px;
    height: min-content;
    @media(max-width: 750px){
        font-size: 18px;
    }
`;

export const UserIcon = styled(IoPersonCircleOutline)`
    width: 60px;
    height: 60px;
    justify-content: flex-start;
`;
