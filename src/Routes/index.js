import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import OtherRoutes from './OtherRoutes';
import SignInRoutes from './SignInRoutes';
import { useProfileUser } from '../Context';
import NavbarComp from '../Components/NavbarComp';

const Routes = () => {
  const { token } = useProfileUser();
  return (
    <BrowserRouter>
      <NavbarComp />
      {
        token
          ? <OtherRoutes />
          : <SignInRoutes />
      }
    </BrowserRouter>
  );
};
export default Routes;
