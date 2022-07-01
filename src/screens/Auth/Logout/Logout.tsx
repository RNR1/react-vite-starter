import { SetAuthTokenContext, SetUserContext } from 'contexts/AuthContext';
import * as React from 'react';
import { useQueryClient } from 'react-query';
import { Navigate } from 'react-router-dom';
import Path from 'routes/paths';
import { absolutePath } from 'utils/path.utils';

const Logout = () => {
  const queryClient = useQueryClient();
  const setAuthToken = React.useContext(SetAuthTokenContext);
  const setUser = React.useContext(SetUserContext);

  React.useLayoutEffect(() => {
    queryClient.removeQueries();
    setAuthToken(null);
    setUser(null);
  });

  return <Navigate replace to={absolutePath(Path.Auth)} />;
};

export default Logout;
