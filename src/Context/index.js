import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import {
  APIClients, APIUsers, APIDemands, APISectors,
} from '../Services/Axios/baseService';
import { loginUser, changePassword } from '../Services/Axios/userServices';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const handleCloseMessage = () => setShowMessage(false);
  const handleShowMessage = () => setShowMessage(true);

  useEffect(() => {
    const storagedToken = localStorage.getItem('@App:token');
    const storagedUser = JSON.parse(localStorage.getItem('@App:user'));

    if (!token && storagedToken && storagedUser) {
      setToken(storagedToken);
      setUser(storagedUser);
      APIUsers.defaults.headers = { 'x-access-token': storagedToken };
      APIClients.defaults.headers = { 'x-access-token': storagedToken };
      APIDemands.defaults.headers = { 'x-access-token': storagedToken };
      APISectors.defaults.headers = { 'x-access-token': storagedToken };
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('@App:token', token);
      localStorage.setItem('@App:user', user);
    }
  }, [token, user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem('@App:user', JSON.stringify(user));
    }
  }, [user]);

  const handleLogin = async (email, password) => {
    const userInfo = await loginUser(email, password);
    setToken(userInfo?.token);
    setUser(userInfo?.profile);
  };

  const handleChangePassword = async (password) => {
    const userInfo = await changePassword(user._id, password);
    if (userInfo) {
      setUser(userInfo);
    }
  };

  const startModal = (text) => {
    setMessage(text);
    handleShowMessage();
  };

  return (
    <UserContext.Provider value={{
      token, setToken, user, setUser, handleLogin, startModal, handleChangePassword,
    }}
    >
      { children }
      <ModalMessage
        show={showMessage}
        handleClose={handleCloseMessage}
        message={message}
      />
    </UserContext.Provider>
  );
};

export default UserProvider;

export function useProfileUser() {
  const Context = useContext(UserContext);
  return { ...Context };
}
