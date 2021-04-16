import axios from 'axios';
import {
  BaseUrlUsers, BaseUrlClients, BaseUrlDemands, BaseUrlSectors,
} from '../../../Constants/baseUrl';

export const APIUsers = axios.create({
  baseURL: BaseUrlUsers,
});

export const APIClients = axios.create({
  baseURL: BaseUrlClients,
});

export const APIDemands = axios.create({
  baseURL: BaseUrlDemands,
});

export const APISectors = axios.create({
  baseURL: BaseUrlSectors,
});
