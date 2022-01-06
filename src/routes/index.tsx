import * as React from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import Screen from 'screens';
import Path from 'routes/paths';
import Layout from 'components/Layout';

const Routes = () => {
  const routes: RouteObject[] = [
    {
      path: Path.Home,
      element: <Layout />,
      children: [
        { index: true, element: <Screen.Home /> },
        { path: Path.ALL, element: <Navigate replace to={Path.NotFound} /> },
        { path: Path.NotFound, element: <Screen.NotFound /> },
        { path: Path.ALL, element: <Navigate replace to={Path.NotFound} /> },
      ],
    },
  ];

  return useRoutes(routes);
};

export default Routes;
