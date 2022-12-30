import * as React from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import Screen from 'screens';
import Path, { AppPath, AuthPath } from 'routes/paths';
import Layout from 'components/Layout';
import { absolutePath, join } from 'utils/path.utils';
import RequireAuthProvider from 'providers/RequireAuth';
import RequireAnonymousProvider from 'providers/RequireAnonymous';

const Routes = () => {
  const routes: RouteObject[] = [
    {
      path: Path.ROOT,
      element: <Layout />,
      children: [
        {
          path: Path.Auth,
          children: [
            {
              path: AuthPath.Login,
              element: (
                <RequireAnonymousProvider>
                  <Screen.Login />
                </RequireAnonymousProvider>
              ),
            },
            { path: AuthPath.Logout, element: <Screen.Logout /> },
            {
              path: AuthPath.ROOT,
              element: <Navigate replace to={AuthPath.Login} />,
            },
          ],
        },
        {
          path: Path.App,
          element: <RequireAuthProvider />,
          children: [
            { path: AppPath.Home, element: <Screen.Home /> },
            {
              path: Path.ALL,
              element: <Navigate replace to={absolutePath(Path.NotFound)} />,
            },
          ],
        },
        {
          path: absolutePath(Path.ALL),
          element: <Navigate replace to={Path.NotFound} />,
        },
        { path: absolutePath(Path.NotFound), element: <Screen.NotFound /> },
        {
          path: Path.ROOT,
          element: <Navigate replace to={join(Path.App, AppPath.Home)} />,
        },
        {
          path: Path.ALL,
          element: <Navigate replace to={Path.NotFound} />,
        },
      ],
    },
  ];

  return useRoutes(routes);
};

export default Routes;