import React from 'react';
import SignRoutes from './SignRoutes';
import OtherRoutes from './OtherRoutes';
import { useProfileUser } from '../Context';

const Routes = () => {
  const { token } = useProfileUser();

  return (
    token ? <OtherRoutes /> : <SignRoutes />
  );
};

export default Routes;
