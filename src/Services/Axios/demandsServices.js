import { apiDemands, apiUsers } from './baseService';

// eslint-disable-next-line import/prefer-default-export
export async function getCategories() {
  try {
    const response = await apiDemands.get('category');
    return response.data;
  } catch (error) {
    console.error(`Não foi possível listar as categorias.${error}`);
  }
  return null;
}

// Está no ReacModal

export async function createCategory(name, description, color, valid) {
  try {
    const response = await apiUsers.post('http://localhost:3003/category/create', {
      name,
      description,
      color,
    });
    console.log(response.data);
    if (response.data.status) {
      alert('Preencha todos os campos para poder criar uma nova categoria');
      return !valid;
    }
    return valid;
  } catch (error) {
    alert('Não foi possível criar a nova categoria, tente novamente.');
  }
  return false;
}

export async function updateCategory(id, name, description, color, valid) {
  try {
    const response = await apiDemands.put(`http://localhost:3003/category/update/${id}`, {
      name,
      description,
      color,
    });
    console.log(response.data);
    if (response.data.status) {
      alert('Preencha todos os campos para poder atualizar esta categoria');
      return !valid;
    }
    return valid;
  } catch (error) {
    alert('Não foi possível atualizar a categoria, tente novamente.');
  }
  return false;
}
