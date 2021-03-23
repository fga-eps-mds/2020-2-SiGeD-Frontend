import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import { APIUsers } from '../Services/Axios/baseService';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState();

  useEffect(() => {
    const localToken = localStorage.getItem('@App:token');
    if (!token && localToken) {
      setToken(localToken);
      APIUsers.defaults.headers = { 'x-access-token': localToken };
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('@App:token', token);
    }
    console.log(token);
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
