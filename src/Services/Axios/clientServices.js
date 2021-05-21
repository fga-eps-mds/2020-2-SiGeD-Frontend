import { APIClients } from './baseService/index';

export async function getClients(url, startModal) {
  try {
    const response = await APIClients.get(url);
    return response;
  } catch (error) {
    if (error.response?.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response?.status !== 401) {
      startModal('Não foi possível obter a lista de clientes, tente novamente mais tarde.');
    }
    console.error(`An unexpected error ocourred while retrieving the clients list.${error}`);
  }
  return false;
}

export async function getFourClients(startModal) {
  try {
    const response = await APIClients.get('/clients/newest-four');
    return response;
  } catch (error) {
    if (error.response?.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response?.status !== 401) {
      startModal('Não foi possível listar os últimos quatro clientes, tente novamente mais tarde.');
    }
    console.error(`An unexpected error ocourred while retrieving newest four clients list.${error}`);
  }
  return false;
}

export async function postClient(
  inputName, inputEmail, inputCpf, inputPhone, inputSecondaryPhone,
  inputAddress, officeOption, inputLocation, selectedFeatures,
  startModal, userContext, baseImage,
) {
  try {
    const response = await APIClients.post('clients/create', {
      name: inputName,
      email: inputEmail,
      cpf: inputCpf,
      phone: inputPhone,
      secondaryPhone: inputSecondaryPhone,
      address: inputAddress,
      office: officeOption,
      location: inputLocation,
      features: selectedFeatures,
      userID: userContext,
      image: baseImage,
    });
    return response;
  } catch (error) {
    if (error.response.status === 400 && error.response.data.message.email) {
      startModal('Email já cadastrado');
    } else if (error.response.status === 400 && error.response.data.message.cpf) {
      startModal('CPF já cadastrado');
    } else if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possivel criar o cliente. Tente novamente mais tarde');
    }
    console.error(`An unexpected error ocourred while creating a new client.${error}`);
  }
  return false;
}

export async function updateClient(
  inputName, inputEmail, inputCpf, inputPhone, inputSecondaryPhone,
  inputAddress, officeOption, locationOption, features, id, startModal, userContext,
  baseImage,
) {
  try {
    const response = await APIClients.put(`/clients/update/${id}`, {
      name: inputName,
      email: inputEmail,
      cpf: inputCpf,
      phone: inputPhone,
      secondaryPhone: inputSecondaryPhone,
      address: inputAddress,
      office: officeOption,
      location: locationOption,
      userID: userContext,
      features,
      image: baseImage,
    });
    return response;
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possivel atualizar o cliente. Tente novamente mais tarde');
    }
    console.error(`An unexpected error ocourred while updating the client data.${error}`);
  }
  return false;
}

export const toggleStatus = async (id, startModal) => {
  try {
    await APIClients.put(`/clients/toggleStatus/${id}`);
  } catch (error) {
    console.error(error);
    startModal('Não foi possivel desativar/reativar o cliente, tente novamente mais tarde.');
  }
};

export const getFeatures = async (url, startModal) => {
  try {
    const res = await APIClients.get(url);
    return res;
  } catch (error) {
    if (error.response?.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response?.status !== 401) {
      startModal('Não foi possível obter a lista de caracteristicas, tente novamente mais tarde.');
    }
    console.error(`An unexpected error ocourred while retrieving the features list.${error}`);
  }
  return false;
};

export const getClientFeatures = async (featuresList, startModal) => {
  try {
    const res = await APIClients.post('/featuresbyid', {
      featuresList,
    });
    return res;
  } catch (error) {
    if (error.response?.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response?.status !== 401) {
      startModal('Não foi possível obter a lista de categorias do cliente, tente novamente mais tarde.');
    }
    console.error(`An unexpected error ocourred while retrieving the client features list.${error}`);
  }
  return false;
};

export const createFeature = async (
  name, description, color, startModal,
) => {
  try {
    const res = await APIClients.post('feature/create', {
      name,
      description,
      color,
    });
    if (res.data.status) {
      startModal('Preencha todos os campos para poder criar uma nova caracteristica');
    }
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possível criar a nova caracteristica, tente novamente mais tarde.');
    }
    console.error(`An unexpected error ocourred while creating a new feature.${error}`);
  }
  return false;
};

export const updateFeature = async (
  name, description, color, id, startModal,
) => {
  try {
    const res = await APIClients.put(`feature/update/${id}`, {
      name,
      description,
      color,
    });
    if (res.data.status) {
      startModal('Preencha todos os campos para poder editar uma categoria');
    }
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possível atualizar a demanda, tente novamente mais tarde.');
    }
    console.error(`An unexpected error ocourred while updating an already created demand.${error}`);
  }
};

export const deleteFeature = async (id, startModal) => {
  try {
    const res = await APIClients.delete(`/feature/delete/${id}`);
    return res;
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal(`Não foi possivel deletar a categoria.\n${error}`);
    }
    console.error(error);
  }
  return false;
};
