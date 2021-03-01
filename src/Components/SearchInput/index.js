import React from 'react';
import styles from './style';

const SearchInput = ({
    search,
    value,
    type,
    icon,
    setWord,
}) => {

    return(
        <div style={styles.search}>
            <div style={styles.icon}>
                {icon}
            </div>

            <input typer = {type} placeholder = {'Pesquisar...'} style = {styles.generic} onChange={word => setWord(word.target.value)} />
        </div>
    );
}

export default SearchInput;