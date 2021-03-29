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
import NavbarComp from '../Components/NavbarComp';
import ListSectors from '../Pages/ListSectors';
import CreateDemandsScreen from '../Pages/CreateDemandsScreen';
import ViewDemandsScreen from '../Pages/ViewDemandsScreen';
import ListDemandsScreen from '../Pages/ListDemandsScreen';

const OtherRoutes = () => (
  <Router>
    <NavbarComp />
    <Route path="/" exact component={ClientListScreen} />
    <Route path="/cadastro" component={RegisterScreen} />
    <Route path="/usuarios/editar/:id" component={UserUpdateScreen} />
    <Route path="/usuarios" component={ListScreen} />
    <Route path="/cliente" component={ClientRegisterScreen} />
    <Route path="/categorias" component={ListCategories} />
    <Route path="/editar/:id" component={ClientUpdateScreen} />
    <Route path="/clientes" component={ClientListScreen} />
    <Route path="/perfil/:id" component={ClientProfileScreen} />
    <Route path="/setores" component={ListSectors} />
    <Route path="/demandas/criar" component={CreateDemandsScreen} />
    <Route path="/visualizar/:id" component={ViewDemandsScreen} />
    <Route path="/demandas" component={ListDemandsScreen} />
    <Route path="/demandas/criar" component={CreateDemandScreen} />
  </Router>
);

export default OtherRoutes;
