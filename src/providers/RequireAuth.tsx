import { setHeaderToken } from 'api/clients/auth/client';
import { AuthAPI } from 'api/clients/auth/methods';
import {
  AuthTokenContext,
  IsLoggedInContext,
  RefreshTokenContext,
  SetAuthTokenContext,
} from 'contexts/AuthContext';
import hoursToMilliseconds from 'date-fns/hoursToMilliseconds';
import * as React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Path, { AuthPath } from 'routes/paths';
import { absolutePath, join } from 'utils/path.utils';

type Props = React.PropsWithChildren<{}>;

const RequireAuthProvider = ({ children }: Props) => {
  const isLoggedIn = React.useContext(IsLoggedInContext);
  const authToken = React.useContext(AuthTokenContext);
  const setAuthToken = React.useContext(SetAuthTokenContext);
  const refresh = React.useContext(RefreshTokenContext);
  const location = useLocation();

  useQuery(
    ['refreshToken'],
    () => AuthAPI.refreshToken({ refresh: refresh ?? '' }),
    {
      refetchOnWindowFocus: false,
      refetchInterval: hoursToMilliseconds(24),
      retry: false,
      onSuccess: ({ access_token: access }) => {
        setAuthToken(access);
        setHeaderToken(authToken ?? undefined);
      },
      onError: () => setAuthToken(null),
    },
  );

  return isLoggedIn ? (
    <>{children}</>
  ) : (
    <Navigate
      replace
      to={absolutePath(join(Path.Auth, AuthPath.Logout))}
      state={{ from: location }}
    />
  );
};

export default RequireAuthProvider;
