import React from 'react';
import styles from './style';

const RegisterInput = ({
  type,
  title,
  setText,
  value,
}) => (
  <div style={{ width: '100%', margin: '0', padding: '0' }}>
    <p style={styles.text}>
      {title}
      :
    </p>
    <input
      type={type}
      placeholder={title}
      style={styles.generic}
      onChange={(e) => setText(e.target.value)}
      value={value}
    />

  </div>
);

export default RegisterInput;
