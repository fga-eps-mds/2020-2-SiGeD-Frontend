import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginScreen from '../Pages/LoginScreen';
import NavbarComp from '../Components/NavbarComp';

const SignRoutes = () => (
  <Router>
    <NavbarComp />
    <Route path="/" exact component={LoginScreen} />
  </Router>
);

export default SignRoutes;
