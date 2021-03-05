export const ValidateEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

export const ValidateName = (name) => {
  const regex = /^[a-zA-Z ]{2,30}$/;
  return regex.test(name);
};

export const ValidatePassword = (pass) => {
  if (pass.length >= 6) {
    return true;
  }
  return false;
};

export const ConfirmPassword = (pass1, pass2) => {
  if (pass2 === pass1) {
    return true;
  }
  return false;
};

const ValidateSignUp = (email, name, pass1, pass2) => {
  if (ValidateName(name)
        && ValidateEmail(email)
        && ValidatePassword(pass1)
        && ConfirmPassword(pass1, pass2)) {
    return true;
  }
  return false;
};

export default ValidateSignUp;
