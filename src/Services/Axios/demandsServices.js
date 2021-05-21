import { APIDemands } from './baseService';

export async function getCategories(url, startModal) {
  try {
    const response = await APIDemands.get(url);
    return response;
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possível carregar as categorias já criadas, tente novamente mais tarde.');
    }
    console.error(`An unexpected error ocourred while getting categories.${error}`);
  }
  return false;
}

export async function createCategory(name, description, color, startModal) {
  try {
    const response = await APIDemands.post('category/create', {
      name,
      description,
      color,
    });
    if (response.data.status) {
      startModal('Preencha todos os campos para poder criar uma nova categoria');
    }
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possível criar a nova categoria, tente novamente mais tarde.');
    }
    console.error(`An unexpected error ocourred while creating a new category.${error}`);
  }
}

export async function updateCategory(name, description, color, id, startModal) {
  try {
    const response = await APIDemands.put(`category/update/${id}`, {
      name,
      description,
      color,
    });
    if (response.data.status) {
      startModal('Preencha todos os campos para poder editar uma categoria');
    }
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possível atualizar a categoria, tente novamente mais tarde.');
    }
    console.error(`An unexpected error ocourred while updating an already created category.${error}`);
  }
}

export const deleteCategory = async (id, startModal) => {
  try {
    await APIDemands.delete(`/category/delete/${id}`);
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal(`Não foi possivel deletar a categoria.\n${error}`);
    }
    console.error(error);
  }
};

export async function getDemands(url, startModal) {
  try {
    const response = await APIDemands.get(url);
    return response;
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possível carregar as demandas já criadas, tente novamente mais tarde.');
    }
    console.error(`An unexpected error ocourred while getting demands.${error}`);
  }
  return false;
}

export async function getFourDemands(startModal) {
  try {
    const response = await APIDemands.get('/demand/newest-four');
    return response;
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possível listar as últimas quatro demandas, tente novamente mais tarde.');
    }
    console.error(`An unexpected error ocourred while getting the last four demands.${error}`);
  }
  return false;
}

export async function createDemand(
  name, description, process, categoryID, sectorID, userID, clientID, startModal, demandDate,
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
      demandDate,
    });
    if (response.data.status) {
      startModal('Preencha todos os campos para poder criar uma nova categoria');
    }
    return response;
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possível criar a nova demanda, tente novamente mais tarde.');
    }
    console.error(`An unexpected error ocourred while creating a new demand.${error}`);
    return false;
  }
}

export async function updateDemand(
  name, description, process, categoryID, sectorID, userID, clientID, id, startModal,
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
}

export async function toggleDemand(id, startModal) {
  try {
    await APIDemands.put(`demand/toggle/${id}`);
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possível encerrar a demanda, tente novamente mais tarde.');
    }
    console.error(`An unexpected error ocourred while closing an already created demand.${error}`);
  }
}

export async function updateDemandSector(sectorID, id, startModal) {
  try {
    const response = await APIDemands.put(`demand/sectorupdate/${id}`, {
      sectorID,
    });
    if (response.data.status) {
      startModal('Selecione um dos setores disponíveis');
    }
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possível atualizar o setor da demanda, tente novamente mais tarde.');
    }
    console.error(`An unexpected error occurred while updating a demand's sector.${error}`);
  }
}

export async function forwardDemand(sectorID, id, startModal) {
  try {
    const response = await APIDemands.put(`demand/forward/${id}`, {
      sectorID,
    });
    if (response.data.status) {
      startModal('Não foi possível encaminhar a demanda');
    }
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possível encaminhar a demanda para o setor desejado, tente novamente mais tarde.');
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
  startModal,
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
      startModal('Preencha o campo de descrição da atualização para ser possível o envio.');
    }
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possível enviar a atualização da demanda, tente novamente mais tarde.');
    }
    console.error(`An unexpected error occurred while sending a demand update.${error}`);
  }
}

export async function getDemandsWithClientsNames(url, startModal) {
  try {
    const response = await APIDemands.get(url);
    return response;
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possível carregar as categorias já criadas com os nomes dos clientes, tente novamente mais tarde.');
    }
    console.error(`An unexpected error ocourred while getting demands with clients names.${error}`);
  }
  return false;
}

export async function getDemandsStatistics(url, startModal) {
  try {
    const response = await APIDemands.get(url);
    return response;
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possível carregar as estatísticas');
      console.error(`An unexpected error ocourred while getting demands with clients names.${error}`);
    }
  }
  return false;
}

export async function deleteDemandUpdate(id, updateListID, startModal) {
  try {
    const response = await APIDemands.put(`demand/delete-demand-update/${id}`, {
      updateListID,
    });
    if (response.data.status) {
      startModal('Não foi possível deletar a atualização.');
    }
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possível deletar a atualização da demanda, tente novamente mais tarde.');
    }
    console.error(`An unexpected error occurred while deleting a demand update.${error}`);
  }
}

export async function updateDemandUpdate(
  userName,
  userSector,
  userID,
  description,
  id,
  updateListID,
  visibilityRestriction,
  important,
  startModal,
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
      startModal('Não foi possível editar a atualização.');
    }
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possível editar a atualização da demanda, tente novamente mais tarde.');
    }
    console.error(`An unexpected error occurred while updating a demand update.${error}`);
  }
}

export async function createAlert(
  name, description, date, alertClient, demandID, sectorID, startModal,
) {
  try {
    const response = await APIDemands.post('alert/create', {
      name,
      description,
      date,
      alertClient,
      demandID,
      sectorID,
    });
    startModal('Alerta criado com sucesso!');
    return response?.data;
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente.');
    } else if (error.response.data.status) {
      startModal('Preencha todos os campos para poder criar um novo alerta.');
    } else if (error.response.status !== 401) {
      startModal('Não foi possível criar um novo alerta, tente novamente mais tarde.');
    }
    console.error(`An unexpected error ocourred while creating a new alert.${error}`);
    return null;
  }
}

export async function getAlerts(url, startModal) {
  try {
    const response = await APIDemands.get(url);
    return response;
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possível carregar os alertas já criados, tente novamente mais tarde.');
    }
    console.error(`An unexpected error ocourred while getting alerts.${error}`);
  }
  return false;
}

export async function getAlertsByDemand(id, startModal) {
  try {
    const response = await APIDemands.get(`alert/demand/${id}`);
    return response.data;
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possível carregar os alertas dessa demanda, tente novamente mais tarde.');
    }
    console.error(`An unexpected error ocourred while getting alerts by demand.${error}`);
  }
  return null;
}

export async function getAlertsBySector(id, startModal) {
  try {
    const response = await APIDemands.get(`alert/sector/${id}`);
    return response.data;
  } catch (error) {
    if (error.response.status === 500) {
      startModal('O tempo da sua sessão expirou, faça o login novamente');
    } else if (error.response.status !== 401) {
      startModal('Não foi possível carregar os alertas desse setor, tente novamente mais tarde.');
    }
    console.error(`An unexpected error ocourred while getting alerts by sector.${error}`);
  }
  return null;
}
