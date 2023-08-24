import * as React from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouteObject,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import Screen, { Layout, ErrorElement } from 'screens';
import Path, { AppPath, AuthPath } from 'routes/paths';
import { join } from 'utils/path.utils';
import RequireAuthProvider from 'providers/RequireAuth';
import RequireAnonymousProvider from 'providers/RequireAnonymous';

const routes: RouteObject[] = [
  {
    path: Path.ROOT,
    element: <Layout.Main />,
    errorElement: <ErrorElement.Main />,
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
        element: (
          <RequireAuthProvider>
            <Outlet />
          </RequireAuthProvider>
        ),
        children: [{ path: AppPath.Home, element: <Screen.Home /> }],
      },
      {
        path: Path.ROOT,
        element: <Navigate replace to={join(Path.App, AppPath.Home)} />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
