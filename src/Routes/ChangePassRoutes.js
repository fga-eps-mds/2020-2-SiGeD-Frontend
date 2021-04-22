import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ChangePasswordScreen from '../Pages/ChangePasswordScreen';
import NavbarComp from '../Components/NavbarComp';

const SignRoutes = () => (
  <Router>
    <NavbarComp />
    <Route path="/alterar-senha" exact component={ChangePasswordScreen} />
  </Router>
);

export default SignRoutes;
