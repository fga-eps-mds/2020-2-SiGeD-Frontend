import React from 'react';
import Style from './style';

const RegisterInput = ({
    type,
    title,
    setText,
    value
}) => {

    return(
        <div>
            <p style={Style.text}>{title}:</p>
            <input type={type} placeholder = {title} style = {Style.generic} onChange={e => setText(e.target.value) }
            value={value}/>

        </div>
    );
}

export default RegisterInput;