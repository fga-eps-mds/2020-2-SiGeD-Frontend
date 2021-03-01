import React, { useEffect, useState } from 'react';
import styles from './style';
import SearchInput from '../../Components/SearchInput';
import { FaSistrix } from "react-icons/fa";

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

                </div>

            </div>
        </div>
    )

}

export default ListScreen;
