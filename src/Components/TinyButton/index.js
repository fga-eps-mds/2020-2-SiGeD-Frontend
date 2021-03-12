import React from 'react';
import { Primary, Secondary } from './style';

const TinyButton = ({
  type,
  title,
  click,
  style,
}) => (
  <>
  <>
    {(type === 'primary') ? (<Primary onClick={click}>{title}</Primary>) : (<Secondary onClick={click}>{title}</Secondary>)}
  </>

  <button style={{ ...styles[type], ...style }} onClick={click}>
    <b style={{ fontSize: '1.5vw' }}>{title}</b>
  </button>
  </>
);

export default TinyButton;
