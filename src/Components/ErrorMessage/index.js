import styles from './style';
import {
  ValidateName, ValidateEmail, ValidatePassword, ConfirmPassword,
} from '../Validations';

export function ErrorMessage({ input, title }) {
  switch (title) {
    case 'Nome':
      if (input && !ValidateName(input)) {
        return (
          <p style={styles.text}>Credenciais Inválidas</p>
        );
      }
      break;

    case 'Email':
      if (input && !ValidateEmail(input)) {
        return (
          <p style={styles.text}>Credenciais Inválidas</p>
        );
      }
      break;

    case 'Senha':
      if (input && !ValidatePassword(input)) {
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
  if (confPass && !ConfirmPassword(pass, confPass)) {
    return (
      <p style={styles.passwords}>Senhas não correspondem</p>
    );
  }
  return '';
};
