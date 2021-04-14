import styled from 'styled-components';
import { BiPaperPlane } from 'react-icons/bi';
import colors from '../../Constants/colors';

export const ForwardDiv = styled.div`
    background-color: ${colors.navHeaders};
    color: ${colors.secondary};
    font-size: 100%;
    display: flex;
    justify-content: space-between;
    width: min-content;
    cursor: pointer;
`;

export const ForwardIcon = styled(BiPaperPlane)`
    height: 25px;
    width: 25px;
`;
