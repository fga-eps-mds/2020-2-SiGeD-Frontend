import React from 'react';
import { Container, Text, InputRegister } from './style';
import { ErrorMessage } from '../ErrorMessage';

const RegisterInput = ({
  type,
  title,
  setText,
  value,
}) => (
  <Container>
    <Text>
      {title}
      :
      <InputRegister
        type={type}
        placeholder={title}
        onChange={(e) => setText(e.target.value)}
        value={value}
      />
      <ErrorMessage input={value} title={title} />
    </Text>
  </Container>
);

export default RegisterInput;
