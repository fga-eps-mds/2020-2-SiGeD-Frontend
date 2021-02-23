import React from 'react'
import BigButton from '../../Components/BigButton'
import LoginInput from '../../Components/LoginInput'

const LoginScreen = () => {

    return(
        <div>
            <LoginInput title = "Usuário" type = "usuario"/>
            <LoginInput title = "Senha" type = "senha"/>
            <BigButton title = "Entrar" type = "primary"/>
            <BigButton title = "Cadastre-se" type = "secondary"/>
        </div>
    )

}

export default LoginScreen;