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

export async function postClient(
  inputName, inputEmail, inputCpf, inputPhone, inputSecondaryPhone,
  inputAddress, officeOption, inputLocation, startModal,
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
    });
    return response;
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possivel criar o cliente. Tente novamente mais tarde');
    }
    console.error(`An unexpected error ocourred while creating a new client.${error}`);
  }
  return false;
}

export const updateClient = async (
  inputName, inputEmail, inputCpf, inputPhone, inputSecondaryPhone,
  inputAddress, officeOption, locationOption, id, startModal,
) => {
  await APIClients.put(`/clients/update/${id}`, {
    name: inputName,
    email: inputEmail,
    cpf: inputCpf,
    phone: inputPhone,
    secondaryPhone: inputSecondaryPhone,
    address: inputAddress,
    office: officeOption,
    location: locationOption,
  })
    .catch((error) => {
      if (error.response.status === 500) {
        startModal('O tempo da sua sessão expirou, faça o login novamente');
      } else if (error.response.status !== 401) {
        startModal('Não foi possivel atualizar o cliente. Tente novamente mais tarde');
      }
      console.error(`An unexpected error ocourred while updating the client data.${error}`);
    });
};

export const toggleStatus = async (id, startModal) => {
  try {
    await APIClients.put(`/clients/toggleStatus/${id}`);
  } catch (error) {
    console.error(error);
    startModal('Não foi possivel desativar/reativar o cliente, tente novamente mais tarde.');
  }
};
