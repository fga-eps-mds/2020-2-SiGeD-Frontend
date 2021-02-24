import React from 'react'
import BigButton from '../../Components/BigButton'
import LoginInput from '../../Components/LoginInput'
import ContainerLogin from '../../Components/ContainerLogin'

const LoginScreen = () => {

    return(
            <div style = {Style}>
                <div style={Style2}>
                    <LoginInput title = "Usuário" type = "user"/>
                    <LoginInput title = "Senha" type = "password"/>
                    <BigButton title = "Entrar" type = "primary"/>
                    <BigButton title = "Cadastre-se" type = "secondary"/>
                </div>
            </div>
    )

}

const Style = {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#E9E9E9',
    display: 'flex',
    justifyContent: 'center' , 
    alignItems: 'center', 
    flexDirection: 'column',
}

const Style2 = {
    width: 481,
    height: 470,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center' , 
    alignItems: 'center', 
    flexDirection: 'column',
    boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
    borderRadius: '15px'
    
}


export default LoginScreen;