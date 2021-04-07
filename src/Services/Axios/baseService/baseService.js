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

APIUsers.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem('@App:token');

    if (token) {
      /* eslint-disable */
      config.headers.Authorization = `Bearer ${token}`;
      /* eslint-enable */
      console.log(token);
    } else {
      console.log(token);
      localStorage.clear();
    }
    return config;
  } catch (err) {
    console.log(err);
    return config;
  }
});

APIClients.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem('@App:token');

    if (token) {
      /* eslint-disable */
      config.headers.Authorization = `Bearer ${token}`;
      /* eslint-enable */
      console.log(token);
    } else {
      console.log(token);
      localStorage.clear();
    }
    return config;
  } catch (err) {
    console.log(err);
    return config;
  }
});

APIDemands.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem('@App:token');

    if (token) {
      /* eslint-disable */
      config.headers.Authorization = `Bearer ${token}`;
      /* eslint-enable */
      console.log(token);
    } else {
      console.log(token);
      localStorage.clear();
    }
    return config;
  } catch (err) {
    console.log(err);
    return config;
  }
});

APISectors.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem('@App:token');

    if (token) {
      /* eslint-disable */
      config.headers.Authorization = `Bearer ${token}`;
      /* eslint-enable */
      console.log(token);
    } else {
      console.log(token);
      localStorage.clear();
    }
    return config;
  } catch (err) {
    console.log(err);
    return config;
  }
});
