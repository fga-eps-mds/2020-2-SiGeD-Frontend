import React, { useEffect, useState } from 'react';
import TinyButton from '../../Components/TinyButton/';
import Style from './style';
import RegisterInput from '../../Components/RegisterInput';
import { IoPersonCircleOutline } from 'react-icons/io5';

const RegisterScreen = () => {

    const [inputName, setInputName] = useState('Nome');
    const [inputEmail, setInputEmail] = useState('Email');
    const [inputRegister, setInputRegister] = useState('Registro');

    useEffect(() => {

        if(!inputName)
            setInputName('Nome')
        else if(!inputEmail)
            setInputEmail('Email')
        else if(!inputRegister)
            setInputRegister('Registro')

    }, [inputName , inputEmail, inputRegister])


    return (
        <div style={Style.main}>

            <div style={Style.container}>

                <div style={Style.sidebar}>
                    < IoPersonCircleOutline style={Style.peopleIcon} />

                    <div style={Style.sidebarDiv}>
                        <h2 style={Style.sidebarText}>{inputRegister}</h2>
                        <h2 style={Style.sidebarText}>{inputName}</h2>
                        <h2 style={Style.sidebarText}>{inputEmail}</h2>
                    </div>

                </div>

                <div style={Style.row}>
                    <div>
                        <p style={Style.text}>Nome:</p>
                        <RegisterInput type='Name' title='Nome' setText={setInputName} />
                    </div>

                    <div>
                        <p style={Style.text}>Email:</p>
                        <RegisterInput type='Email' title='Email' setText={setInputEmail} />

                    </div>

                    <div>
                        <p style={Style.text}>Matrícula:</p>
                        <RegisterInput type='Register' title='Registro' setText={setInputRegister} />
                    </div>

                    <div>
                        <p style={Style.text}>Senha:</p>
                        <RegisterInput type='Password' title='Senha' />
                    </div>

                    <div>
                        <p style={Style.text}>Confirme sua senha:</p>
                        <RegisterInput type='ConfirmPassword' title='Confirmar senha' />
                    </div>

                </div>


                <div style={{ position: 'absolute', right: '66px', bottom: '51px' }}>

                    <TinyButton type='secondary' title='Cancelar' />

                    <TinyButton type='primary' title='Cadastrar' />

                </div>

            </div>

        </div>
    )
}



export default RegisterScreen;