import React, { useEffect, useState } from 'react';
import styles from './style';
import SearchInput from '../../Components/SearchInput';
import { FaSistrix } from "react-icons/fa";
import PersonalData from '../../Components/PersonalData'

const ListScreen = () => {
    const [word, setWord] = useState();


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

                    <PersonalData/>

                    {/* <div style={styles.dataContainer}>    
                    {
                        list.length === 0 ? <h1>. . .</h1>  : 
                        list.map( person => { 
                        return(
                            <personData person={person}/>
                        )
                        })
                    }
                   </div>  */}

                </div>

            </div>
        </div>
    )

}

export default ListScreen;
