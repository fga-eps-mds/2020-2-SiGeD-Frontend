import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import {
  APIClients, APIUsers, APIDemands, APISectors,
} from '../Services/Axios/baseService';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState();

  useEffect(() => {
    const localToken = localStorage.getItem('@App:token');
    if (!token && localToken) {
      setToken(localToken);
      APIUsers.defaults.headers = { 'x-access-token': localToken };
      APIClients.defaults.headers = { 'x-access-token': localToken };
      APIDemands.defaults.headers = { 'x-access-token': localToken };
      APISectors.defaults.headers = { 'x-access-token': localToken };
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('@App:token', token);
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ token, setToken }}>
      { children }
    </UserContext.Provider>
  );
};

export default UserProvider;

export function useProfileUser() {
  const Context = useContext(UserContext);
  return { ...Context };
}
