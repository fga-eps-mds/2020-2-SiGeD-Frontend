import {
  APIUsers, APIDemands, APIClients, APISectors,
} from './baseService/index';

export async function getUser(url) {
  try {
    const response = await APIUsers.get(url);
    return response;
  } catch (error) {
    if (error.response.status === 500) {
      alert('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      alert('Não foi possível carregar o usuário, tente novamente mais tarde.');
    }
    console.error(error);
  }
  return false;
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
  } catch (error) {
    if (error.response?.status === 500) {
      alert('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response?.status !== 401) {
      console.error(`An unexpected error ocourred while registering a new user.${error}`);
      alert('Email já cadastrado.');
    }
  }
}

export async function loginUser(
  inputEmail, inputPassword,
) {
  try {
    const response = await APIUsers.post('login', {
      email: inputEmail,
      pass: inputPassword,
    });
    if (response.data.message) {
      alert('Email e/ou senha inválidos.');
    } else {
      APIUsers.defaults.headers = { 'x-access-token': response.data.token };
      APIClients.defaults.headers = { 'x-access-token': response.data.token };
      APIDemands.defaults.headers = { 'x-access-token': response.data.token };
      APISectors.defaults.headers = { 'x-access-token': response.data.token };
    }
    return response.data;
  } catch (error) {
    alert('Não foi possivel fazer login. Tente novamente mais tarde.');
    console.error(error);
    return null;
  }
}

export const updateUser = async (
  inputName, inputEmail, inputRole, inputSector, id,
) => {
  try {
    await APIUsers.put(`/users/update/${id}`, {
      name: inputName,
      email: inputEmail,
      role: inputRole,
      sector: inputSector,
    });
    alert('Usuário atualizado com sucesso!');
  } catch (error) {
    if (error.response.status === 500) {
      alert('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      alert('Não foi possivel atualizar o usuário. Tente novamente mais tarde.');
    }
    console.error(`An unexpected error occurred while updating the user data.${error}`);
  }
};

export async function deleteUser(id) {
  try {
    await APIUsers.delete(`/users/delete/${id}`);
  } catch (error) {
    if (error.response.status === 500) {
      alert('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      alert(`Não foi possivel deletar o usuário.\n${error}`);
    }
    console.error(error);
  }
}

export async function recoverPassword(
  inputEmail,
) {
  try {
    await APIUsers.post('recover-password', {
      email: inputEmail,
    });
    alert('Senha enviada para o email.');
  } catch (error) {
    if (error.response.status === 400) {
      alert('Não foi possivel enviar o email de recuperação de senha. Tente novamente mais tarde.');
      console.error(error);
    } else if (error.response.status === 404) {
      alert('Não foi possivel encontrar um usuário cadastrado com este email.');
      console.error(error);
    }
  }
}

export async function changePassword(
  id, pass,
) {
  try {
    const response = await APIUsers.put(`change-password/${id}`, {
      pass,
    });
    if (response.status === 400) {
      alert('A senha deve conter pelo menos 6 caracteres');
      console.error(response.data.error);
      return null;
    }
    if (response.status === 404) {
      alert('Houve um erro ao tentar alterar a senha. Tente novamente mais tarde.');
      console.error(response.data.error);
      return null;
    }
    alert('Senha alterada com sucesso.');
    return response.data;
  } catch (error) {
    alert('Houve um erro ao tentar alterar a senha. Tente novamente mais tarde.');
    console.error(error);
    return null;
  }
}
