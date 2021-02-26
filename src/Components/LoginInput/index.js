import React from 'react'
import styles from './style'

const LoginInput = ({title, type, icon, onChange, value}) => {


        return(
            <div style = {styles[type]} >
                <div style = {styles["icon"]}>
                    {icon}
                </div>
                <input placeholder = {title} style = {styles["input"]} type = {type} onChange={onChange} value={value}/>
            </div>
        )
}

export default LoginInput;