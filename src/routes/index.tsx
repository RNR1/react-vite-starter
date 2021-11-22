import * as React from 'react';
import { RouteObject, useRoutes } from 'react-router';
import Screen from 'screens';

const Routes = () => {
  const routes: RouteObject[] = [{ path: '/', element: <Screen.Home /> }];

  return useRoutes(routes);
};

export default Routes;
