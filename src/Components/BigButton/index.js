import React from 'react'
import Style from './style'

const BigButton = ({title, type}) => {
    return(
        <div>
            <button style = {Style[type]}>
                {title}
            </button>
        </div>
    );
}

export default BigButton;

