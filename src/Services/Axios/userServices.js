import { apiUsers } from './baseService';

// eslint-disable-next-line import/prefer-default-export
export async function getUser() {
  try {
    const response = await apiUsers.get('users');
    console.log(response.data);
    console.log('chegou aqui!');
  } catch (error) {
    console.error(`Não foi possível listar as categorias.${error}`);
  }
}

export async function postUser(
  inputName, inputEmail, inputRole, inputSector, inputPassword,
) {
  try {
    await apiUsers.post('signup', {
      name: inputName,
      email: inputEmail,
      role: inputRole,
      sector: inputSector,
      pass: inputPassword,
    });
    alert('Usuario criado');
  } catch (error) {
    console.error(`Não foi possivel cadastrar o cliente.${error}`);
  }
}
