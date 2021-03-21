import { APIUsers } from './baseService/index';

export async function getUser(url) {
  try {
    const response = await APIUsers.get(url);
    return response;
  } catch (error) {
    console.error(error);
  }
  return null;
}

export async function postUser(
  inputName, inputEmail, inputRole, inputSector, inputPassword,
) {
  try {
    await APIUsers.post('signup', {
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

export const updateUser = async (
  inputName, inputEmail, inputRole, inputSector, inputPassword, id,
) => {
  try {
    await APIUsers.put(`/users/update/${id}`, {
      name: inputName,
      email: inputEmail,
      role: inputRole,
      sector: inputSector,
      pass: inputPassword,
    });
    alert('Usuario atualizado');
  } catch (error) {
    console.error(`Não foi atualizar o cadastro do cliente.${error}`);
  }
};

export async function deleteUser(id) {
  try {
    await APIUsers.delete(`/users/delete/${id}`);
  } catch (error) {
    console.error(error);
  }
}
