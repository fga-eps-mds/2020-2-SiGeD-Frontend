import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './Pages/LoginScreen';
import RegisterScreen from './Pages/RegisterScreen';
import ListScreen from './Pages/ListScreen';
import ClientRegisterScreen from './Pages/ClientRegisterScreen';
import ListCategories from './Pages/ListCategories';
import NavbarComp from './Components/NavbarComp';
import ClientUpdateScreen from './Pages/ClientUpdateScreen';
import ClientListScreen from './Pages/ClientListScreen';
import ClientProfileScreen from './Pages/ClientProfileScreen';
import UserUpdateScreen from './Pages/UserUpdateScreen';
import UserProvider, { useProfileUser } from './Context';

function App() {
  const { token } = useProfileUser();

  return (
    <UserProvider>
      <Router>
        <NavbarComp />
        {!token
          ? (
            <Switch>
              <Route path="/" exact component={LoginScreen} />
            </Switch>
          )
          : (
            <Switch>
              <Route path="/cadastro" component={RegisterScreen} />
              <Route path="/usuarios/editar/:id" component={UserUpdateScreen} />
              <Route path="/usuarios" component={ListScreen} />
              <Route path="/cliente" component={ClientRegisterScreen} />
              <Route path="/categorias" component={ListCategories} />
              <Route path="/editar/:id" component={ClientUpdateScreen} />
              <Route path="/clientes" component={ClientListScreen} />
              <Route path="/perfil/:id" component={ClientProfileScreen} />
            </Switch>
          )}
      </Router>
    </UserProvider>
  );
}

export default App;
