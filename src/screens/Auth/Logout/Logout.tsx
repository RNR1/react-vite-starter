import * as React from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Navigate } from 'react-router-dom';
import Path from 'routes/paths';
import { absolutePath } from 'utils/path.utils';

const Logout = () => {
  const queryClient = useQueryClient();

  React.useLayoutEffect(() => {
    queryClient.removeQueries();
  });

  return <Navigate replace to={absolutePath(Path.Auth)} />;
};

export default Logout;
