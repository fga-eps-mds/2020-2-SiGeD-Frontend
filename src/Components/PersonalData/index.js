import React from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import styles from './style';
import {BsThreeDots} from "react-icons/bs";


const PersonalData = ({
    user

}) => {
    return(
        <div style={styles.personalbox}>

            <div style={{width: '30%', flexDirection: 'row', height: '100%', jusitfyContent: 'center', display: 'flex', alignItems: 'center'}}>
                <IoPersonCircleOutline size="3vw"/>
                <p style={{marginLeft: '4%'}}>{user.name}</p>
            </div>

            <div style={{width: '15%', height: '100%', jusitfyContent: 'center', display: 'flex', alignItems: 'center'}}>

                <p>098765432</p>
            </div>

            <div style={{width: '25%', height: '100%', jusitfyContent: 'center', display: 'flex', alignItems: 'center'}}>

                <p>{user.email}</p>
            </div>

            <div style={{width: '15%', height: '100%', jusitfyContent: 'center', display: 'flex', alignItems: 'center'}}>

                <p>{user.enroll}</p>
            </div>

            <div style={{width: '5%', height: '100%', jusitfyContent: 'center', display: 'flex', alignItems: 'center'}}>

                <p>24/02</p>
            </div>

            <div style={{width: '5%', height: '100%', jusitfyContent: 'center', display: 'flex', alignItems: 'center'}}>

                <BsThreeDots size = '1.5vw'/>
            </div>

            

        
        </div>
    )
}

export default PersonalData;