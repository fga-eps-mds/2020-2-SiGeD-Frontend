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
    margin-left: 5%;
    text-align: left;
    font-size: 100%;
    font-weight: bold;
    margin-top: 4%;
    align-text: left;
    align-content: left;
    @media(max-width: 750px){
        font-size: 100%;
        width: 80%;
        white-space: normal;

    }
`;

export const IconsContainer = styled.div`
  float: right;
  width: max-content;
  @media(max-width: 750px){
    margin-right: 2%;
    margin-top: 2%;
}
`;

export const EditIcon = styled.div`
  float: right;
  font-size: 100%;
  width: 30%;
  margin-left: 5%;
  margin-right: 5%;
  @media(max-width: 750px){
    font-size: 100%;
}
`;

export const LockIcon = styled.div`
  float: right;
  font-size: 100%;
  width: 30%;
  @media(max-width: 750px){
    font-size: 100%;
}
`;

export const TrashIcon = styled.div`
  float: right;
  font-size: 100%;
  width: 30%;
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
    padding-right: 5%;
    word-wrap: break-word;
    @media(max-width: 750px){
        font-size: 18px;
        width:100%;
    }
`;

export const BottomSide = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    @media(max-width: 750px){
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }
`;

export const CreatedAt = styled.div`
    display: flex;
    text-align: right;
    font-size: 20px;
    height: min-content;
    @media(max-width: 750px){
        font-size: 18px;
        margin-right: 2%;
    }
`;

export const UserIcon = styled(IoPersonCircleOutline)`
    width: 60px;
    height: 60px;
    justify-content: flex-start;
`;
