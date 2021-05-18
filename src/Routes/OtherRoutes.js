import React from 'react';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import RegisterScreen from '../Pages/RegisterScreen';
import ListScreen from '../Pages/ListScreen';
import ClientRegisterScreen from '../Pages/ClientRegisterScreen';
import ListCategories from '../Pages/ListCategories';
import ClientUpdateScreen from '../Pages/ClientUpdateScreen';
import ClientListScreen from '../Pages/ClientListScreen';
import ClientProfileScreen from '../Pages/ClientProfileScreen';
import UserUpdateScreen from '../Pages/UserUpdateScreen';
import ListSectors from '../Pages/ListSectors';
import CreateDemandsScreen from '../Pages/CreateDemandsScreen';
import ViewDemandsScreen from '../Pages/ViewDemandsScreen';
import ListDemandsScreen from '../Pages/ListDemandsScreen';
import UpdateDemandsScreen from '../Pages/UpdateDemandScreen';
import LoginScreen from '../Pages/LoginScreen';
import UnauthorizedScreen from '../Pages/Unauthorized';
import RecoverPasswordScreen from '../Pages/RecoverPasswordScreen';
import ChangePasswordScreen from '../Pages/ChangePasswordScreen';
import { useProfileUser } from '../Context';
import StatisticScreen from '../Pages/StatisticsScreen';
import ProfessionalHomepage from '../Pages/ProfessionalHomepage';
import ClientFeaturesScreen from '../Pages/ClientFeaturesScreen';

const OtherRoutes = () => {
  const { user } = useProfileUser();

  return (
    <>
      {
        user && user?.temporaryPassword
          ? (
            <Switch>
              <Route path="/" exact component={ChangePasswordScreen} />
              <Redirect path="*" to="/" />
            </Switch>
          ) : (
            <Switch>
              <Route path="/cadastro" exact component={RegisterScreen} />
              <Route path="/usuarios/editar/:id" exact component={UserUpdateScreen} />
              <Route path="/usuarios" exact component={ListScreen} />
              <Route path="/cliente" exact component={ClientRegisterScreen} />
              <Route path="/categorias" exact component={ListCategories} />
              <Route path="/editar/:id" exact component={ClientUpdateScreen} />
              <Route path="/clientes" exact component={ClientListScreen} />
              <Route path="/caracteristicas" exact component={ClientFeaturesScreen} />
              <Route path="/perfil/:id" exact component={ClientProfileScreen} />
              <Route path="/setores" exact component={ListSectors} />
              <Route path="/demanda" exact component={CreateDemandsScreen} />
              <Route path="/visualizar/:id" exact component={ViewDemandsScreen} />
              <Route path="/demandas" exact component={ListDemandsScreen} />
              <Route path="/demandas/editar/:id" exact component={UpdateDemandsScreen} />
              <Route path="/" exact component={ProfessionalHomepage} />
              <Route path="/login" exact component={LoginScreen} />
              <Route path="/nao-autorizado" exact component={UnauthorizedScreen} />
              <Route path="/recuperar-senha" exact component={RecoverPasswordScreen} />
              <Route path="/estatisticas/" exact component={StatisticScreen} />
              <Redirect path="*" to="/" />
            </Switch>
          )
      }
    </>
  );
};

export default OtherRoutes;
