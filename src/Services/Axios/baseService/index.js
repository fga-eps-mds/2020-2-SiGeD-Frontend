import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNDk4NmRlM2ZlNWY2MDA1NDg2YmRmZCIsImlhdCI6MTYxNjEwMTM0OSwiZXhwIjoxNjE2MTAxNTg5fQ.SvNlUXQkuVfCNUcB2aga5rUL6AqeqqnEk48-XwCSgA4';

export const apiUsers = axios.create({
  baseURL: 'http://localhost:3001',
  headers: { 'x-access-token': token },
});

export const apiClients = axios.create({
  baseURL: 'http://localhost:3002',
});

export const apiDemands = axios.create({
  baseURL: 'http://localhost:3003',
});
