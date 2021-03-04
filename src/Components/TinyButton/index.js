import React from 'react';
import styles from './style';

const TinyButton = ({
  type,
  title,
  click,
}) => (

  <button style={styles[type]} onClick={click}>
    <b style={{ fontSize: '1.5vw' }}>{title}</b>
  </button>
);

export default TinyButton;
