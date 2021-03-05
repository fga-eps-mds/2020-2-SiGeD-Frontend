import styles from './style';
import {
  ValidateName, ValidateEmail, ValidatePassword, ConfirmPassword,
} from '../Validations';

export function ErrorMessage({ input, title }) {
  switch (title) {
    case 'Nome':
      if (input && !ValidateName(input)) {
        return (
          <div style={styles.text}>Credenciais Inválidas</div>
        );
      }
      break;

    case 'Email':
      if (input && !ValidateEmail(input)) {
        return (
          <div style={styles.text}>Credenciais Inválidas</div>
        );
      }
      break;

    case 'Senha':
      if (input && !ValidatePassword(input)) {
        return (
          <div style={styles.text}>Credenciais Inválidas</div>
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
      <div style={styles.passwords}>Senhas não correspondem</div>
    );
  }
  return '';
};
