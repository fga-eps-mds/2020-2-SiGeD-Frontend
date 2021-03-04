import React from 'react';
import styles from './style';

const PersonalData = ({
    user

}) => {
    return(
        <div style={styles.personalbox}>

            <div style={styles.quadro}>

                <h1>{user.name}</h1>
            </div>

            <div style={styles.quadro}>

                <h1>{user.email}</h1>
            </div>

            <div style={styles.quadro}>

                <h1>{user.enroll}</h1>
            </div>
        </div>
    )
}

export default PersonalData;