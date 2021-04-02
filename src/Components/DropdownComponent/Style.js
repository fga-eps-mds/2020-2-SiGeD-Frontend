import styled from 'styled-components';
import { Form } from 'react-bootstrap';

const Dropdown = styled(Form.Control)`

    box-sizing: border-box;
    border-radius: 1.5vw;
    border: 0px solid #000000;
    box-shadow: none !important;
    display: block;
    width: 98%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: red;
    background-color: transparent;
    background-clip: padding-box;
    outline: none;
`;

export default Dropdown;
