export const validateEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

export const validateName = (name) => {
  const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{2,}$/;
  return regex.test(name);
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

export const validateSignUp = (email, name, pass1, pass2) => {
  if (validateName(name)
        && validateEmail(email)
        && validatePassword(pass1)
        && confirmPassword(pass1, pass2)) {
    return true;
  }
  return false;
};

export const validateClient = (email, name, pass1, pass2) => {
  if (validateName(name)
        && validateEmail(email)
        && validatePassword(pass1)
        && confirmPassword(pass1, pass2)) {
    return true;
  }
  return false;
};
