import React, {
  createContext,
  useContext,
  useState,
} from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);

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
