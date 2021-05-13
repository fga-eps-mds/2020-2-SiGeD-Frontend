import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import colors from '../../Constants/colors';

export const UserFormsColumnText = styled.div`
    width: 90%;
    height: 70%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 5%;
    flex-wrap: wrap;
    justify-content: space-between;
    font-family: Montserrat;
    @media(max-width: 750px){
        align-items: center;
        width: 90%;
        height: 80%;
        justify-content: space-between;
        align-content: center;
    }
`;

export const Dropdown = styled(Form.Control)`
    box-sizing: border-box;
    border-radius: 1.5vw;
    border: 0px solid #000000;
    box-shadow: none !important;
    display: block;
    width: 98%;
    height: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: transparent;
    background-clip: padding-box;
    outline: none;

    @media(max-width: 750px){
        color: #000000;
        border: 2px solid #000000;
    }
`;

export const styles = {
  formGroupDiv: {
    boxSizing: 'border-box',
    borderRadius: '9px',
    border: '2px solid #000000',
    justifyContent: 'flex-start',
    display: 'flex',
  },
  dropdownStyle: {
    boxSizing: 'border-box',
    borderRadius: '9px',
    border: '0px solid #000000',
  },
  dropdownComponentStyle: {
    display: 'flex',
    color: `${colors.text}`,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    boxSizing: 'border-box',
    borderRadius: '8px',
    justifyContent: 'center',
  },
};
