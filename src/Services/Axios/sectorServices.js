import { APISectors } from './baseService/index';

export async function getSectors(startModal) {
  try {
    const response = await APISectors.get('sector');
    return response;
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possível obter a lista de setores, tente novamente mais tarde.');
    }
    console.error(`An unexpected error ocourred while retrieving the sectors list.${error}`);
  }
  return false;
}

export async function getFourSectors(startModal) {
  try {
    const response = await APISectors.get('/sector/newest-four');
    return response;
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possível listar os ultimos quatro setores, tente novamente mais tarde.');
    }
    console.error(`An unexpected error ocourred while retrieving the newest four sectors list.${error}`);
  }
  return false;
}

export async function getSector(url, startModal) {
  try {
    const response = await APISectors.get(url);
    return response;
  } catch (error) {
    startModal('Não foi possível obter o setor, tente novamente mais tarde.');
    console.error(`An unexpected error ocourred while retrieving the sectors list.${error}`);
  }
  return false;
}

export async function postSectors(
  inputName, inputDescription, startModal,
) {
  try {
    const response = await APISectors.post('sector/create', {
      name: inputName,
      description: inputDescription,
    });
    return response;
  } catch (error) {
    if (error.response.data.error === 11000) {
      startModal('Setor duplicado');
    } else if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possivel criar o setor. Tente novamente mais tarde');
    }
    console.error(`An unexpected error ocourred while creating a new sector.${error}`);
  }
  return null;
}

export const updateSectors = async (
  inputName, inputDescription, id, startModal,
) => {
  try {
    await APISectors.put(`/sector/update/${id}`, {
      name: inputName,
      description: inputDescription,
    })
      .catch((error) => {
        startModal('Não foi possivel atualizar o setor. Tente novamente mais tarde');
        console.error(`An unexpected error ocourred while updating the sector data.${error}`);
      });
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    }
  }
};

export const deleteSector = async (id, startModal) => {
  try {
    await APISectors.delete(`/sector/delete/${id}`);
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal(`Não foi possivel deletar o setor.\n${error}`);
    }
    console.error(error);
  }
};
