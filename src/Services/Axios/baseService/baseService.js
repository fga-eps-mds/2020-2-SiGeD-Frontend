import axios from 'axios';
import { BaseUrlUsers, BaseUrlClients, BaseUrlDemands } from '../../../Constants/baseUrl';

const token = localStorage.getItem('@App:token');

export const APIUsers = axios.create({
  baseURL: BaseUrlUsers,
  headers: { 'x-access-token': token },
});

export const APIClients = axios.create({
  baseURL: BaseUrlClients,
});

export const APIDemands = axios.create({
  baseURL: BaseUrlDemands,
});
