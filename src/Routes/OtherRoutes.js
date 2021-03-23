import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RegisterScreen from '../Pages/RegisterScreen';
import ListScreen from '../Pages/ListScreen';
import ClientRegisterScreen from '../Pages/ClientRegisterScreen';
import ListCategories from '../Pages/ListCategories';
import ClientUpdateScreen from '../Pages/ClientUpdateScreen';
import ClientListScreen from '../Pages/ClientListScreen';
import ClientProfileScreen from '../Pages/ClientProfileScreen';
import UserUpdateScreen from '../Pages/UserUpdateScreen';

const OtherRoutes = () => (
  <Router>
    <Route path="/" exact component={ClientListScreen} />
    <Route path="/cadastro" component={RegisterScreen} />
    <Route path="/usuarios/editar/:id" component={UserUpdateScreen} />
    <Route path="/usuarios" component={ListScreen} />
    <Route path="/cliente" component={ClientRegisterScreen} />
    <Route path="/categorias" component={ListCategories} />
    <Route path="/editar/:id" component={ClientUpdateScreen} />
    <Route path="/clientes" component={ClientListScreen} />
    <Route path="/perfil/:id" component={ClientProfileScreen} />
  </Router>
);

export default OtherRoutes;
