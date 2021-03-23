import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (token) {
      localStorage.setItem('@App:token', token);
    }
  }, [token]);

  useEffect(() => {
    const storagedToken = localStorage.getItem('@App:token');
    if (storagedToken) {
      setToken(storagedToken);
    }
  }, []);

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
