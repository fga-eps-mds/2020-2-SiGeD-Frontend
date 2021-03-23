import { APIClients } from './baseService/index';

export async function getClients(url) {
  try {
    const response = await APIClients.get(url);
    return response;
  } catch (error) {
    console.error(error);
  }
  return null;
}

export async function postClient(
  inputName, inputEmail, inputCpf, inputPhone, inputCity, officeOption, policeStationOption,
) {
  try {
    const response = await APIClients.post('clients/create', {
      name: inputName,
      email: inputEmail,
      cpf: inputCpf,
      phone: inputPhone,
      city: inputCity,
      office: officeOption,
      policeStation: policeStationOption,
    });
    return response;
  } catch (error) {
    console.error(`An unexpected error ocourred while creating a new client.${error}`);
  }
  return null;
}

export const updateClient = async (
  inputName, inputEmail, inputCpf, inputPhone, inputCity, officeOption, policeStationOption, id,
) => {
  await APIClients.put(`/clients/update/${id}`, {
    name: inputName,
    email: inputEmail,
    cpf: inputCpf,
    phone: inputPhone,
    city: inputCity,
    office: officeOption,
    policeStation: policeStationOption,
  })
    .catch((error) => {
      console.error(`An unexpected error ocourred while updating the client data.${error}`);
    });
};
