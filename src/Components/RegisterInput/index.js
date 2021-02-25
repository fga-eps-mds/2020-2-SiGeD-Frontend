import React from 'react';
import Style from './style';

const RegisterInput = ({
    title,
    type,
    setText,
}) => {

    return(
        <div>
            <input placeholder = {title} style = {Style[type]} onChange={e => setText(e.target.value)}></input>
        </div>
    );
}

export default RegisterInput;