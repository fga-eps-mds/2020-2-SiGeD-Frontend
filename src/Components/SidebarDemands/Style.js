import styled from 'styled-components';
import colors from '../../Constants/colors';

const SidebarDemands = styled.div`
  width: 30%;
  height: 100%;
  font-size: 1rem;
  background-color: ${colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media(max-width: 750px){
      
  }
`;

export default SidebarDemands;
