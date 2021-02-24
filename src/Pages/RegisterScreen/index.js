import React, {useEffect, useState} from 'react';
import TinyButton from '../../Components/TinyButton/';
import Style from './style';
import RegisterInput from '../../Components/RegisterInput';


const RegisterScreen = () => {

    return(

        <div style={Style.main}>

            <div style={Style.container}>

                <div style={Style.sidebar}>
                
                </div>
                
                <div style={Style.row}>
                    <div>
                        <p style={Style.text}>Nome:</p>
                        <RegisterInput type='Name' title='Nome'/>
                    </div>
                    
                    <div>
                        <p style={Style.text}>Email:</p>
                        <RegisterInput type='Email' title='Email'/>
                    
                    </div>
                
                    <div>
                        <p style={Style.text}>Matrícula:</p>
                        <RegisterInput type='Register' title='Registro'/>
                    </div>
                    
                    <div>
                        <p style={Style.text}>Senha:</p>
                        <RegisterInput type='Password' title='Senha'/>
                    </div>
                    
                    <div>
                        <p style={Style.text}>Confirme sua senha:</p>
                        <RegisterInput type='ConfirmPassword' title='Confirmar senha'/>
                    </div>

                </div> 
            

                <div style={{position:'absolute', right:'66px', bottom:'51px'}}>
                    
                    <TinyButton type='secondary'  title='Cancelar'/>
            
                    <TinyButton type='primary' title='Cadastrar'/>  
                
                </div>

            </div>

        </div> 
    )
}



export default RegisterScreen;