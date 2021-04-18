import { APIDemands } from './baseService';

export async function getCategories(url) {
  try {
    const response = await APIDemands.get(url);
    return response;
  } catch (error) {
    alert('Não foi possível carregar as categorias já criadas, tente novamente mais tarde.');
    console.error(`An unexpected error ocourred while getting categories.${error}`);
  }
  return false;
}

export async function createCategory(name, description, color) {
  try {
    const response = await APIDemands.post('category/create', {
      name,
      description,
      color,
    });
    if (response.data.status) {
      alert('Preencha todos os campos para poder criar uma nova categoria');
    }
  } catch (error) {
    alert('Não foi possível criar a nova categoria, tente novamente mais tarde.');
    console.error(`An unexpected error ocourred while creating a new category.${error}`);
  }
}

export async function updateCategory(name, description, color, id) {
  try {
    const response = await APIDemands.put(`category/update/${id}`, {
      name,
      description,
      color,
    });
    if (response.data.status) {
      alert('Preencha todos os campos para poder editar uma categoria');
    }
  } catch (error) {
    alert('Não foi possível atualizar a categoria, tente novamente mais tarde.');
    console.error(`An unexpected error ocourred while updating an already created category.${error}`);
  }
}

export const deleteCategory = async (id) => {
  try {
    await APIDemands.delete(`/category/delete/${id}`);
  } catch (error) {
    alert(`Não foi possivel deletar a categoria.\n${error}`);
    console.error(error);
  }
};
export async function getDemands(url) {
  try {
    const response = await APIDemands.get(url);
    return response;
  } catch (error) {
    alert('Não foi possível carregar as demandas já criadas, tente novamente mais tarde.');
    console.error(`An unexpected error ocourred while getting demands.${error}`);
  }
  return false;
}

export async function createDemand(
  name, description, process, categoryID, sectorID, userID, clientID,
) {
  try {
    const response = await APIDemands.post('demand/create', {
      name,
      description,
      process,
      categoryID,
      sectorID,
      userID,
      clientID,
    });
    if (response.data.status) {
      alert('Preencha todos os campos para poder criar uma nova categoria');
    }
  } catch (error) {
    alert('Não foi possível criar a nova demanda, tente novamente mais tarde.');
    console.error(`An unexpected error ocourred while creating a new demand.${error}`);
  }
}

export async function updateDemand(
  name, description, process, categoryID, sectorID, userID, clientID, id,
) {
  try {
    const response = await APIDemands.put(`demand/update/${id}`, {
      name,
      description,
      process,
      categoryID,
      sectorID,
      userID,
      clientID,

    });
    if (response.data.status) {
      alert('Preencha todos os campos para poder editar uma categoria');
    }
  } catch (error) {
    alert('Não foi possível atualizar a demanda, tente novamente mais tarde.');
    console.error(`An unexpected error ocourred while updating an already created demand.${error}`);
  }
}

export async function toggleDemand(id) {
  try {
    await APIDemands.put(`demand/toggle/${id}`);
  } catch (error) {
    alert('Não foi possível encerrar a demanda, tente novamente mais tarde.');
    console.error(`An unexpected error ocourred while closing an already created demand.${error}`);
  }
}

export async function updateDemandSector(sectorID, id) {
  try {
    const response = await APIDemands.put(`demand/sectorupdate/${id}`, {
      sectorID,
    });
    if (response.data.status) {
      alert('Selecione um dos setores disponíveis');
    }
  } catch (error) {
    alert('Não foi possível atualizar o setor da demanda, tente novamente mais tarde.');
    console.error(`An unexpected error occurred while updating a demand's sector.${error}`);
  }
}

export async function forwardDemand(sectorID, id) {
  try {
    const response = await APIDemands.put(`demand/forward/${id}`, {
      sectorID,
    });
    if (response.data.status) {
      alert('Não foi possível encaminhar a demanda');
    }
  } catch (error) {
    alert('Não foi possível encaminhar a demanda para o setor desejado, tente novamente mais tarde.');
    console.error(`An unexpected error occurred while forwarding a demand to another sector.${error}`);
  }
}

export async function createDemandUpdate(
  userName,
  userSector,
  description,
  visibilityRestriction,
  id,
) {
  try {
    const response = await APIDemands.put(`demand/create-demand-update/${id}`, {
      userName,
      userSector,
      description,
      visibilityRestriction,
    });
    if (response.data.status) {
      alert('Preencha o campo de descrição da atualização para ser possível o envio.');
    }
  } catch (error) {
    alert('Não foi possível enviar a atualização da demanda, tente novamente mais tarde.');
    console.error(`An unexpected error occurred while sending a demand update.${error}`);
  }
}

export async function getDemandsWithClientsNames(url) {
  try {
    const response = await APIDemands.get(url);
    return response;
  } catch (error) {
    alert('Não foi possível carregar as categorias já criadas com os nomes dos clientes, tente novamente mais tarde.');
    console.error(`An unexpected error ocourred while getting demands with clients names.${error}`);
  }
  return false;
}
