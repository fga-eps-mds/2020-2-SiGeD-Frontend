import React from 'react';
import { Link } from 'react-router-dom';
import Button from './style';

const RedirectListButton = ({
  click,
  title,
  redirectTo,
}) => (
  <Button
    as={Link}
    style={{
      color: 'white',
      textDecorationLine: 'none',
      fontSize: '100%',
    }}
    to={redirectTo}
    onClick={click}
  >
    {title}
  </Button>
);

export default RedirectListButton;
