import React from 'react';
import styles from './style';

const SearchButton = ({
  title,
  click,
}) => (

  <button style={styles.primary} onClick={click}>
    <b style={{ fontSize: '1.1vw' }}>{title}</b>
  </button>
);

export default SearchButton;
