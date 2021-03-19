import { apiClients } from './baseService';

// eslint-disable-next-line import/prefer-default-export
export async function gotClients() {
  try {
    const response = await apiClients.get('clients');
    return response.data;
  } catch (error) {
    console.log(error);
  }
  return null;
}

// eslint-disable-next-line import/prefer-default-export
export async function gotClient(id) {
  try {
    const response = await apiClients.get(`clients/${id}`);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

// eslint-disable-next-line import/prefer-default-export
export async function postClient(
  inputName, inputEmail, inputCpf, inputPhone, inputCity, officeOption, policeStationOption,
) {
  try {
    await apiClients.post('clients/create', {
      name: inputName,
      email: inputEmail,
      cpf: inputCpf,
      phone: inputPhone,
      city: inputCity,
      office: officeOption,
      policeStation: policeStationOption,
    });
    // console.log(inputName);
    alert('Usuario criado.');
  } catch (error) {
    console.error(`Não foi possivel cadastrar o cliente.${error}`);
  }
}
