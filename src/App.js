import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComp from './Components/NavbarComp';
import LoginScreen from './Pages/LoginScreen';
import RegisterScreen from './Pages/RegisterScreen';
import ListScreen from './Pages/ListScreen';
import ClientRegisterScreen from './Pages/ClientRegisterScreen';

function App() {
  return (

    <Router>
      <NavbarComp />
      <Switch>
        <Route path="/" exact component={LoginScreen} />
        <Route path="/cadastro" component={RegisterScreen} />
        <Route path="/usuarios" component={ListScreen} />
        <Route path="/cliente" component={ClientRegisterScreen} />
      </Switch>
    </Router>

  );
}

export default App;
