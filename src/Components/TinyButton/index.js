import React from 'react';
import Style from '../../Components/TinyButton/style';

const TinyButton = ({
    type,
    title,
}) => {
  return (
      
    <button style={Style[type]} onClick={() => console.log('Clicou!')}>
      <b>{title}</b>
    </button>
  );
}

export default TinyButton;