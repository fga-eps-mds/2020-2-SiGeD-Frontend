import {
  APIUsers, APIDemands, APIClients, APISectors,
} from './baseService/index';

export async function getUser(url, startModal) {
  try {
    const response = await APIUsers.get(url);
    return response;
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possível carregar o usuário, tente novamente mais tarde.');
    }
    console.error(error);
  }
  return false;
}

export async function getFourUsers(startModal) {
  try {
    const response = await APIUsers.get('/users/newest-four');
    return response;
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possível listar os últimos quatro usuários, tente novamente mais tarde.');
    }
    console.error(error);
  }
  return false;
}

export async function postUser(
  inputName, inputEmail, inputRole, inputSector, baseImage, startModal,
) {
  console.log('axios', baseImage);
  try {
    await APIUsers.post('signup', {
      name: inputName,
      email: inputEmail,
      role: inputRole,
      sector: inputSector,
      image: baseImage,
    });
    startModal('Usuário cadastrado com sucesso!');
  } catch (error) {
    if (error.response?.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response?.status !== 401) {
      startModal('Email já cadastrado.');
      console.error(`An unexpected error ocourred while registering a new user.${error}`);
    }
  }
}

export async function loginUser(
  inputEmail, inputPassword, startModal,
) {
  try {
    const response = await APIUsers.post('login', {
      email: inputEmail,
      pass: inputPassword,
    });
    if (response.data.message) {
      startModal('Email e/ou senha inválidos.');
    } else {
      APIUsers.defaults.headers = { 'x-access-token': response.data.token };
      APIClients.defaults.headers = { 'x-access-token': response.data.token };
      APIDemands.defaults.headers = { 'x-access-token': response.data.token };
      APISectors.defaults.headers = { 'x-access-token': response.data.token };
    }
    return response.data;
  } catch (error) {
    startModal('Não foi possivel fazer login. Tente novamente mais tarde.');
    console.error(error);
    return null;
  }
}

export const updateUser = async (
  inputName, inputEmail, inputRole, inputSector, baseImage, id, startModal,
) => {
  try {
    await APIUsers.put(`/users/update/${id}`, {
      name: inputName,
      email: inputEmail,
      role: inputRole,
      sector: inputSector,
      image: baseImage,
    });
    startModal('Usuário atualizado com sucesso!');
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possivel atualizar o usuário. Tente novamente mais tarde.');
    }
    console.error(`An unexpected error occurred while updating the user data.${error}`);
  }
};

export async function deleteUser(id, startModal) {
  try {
    await APIUsers.delete(`/users/delete/${id}`);
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal(`Não foi possivel deletar o usuário.\n${error}`);
    }
    console.error(error);
  }
}

export async function recoverPassword(
  inputEmail, startModal,
) {
  try {
    await APIUsers.post('recover-password', {
      email: inputEmail,
    });
    startModal('Senha enviada para o email.');
  } catch (error) {
    if (error.response.status === 400) {
      startModal('Não foi possivel enviar o email de recuperação de senha. Tente novamente mais tarde.');
      console.error(error);
    } else if (error.response.status === 404) {
      startModal('Não foi possivel encontrar um usuário cadastrado com este email.');
      console.error(error);
    }
  }
}

export async function changePassword(
  id, pass, startModal,
) {
  try {
    const response = await APIUsers.put(`change-password/${id}`, {
      pass,
    });
    if (response.status === 400) {
      startModal('A senha deve conter pelo menos 6 caracteres');
      console.error(response.data.error);
      return null;
    }
    if (response.status === 404) {
      startModal('Houve um erro ao tentar alterar a senha. Tente novamente mais tarde.');
      console.error(response.data.error);
      return null;
    }
    startModal('Senha alterada com sucesso.');
    return response.data;
  } catch (error) {
    startModal('Houve um erro ao tentar alterar a senha. Tente novamente mais tarde.');
    console.error(error);
    return null;
  }
}
