import { APIDemands } from './baseService';

export async function getCategories(url) {
  try {
    const response = await APIDemands.get(url);
    return response;
  } catch (error) {
    if (error.response.status === 500) {
      alert('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      alert('Não foi possível carregar as categorias já criadas, tente novamente mais tarde.');
    }
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
    if (error.response.status === 500) {
      alert('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      alert('Não foi possível criar a nova categoria, tente novamente mais tarde.');
    }
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
    if (error.response.status === 500) {
      alert('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      alert('Não foi possível atualizar a categoria, tente novamente mais tarde.');
    }
    console.error(`An unexpected error ocourred while updating an already created category.${error}`);
  }
}

export const deleteCategory = async (id) => {
  try {
    await APIDemands.delete(`/category/delete/${id}`);
  } catch (error) {
    if (error.response.status === 500) {
      alert('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      alert(`Não foi possivel deletar a categoria.\n${error}`);
    }
    console.error(error);
  }
};
export async function getDemands(url) {
  try {
    const response = await APIDemands.get(url);
    return response;
  } catch (error) {
    if (error.response.status === 500) {
      alert('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      alert('Não foi possível carregar as demandas já criadas, tente novamente mais tarde.');
    }
    console.error(`An unexpected error ocourred while getting demands.${error}`);
  }
  return false;
}

export async function getFilterYearDemands(url) {
  try {
    const response = await APIDemands.get(url);
    return response;
  } catch (error) {
    alert('Não foi possível filtrar as demandas pelo ano, tente novamente mais tarde.');
    console.error(`An unexpected error ocourred while getting demands by year.${error}`);
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
    if (error.response.status === 500) {
      alert('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      alert('Não foi possível criar a nova demanda, tente novamente mais tarde.');
    }
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
    if (error.response.status === 500) {
      alert('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      alert('Não foi possível atualizar a demanda, tente novamente mais tarde.');
    }
    console.error(`An unexpected error ocourred while updating an already created demand.${error}`);
  }
}

export async function toggleDemand(id) {
  try {
    await APIDemands.put(`demand/toggle/${id}`);
  } catch (error) {
    if (error.response.status === 500) {
      alert('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      alert('Não foi possível encerrar a demanda, tente novamente mais tarde.');
    }
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
    if (error.response.status === 500) {
      alert('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      alert('Não foi possível atualizar o setor da demanda, tente novamente mais tarde.');
    }
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
    if (error.response.status === 500) {
      alert('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      alert('Não foi possível encaminhar a demanda para o setor desejado, tente novamente mais tarde.');
    }
    console.error(`An unexpected error occurred while forwarding a demand to another sector.${error}`);
  }
}

export async function createDemandUpdate(
  userName,
  userSector,
  userID,
  description,
  visibilityRestriction,
  id,
  important,
) {
  try {
    const response = await APIDemands.put(`demand/create-demand-update/${id}`, {
      userName,
      userSector,
      userID,
      description,
      visibilityRestriction,
      important,
    });
    if (response.data.status) {
      alert('Preencha o campo de descrição da atualização para ser possível o envio.');
    }
  } catch (error) {
    if (error.response.status === 500) {
      alert('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      alert('Não foi possível enviar a atualização da demanda, tente novamente mais tarde.');
    }
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

export async function deleteDemandUpdate(id, updateListID) {
  try {
    const response = await APIDemands.put(`demand/delete-demand-update/${id}`, {
      updateListID,
    });
    if (response.data.status) {
      alert('Não foi possível deletar a atualização.');
    }
  } catch (error) {
    if (error.response.status === 500) {
      alert('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      alert('Não foi possível deletar a atualização da demanda, tente novamente mais tarde.');
    }
    console.error(`An unexpected error occurred while deleting a demand update.${error}`);
  }
}

export async function updateDemandUpdate(
  userName, userSector, userID, description, id, updateListID, visibilityRestriction, important,
) {
  try {
    const response = await APIDemands.put(`demand/update-demand-update/${id}`, {
      userName,
      userSector,
      userID,
      description,
      visibilityRestriction,
      updateListID,
      important,
    });
    if (response.data.status) {
      alert('Não foi possível editar a atualização.');
    }
  } catch (error) {
    if (error.response.status === 500) {
      alert('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      alert('Não foi possível editar a atualização da demanda, tente novamente mais tarde.');
    }
    console.error(`An unexpected error occurred while updating a demand update.${error}`);
  }
}
