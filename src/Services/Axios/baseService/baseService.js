import axios from 'axios';
import { BaseUrlUsers, BaseUrlClients, BaseUrlDemands } from '../../../Constants/baseUrl';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTQxY2UyM2FlZTVkMDA0MDI2NDk2MSIsImlhdCI6MTYxNjUxMjgxOSwiZXhwIjoxNjE2NTEzMDU5fQ.OYov1BspB7gohL9mOBvmEwC_QYMDMQftHm2Kp0kGcdY';

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
