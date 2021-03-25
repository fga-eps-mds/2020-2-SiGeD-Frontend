import React from 'react';
import { Primary, Secondary } from './Style';

const TinyButton = ({
  type,
  title,
  click,
  style,
}) => (

  <>
    {(type === 'primary') ? (<Primary onClick={click} style={{ ...style }}>{title}</Primary>) : (<Secondary onClick={click} style={{ ...style }}>{title}</Secondary>)}
  </>

);

export default TinyButton;
