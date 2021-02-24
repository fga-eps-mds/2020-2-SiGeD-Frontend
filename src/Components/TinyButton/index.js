import React from 'react';
import colors from '../../Constants/colors';
import Style from '../../Components/TinyButton/style'

const TinyButton = ({
    type,
    title,
}) => {
  return (
      
    <button style={Style[type]}>
      <b>{title}</b>
    </button>
  );
}

export default TinyButton;