import React from 'react';
import {
  Route, Switch, Redirect,
} from 'react-router-dom';
import LoginScreen from '../Pages/LoginScreen';
import RecoverPasswordScreen from '../Pages/RecoverPasswordScreen';

const SignInRoutes = () => (
  <Switch>
    <Route path="/" exact component={LoginScreen} />
    <Route path="/recuperar-senha" exact component={RecoverPasswordScreen} />
    <Redirect path="*" to="/" />
  </Switch>
);

export default SignInRoutes;
