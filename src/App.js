import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './Pages/LoginScreen';
import RegisterScreen from './Pages/RegisterScreen';
import ListScreen from './Pages/ListScreen';
import ClientRegisterScreen from './Pages/ClientRegisterScreen';
import ListCategories from './Pages/ListCategories';
import NavbarComp from './Components/NavbarComp';

function App() {
  return (

    <Router>
      <NavbarComp />
      <Switch>
        <Route path="/" exact component={LoginScreen} />
        <Route path="/cadastro" component={RegisterScreen} />
        <Route path="/usuarios" component={ListScreen} />
        <Route path="/cliente" component={ClientRegisterScreen} />
        <Route path="/categorias" component={ListCategories} />
      </Switch>
    </Router>

  );
}

export default App;
