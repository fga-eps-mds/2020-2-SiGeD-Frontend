import React from 'react';
import Style from '../../Components/TinyButton/style';

const TinyButton = ({
    type,
    title,
    click
}) => {
  return (
      
    <button style={Style[type]} onClick={click}>
      <b>{title}</b>
    </button>
  );
}

export default TinyButton;