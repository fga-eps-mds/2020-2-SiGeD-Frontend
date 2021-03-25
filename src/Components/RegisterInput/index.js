import React from 'react';
import { Container, Label, InputRegister } from './Style';
import { ErrorMessage } from '../ErrorMessage';

const RegisterInput = ({
  type,
  title,
  setText,
  value,
  long,
}) => (
  <Container long={long}>
    <Label>
      {title}
      :
    </Label>
    <InputRegister
      type={type}
      placeholder={title}
      onChange={(e) => setText(e.target.value)}
      value={value}
    />
    <ErrorMessage input={value} title={title} />
  </Container>
);

export default RegisterInput;
