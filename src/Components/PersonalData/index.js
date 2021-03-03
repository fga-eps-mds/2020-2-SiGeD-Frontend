import React from 'react';
import styles from './style';

const PersonalData = ({
    user

}) => {
    return(
        <div style={styles.personalbox}>
            <h1>{user.nome}</h1>
            <h1>{user.cpf}</h1>
            <h1>{user.telefone}</h1>
            <h1>{user.locacao}</h1>
            <h1>{user.atualizacao}</h1>
        </div>
    )
}

export default PersonalData;