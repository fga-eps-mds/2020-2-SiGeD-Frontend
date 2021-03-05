import React from 'react';
import styles from './style';
import { ErrorMessage } from '../ErrorMessage';

const RegisterInput = ({
  type,
  title,
  setText,
  value,
}) => (
  <div style={styles.container}>
    <p style={styles.text}>
      {title}
      :
    </p>
    <p style={styles.text}>
      <input
        type={type}
        placeholder={title}
        style={styles.generic}
        onChange={(e) => setText(e.target.value)}
        value={value}
      />
      <ErrorMessage input={value} title={title} />
    </p>
  </div>
);

export default RegisterInput;
