import React from 'react';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { BsThreeDots } from 'react-icons/bs';
import styles from './style';

const CategoriesData = ({
  categorie,

}) => (
  <div style={styles.personalbox}>

    <div style={{ ...styles.tableContent, width: '24%' }}>
      <IoPersonCircleOutline size="3vw" />
      <p style={{ marginLeft: '4%' }}>{categorie.name}</p>
    </div>

    <div style={{ ...styles.tableContent, width: '50%' }}>

      <p>Descrição...</p>
    </div>

    <div style={{ ...styles.tableContent, width: '20%' }}>

      <p>08/03</p>
    </div>

    <div style={{ ...styles.tableContent, width: '5%' }}>

      <BsThreeDots size="1.5vw" />
    </div>

  </div>
);

export default CategoriesData;
