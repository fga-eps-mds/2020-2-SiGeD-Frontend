import React from 'react'
import Style from './style'
import { FaUserAlt, FaLock } from "react-icons/fa";

const LoginInput = ({title, type, icon}) => {
    if(icon === "FaLock"){
        return(
            <div style = {Style[type]} >
                <div style = {Style["icon"]}>
                    <FaLock />
                </div>
                <input placeholder = {title} style = {Style["input"]} type = {type}/>
            </div>
        )
    }
    else{
        return(
            <div style = {Style[type]} >
                <div style = {Style["icon"]}>
                    <FaUserAlt />
                </div>
                <input placeholder = {title} style = {Style["input"]} type = {type}/>
            </div>
        )
    }
}

export default LoginInput;