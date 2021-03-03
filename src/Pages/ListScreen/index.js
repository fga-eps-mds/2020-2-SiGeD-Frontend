import React, { useEffect, useState } from 'react';
import styles from './style';
import SearchInput from '../../Components/SearchInput';
import { FaSistrix } from "react-icons/fa";
import PersonalData from '../../Components/PersonalData';

const ListScreen = () => {
    const [word, setWord] = useState();
    const [users, setUsers] = useState([{
        "nome": "Joao",
        "cpf": 123456789,
        "telefone": 33896751,
        "locacao": "Planaltina",
        "atualizacao": "22/05/2020"
    },

    {
        "nome": "Maria",
        "cpf": 1234554321,
        "telefone": 40028922,
        "locacao": "aguas claras",
        "atualizacao": "22/04/2014"
    },

    {
        "nome": "Victor",
        "cpf": 789123456,
        "telefone": 33889712,
        "locacao": "Asa Norte",
        "atualizacao": "02/03/2020"
    }]);

    
    // useEffect(() => {
    //     getUsers();
    // }, [])

    // function getUsers () {

    //     fetch(URL)
    //         .then(response => response.json())
    //             .then(data => {
    //                 setUsers(data.users)
    //             });
    // }


    return (
        <div style={styles.main}>
            <div style={styles.container}>

                <div style={styles.header}>

                    <h2 style={styles.title}>Usuários</h2>

                    <div style={styles.search}>

                        <SearchInput 
                        type = 'text'
                        icon = {<FaSistrix/>}
                        value = {word}
                        setWord = {(word) => setWord(word)}
                        />
                    </div>

                </div>

                <div style={styles.contentBox}>

                    <div style={styles.header2}>

                        <p style={styles.p}>Nome</p>
                        <h1 style={styles.h1}>|</h1>
                        <p style={styles.p}>CPF</p>
                        <h1 style={styles.h1}>|</h1>
                        <p style={styles.p}>Telefone</p>
                        <h1 style={styles.h1}>|</h1>
                        <p style={styles.p}>Locação</p>
                        <h1 style={styles.h1}>|</h1>
                        <p style={styles.p}>Ult. Atualização</p>

                    </div>

                    <p>{console.log(users[0].name)}</p>

                    <div style={styles.dataContainer}>    
                    {
                        users.length === 0 ? <h1>carregando . . .</h1>  : 
                        users.map( user => { 
                        return(

                            <PersonalData user={user}/>
                        )
                        })
                    }
                    {console.log(users.length)}
                   </div>


                </div>

            </div>
        </div>
    )

}

export default ListScreen;
