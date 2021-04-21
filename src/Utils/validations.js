export const validateEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

export const validateName = (name) => {
  const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{2,}$/;
  return regex.test(name);
};

export const validateCpf = (cpf) => {
  const regex = /^[0-9]{11}$/;
  return regex.test(cpf);
};

export const validatePhone = (phone) => {
  const regex = /^[0-9]{8,}$/;
  return regex.test(phone);
};

export const validatePassword = (pass) => {
  if (pass.length >= 6) {
    return true;
  }
  return false;
};

export const confirmPassword = (pass1, pass2) => {
  if (pass2 === pass1) {
    return true;
  }
  return false;
};

export const validateSignUp = (email, name) => {
  if (validateName(name)
    && validateEmail(email)) {
    return true;
  }
  return false;
};

export const validateFields = (inputName, inputEmail, inputCpf,
  inputPhone, inputSecondaryPhone) => {
  const message = [];

  if (validateName(inputName) === false) {
    message.push('Nome inválido.');
  } if (validateCpf(inputCpf) === false) {
    message.push('CPF inválido. Utilize somente os digitos.');
  } if (validateEmail(inputEmail) === false) {
    message.push('Email inválido.');
  } if (validatePhone(inputPhone) === false) {
    message.push('Telefone inválido. Minimo de 8 digitos');
  } if (validatePhone(inputSecondaryPhone) === false) {
    message.push('Telefone secundario inválido. Minimo de 8 digitos');
  }

  return message;
};

export const validateOpen = (open) => {
  const regex = /^(true|false)$/;
  return regex.test(open);
};
