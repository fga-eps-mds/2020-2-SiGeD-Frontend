import React from 'react'
import BigButton from '../../Components/BigButton'
import LoginInput from '../../Components/LoginInput'
import Style from './style'
import { FaUserAlt, FaLock } from "react-icons/fa";

const LoginScreen = () => {

    return(
            <div style = {Style["background"]}>
                <div style = {Style["center"]}>
                    <h1 style = {Style["access"]}>Entrar</h1>
                    <LoginInput title = {"Usuário"} type = "user" icon = "FaUserAlt"/>
                    <LoginInput title = {"Senha"} type = "password" icon = "FaLock"/>
                    <BigButton title = "Entrar" type = "primary"/>
                    <BigButton title = "Cadastre-se" type = "secondary"/>
                </div>
            </div>
    )

}

export default LoginScreen;