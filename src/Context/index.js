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
import ModalMessage from '../Components/ModalMessage';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const handleCloseMessage = () => setShowMessage(false);
  const handleShowMessage = () => setShowMessage(true);
  const [alertState, setAlertState] = useState(true);

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

  const startModal = (text) => {
    setMessage(text);
    handleShowMessage();
  };

  const changeAlertState = () => {
    setAlertState(!alertState);
  };

  const handleChangePassword = async (password) => {
    const userInfo = await changePassword(user._id, password, startModal);
    if (userInfo) {
      setUser(userInfo);
    }
  };

  const handleLogin = async (email, password) => {
    const userInfo = await loginUser(email, password, startModal);
    if (!userInfo.message) {
      setToken(userInfo?.token);
      setUser(userInfo?.profile);
    }
  };

  return (
    <UserContext.Provider value={{
      token,
      setToken,
      user,
      setUser,
      handleLogin,
      startModal,
      handleChangePassword,
      changeAlertState,
      alertState,
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
