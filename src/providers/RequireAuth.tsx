import hoursToMilliseconds from 'date-fns/hoursToMilliseconds';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthAPI } from 'api/clients/core/methods';
import Path, { AuthPath } from 'routes/paths';
import { absolutePath, join } from 'utils/path.utils';

type Props = React.PropsWithChildren;

const RequireAuthProvider = ({ children }: Props) => {
  const location = useLocation();

  const { isError } = useQuery({
    queryKey: AuthAPI.user.me.key,
    queryFn: AuthAPI.user.me.fn,
    refetchOnWindowFocus: false,
    refetchInterval: hoursToMilliseconds(24),
    retry: false,
  });

  return !isError ? (
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
