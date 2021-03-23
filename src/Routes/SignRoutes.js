import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginScreen from '../Pages/LoginScreen';

const SignRoutes = () => (
  <Router>
    <Route path="/" exact component={LoginScreen} />
  </Router>
);

export default SignRoutes;
