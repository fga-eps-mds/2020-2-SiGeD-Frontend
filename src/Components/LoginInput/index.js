import React from 'react'
import Style from './style'

const LoginInput = ({title, type}) => {
    
    return(
        <div>
            <input placeholder = {title} style = {Style[type]} type = {type}>
            </input>
        </div>
    )
}

export default LoginInput;