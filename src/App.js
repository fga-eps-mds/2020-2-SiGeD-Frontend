import './App.css';
import NavbarComp from './Components/NavbarComp'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LoginScreen from './Pages/LoginScreen'
import RegisterScreen from './Pages/RegisterScreen'

function App() {
  return (

        <Router>
        <NavbarComp/>
          <Switch>
              <Route path='/' exact component={LoginScreen}/>
              <Route path='/cadastro' component={RegisterScreen}/>
          </Switch>
        </Router>

  );
}

export default App;