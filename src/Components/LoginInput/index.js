import React from 'react';
import styles from './style';

const LoginInput = ({
  title, type, icon, onChange, value,
}) => (
  <div style={styles[type]}>
    <div style={styles.icon}>
      {icon}
    </div>
    <input placeholder={title} style={styles.input} type={type} onChange={(text) => onChange(text)} value={value || ''} />
  </div>
);

export default LoginInput;
