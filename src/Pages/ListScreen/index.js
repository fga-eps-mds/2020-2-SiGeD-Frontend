import React, { useEffect, useState } from 'react';
import styles from './style';
import SearchInput from '../../Components/SearchInput';

const ListScreen = () => {
    const [word, setWord] = useState();


    return (
        <div style={styles.main}>
            <div style={styles.container}>

                <div style={styles.header}>


                    <h2 style={styles.title}>Usuários</h2>

                    <SearchInput 

                    type = 'text'
                    value = {word}
                    setWord = {(word) => setWord(word)}

                    />

                </div>
            </div>
        </div>
    )

}

export default ListScreen;
