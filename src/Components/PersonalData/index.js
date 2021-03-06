import React from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { BsThreeDots } from 'react-icons/bs';
import styles from './style';

const PersonalData = ({
  user,

}) => (
  <div style={styles.personalbox}>

    <div style={{ ...styles.title2, width: '30%' }}>
      <IoPersonCircleOutline size="3vw" />
      <p style={{ marginLeft: '4%' }}>{user.name}</p>
    </div>

    <div style={{ ...styles.title2, width: '15%' }}>

      <p>098765432</p>
    </div>

    <div style={{ ...styles.title2, width: '25%' }}>

      <p>{user.email}</p>
    </div>

    <div style={{ ...styles.title2, width: '15%' }}>

      <p>{user.enroll}</p>
    </div>

    <div style={{ ...styles.title2, width: '5%' }}>

      <p>24/02</p>
    </div>

    <div style={{ ...styles.title2, width: '5%' }}>

      <BsThreeDots size="1.5vw" />
    </div>

  </div>
);

export default PersonalData;
