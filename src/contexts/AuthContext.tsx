import * as React from 'react';
import { noop } from 'utils/common';
import type { User } from 'models/User';
import { Setter } from 'types/common';
import { useLocalStorage } from 'hooks';
import StorageKey from 'constants/storage';

export const UserContext = React.createContext<User | null>(null);
export const SetUserContext = React.createContext<Setter<User | null>>(noop);
export const IsLoggedInContext = React.createContext<boolean>(false);
export const AuthTokenContext = React.createContext<string | null>(null);
export const SetAuthTokenContext =
  React.createContext<Setter<string | null>>(noop);

const AuthContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [user, setUser] = useLocalStorage<User | null>(StorageKey.USER, null);
  const [authToken, setAuthToken] = useLocalStorage<string | null>(
    StorageKey.TOKEN,
    null,
  );

  const isLoggedIn = React.useMemo(() => Boolean(authToken), [authToken]);

  return (
    <UserContext.Provider value={user}>
      <SetUserContext.Provider value={setUser}>
        <AuthTokenContext.Provider value={authToken}>
          <SetAuthTokenContext.Provider value={setAuthToken}>
            <IsLoggedInContext.Provider value={isLoggedIn}>
              {children}
            </IsLoggedInContext.Provider>
          </SetAuthTokenContext.Provider>
        </AuthTokenContext.Provider>
      </SetUserContext.Provider>
    </UserContext.Provider>
  );
};

export default AuthContextProvider;
