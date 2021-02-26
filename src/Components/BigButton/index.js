import React from 'react'
import styles from './style'

const BigButton = ({title, type, changeButton}) => { 

    return(
        <div>
            <button style = {styles[type]} onClick={
                () => changeButton()
            }>
                {title}
            </button>
        </div>
    );
}

export default BigButton;

