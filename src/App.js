import './App.css';
import UserProvider from './Context';
import Routes from './Routes';

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
