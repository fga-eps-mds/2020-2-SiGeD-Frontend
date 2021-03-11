import React from 'react';
import { Primary, Secondary } from './style';

const TinyButton = ({
  type,
  title,
  click,
}) => (
  <>
    {(type === 'primary') ? (<Primary onClick={click}>{title}</Primary>) : (<Secondary onClick={click}>{title}</Secondary>)}
  </>
);

export default TinyButton;
