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
    alert('Não foi possível carregar as categorias já criadas, tente novamente mais tarde.');
    console.error(`An unexpected error ocourred while getting demands.${error}`);
  }
  return false;
}

export async function createDemand(name, description, color) {
  try {
    const response = await APIDemands.post('demand/create', {
      name,
      description,
      color,
    });
    if (response.data.status) {
      alert('Preencha todos os campos para poder criar uma nova categoria');
    }
  } catch (error) {
    alert('Não foi possível criar a nova categoria, tente novamente mais tarde.');
    console.error(`An unexpected error ocourred while creating a new demand.${error}`);
  }
}

export async function updateDemand(name, description, color, id) {
  try {
    const response = await APIDemands.put(`demand/update/${id}`, {
      name,
      description,
      color,
    });
    if (response.data.status) {
      alert('Preencha todos os campos para poder editar uma categoria');
    }
  } catch (error) {
    alert('Não foi possível atualizar a categoria, tente novamente mais tarde.');
    console.error(`An unexpected error ocourred while updating an already created demand.${error}`);
  }
}

export async function closeDemand(id) {
  try {
    await APIDemands.put(`demand/close/${id}`);
  } catch (error) {
    alert('Não foi possível encerrar a demanda, tente novamente mais tarde.');
    console.error(`An unexpected error ocourred while closing an already created demand.${error}`);
  }
}
