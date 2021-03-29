import { APISectors } from './baseService/index';

export async function getSectors() {
  try {
    const response = await APISectors.get('sector');
    return response;
  } catch (error) {
    alert('Não foi possível obter a lista de setores, tente novamente mais tarde.');
    console.error(`An unexpected error ocourred while retrieving the sectors list.${error}`);
  }
  return false;
}

export async function postSectors(
  inputName, inputDescription,
) {
  try {
    const response = await APISectors.post('sector/create', {
      name: inputName,
      description: inputDescription,
    });
    return response;
  } catch (error) {
    alert('Não foi possivel criar o cliente. Tente novamente mais tarde');
    console.error(`An unexpected error ocourred while creating a new client.${error}`);
  }
  return null;
}

export const updateSectors = async (
  inputName, inputDescription, id,
) => {
  await APISectors.put(`/sector/update/${id}`, {
    name: inputName,
    description: inputDescription,
  })
    .catch((error) => {
      alert('Não foi possivel atualizar o cliente. Tente novamente mais tarde');
      console.error(`An unexpected error ocourred while updating the client data.${error}`);
    });
};

export const deleteSector = async (id) => {
  try {
    await APISectors.delete(`/sector/delete/${id}`);
  } catch (error) {
    alert(`Não foi possivel deletar o setor.\n${error}`);
    console.error(error);
  }
};
