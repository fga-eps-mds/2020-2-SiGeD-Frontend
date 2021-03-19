import axios from 'axios';
import { BaseUrlUsers, BaseUrlClients, BaseUrlDemands } from '../../../Constants/baseUrl';

// eslint-disable-next-line
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNDk4NmRlM2ZlNWY2MDA1NDg2YmRmZCIsImlhdCI6MTYxNjE3MTAzNCwiZXhwIjoxNjE2MTcxMjc0fQ.rn8ld0u_W-H2vdxhH95zWAuRpDP_DrQIatmIGAqaPdU';

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
