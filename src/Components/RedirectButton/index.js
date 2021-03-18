import React from 'react';
import { Link } from 'react-router-dom';
import Button from './style';

const RedirectListButton = ({
  click,
  title,
  redirectTo,
}) => (
  <Button onClick={click}>
    <Link
      to={redirectTo}
      style={{
        color: 'white',
        textDecorationLine: 'none',
        fontSize: '1.5vw',
      }}
    >
      {title}
    </Link>
  </Button>
);

export default RedirectListButton;
