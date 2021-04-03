import styled from 'styled-components';

const RightBoxInputs = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  flex-direction: column;
  align-items: center;

  @media(max-width: 750px){
    height: 30%;
  }
`;

export default RightBoxInputs;
