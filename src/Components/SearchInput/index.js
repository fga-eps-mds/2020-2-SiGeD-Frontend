import React from 'react';
import styles from './style';

const SearchInput = ({
    search,
    value,
    type,
    setWord,
}) => {

    return(

        <input typer = {type} placeholder = {'Pesquisar...'} style = {styles.generic} onChange={word => setWord(word.target.value)} />

    );
}

export default SearchInput;