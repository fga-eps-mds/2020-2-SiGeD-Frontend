import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import styles from './style';

const CategoriesData = ({ category }) => (
  <div style={styles.personalbox}>

    <div style={{ ...styles.tableContent, width: '25%' }}>
      <p style={{ ...styles.name, backgroundColor: category.color }}>{category.name}</p>
    </div>

    <div style={{ ...styles.tableContent, width: '50%' }}>
      <p style={styles.p}>{ category.description }</p>
    </div>

    <div style={{ ...styles.tableContent, width: '20%' }}>
      <p style={styles.p}>{ category.updatedAt.slice(0, 10).replaceAll('-', '/') }</p>
    </div>

    <div style={{ ...styles.tableContent, width: '5%' }}>
      <BsThreeDots />
    </div>
  </div>
);

export default CategoriesData;
