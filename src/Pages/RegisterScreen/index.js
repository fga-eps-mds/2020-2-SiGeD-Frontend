import React, { useEffect, useState } from 'react';
import TinyButton from '../../Components/TinyButton/';
import Style from './style';
import RegisterInput from '../../Components/RegisterInput';
import { IoPersonCircleOutline } from 'react-icons/io5';

const RegisterScreen = () => {

    const [cardName, setCardName] = useState('');
    const [cardEmail, setCardEmail] = useState('');
    const [cardRegister, setCardRegister] = useState('');
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputRegister, setInputRegister] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [inputConfirmPassword, setInputConfirmPassword] = useState('');
    const submit=() => {
        console.log(inputName, inputEmail, inputRegister, inputPassword, inputConfirmPassword)
    }
    const cancel=() => {
        setInputEmail('')
        setInputRegister('')
        setInputName('')
        setInputPassword('')
        setInputConfirmPassword('')
    }

    useEffect(() => {

        if(!inputName)
            setCardName('Nome')
        else
            setCardName(inputName)
            
        if(!inputEmail)
            setCardEmail('Email')
        else
            setCardEmail(inputEmail);

        if(!inputRegister)
            setCardRegister('Registro')
        else
            setCardRegister(inputRegister);
            
    }, [inputName , inputEmail, inputRegister])


    return (
        <div style={Style.main}>

            <div style={Style.container}>

                <div style={Style.sidebar}>
                    < IoPersonCircleOutline style={Style.peopleIcon} />

                    <div style={Style.sidebarDiv}>
                        <h2 style={Style.sidebarText}>{cardRegister}</h2>
                        <h2 style={Style.sidebarText}>{cardName}</h2>
                        <h2 style={Style.sidebarText}>{cardEmail}</h2>
                    </div>

                </div>

                <div style={Style.row}>

                        <RegisterInput type='text' title='Nome' setText={setInputName} value={inputName} />

                        <RegisterInput type='text' title='Email' setText={setInputEmail} value={inputEmail}/>

                        <RegisterInput type='text' title='Registro' setText={setInputRegister} value={inputRegister}/>

                        <RegisterInput type='password' title='Senha' setText={setInputPassword} value={inputPassword} />

                        <RegisterInput type='password' title='Confirmar senha' 
                        setText={setInputConfirmPassword} value={inputConfirmPassword}/>

                </div>


                <div style={{ position: 'absolute', right: '66px', bottom: '51px' }}>

                    <TinyButton type='secondary' title='Cancelar' click={cancel}/>

                    <TinyButton type='primary' title='Cadastrar' click={submit}/>

                </div>

            </div>

        </div>
    )
}



export default RegisterScreen;