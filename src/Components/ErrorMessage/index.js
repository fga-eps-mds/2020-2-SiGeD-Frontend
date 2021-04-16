import styles from './Style';
import {
  validateName, validateEmail, validatePassword, confirmPassword,
} from '../../Utils/validations';

export function ErrorMessage({ input, title }) {
  switch (title) {
    case 'Nome':
      if (input && !validateName(input)) {
        return (
          <p style={styles.text}>Credenciais Inválidas</p>
        );
      }
      break;

    case 'Email':
      if (input && !validateEmail(input)) {
        return (
          <p style={styles.text}>Credenciais Inválidas</p>
        );
      }
      break;

    case 'Senha':
      if (input && !validatePassword(input)) {
        return (
          <p style={styles.text}>Credenciais Inválidas</p>
        );
      }
      break;

    default:
      break;
  }

  return '';
}

export const PassMatches = ({ pass, confPass }) => {
  if (confPass && !confirmPassword(pass, confPass)) {
    return (
      <p style={styles.passwords}>Senhas não correspondem</p>
    );
  }
  return '';
};
