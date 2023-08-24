import { useQuery } from '@tanstack/react-query';
import { AuthAPI } from 'api/clients/core/methods';
import hoursToMilliseconds from 'date-fns/hoursToMilliseconds';
import * as React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Path, { AppPath } from 'routes/paths';
import { absolutePath, join } from 'utils/path.utils';

const RequireAnonymousProvider = ({ children }: React.PropsWithChildren) => {
  const location = useLocation();
  const { isSuccess } = useQuery({
    queryFn: AuthAPI.user.me.fn,
    queryKey: AuthAPI.user.me.key,
    refetchOnWindowFocus: false,
    refetchInterval: hoursToMilliseconds(24),
    retry: false,
  });

  return !isSuccess ? (
    <>{children}</>
  ) : (
    <Navigate
      replace
      to={absolutePath(join(Path.App, AppPath.Home))}
      state={{ from: location }}
    />
  );
};

export default RequireAnonymousProvider;
