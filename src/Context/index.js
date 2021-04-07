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
  const [role, setRole] = useState();

  useEffect(() => {
    const localToken = localStorage.getItem('@App:token');
    const localRole = localStorage.getItem('userRole');
    if (!token && localToken && localRole) {
      setRole(localRole);
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
      localStorage.setItem('userRole', role);
    }
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        role,
        setRole,
      }}
    >
      { children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export function useProfileUser() {
  const Context = useContext(UserContext);
  return { ...Context };
}
