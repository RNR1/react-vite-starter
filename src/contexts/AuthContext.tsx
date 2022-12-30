import * as React from 'react';
import { noop } from 'utils/common';
import type { UserDetails } from 'models/User';
import type { Setter } from 'types/common';
import { useLocalStorage } from 'hooks';
import StorageKey from 'constants/storage';

export const UserContext = React.createContext<UserDetails | null>(null);
export const SetUserContext =
  React.createContext<Setter<UserDetails | null>>(noop);
export const IsLoggedInContext = React.createContext<boolean>(false);
export const AuthTokenContext = React.createContext<string | null>(null);
export const SetAuthTokenContext =
  React.createContext<Setter<string | null>>(noop);
export const RefreshTokenContext = React.createContext<string | null>(null);
export const SetRefreshTokenContext =
  React.createContext<Setter<string | null>>(noop);

const AuthContextProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [user, setUser] = useLocalStorage<UserDetails | null>(
    StorageKey.USER,
    null,
  );
  const [authToken, setAuthToken] = useLocalStorage<string | null>(
    StorageKey.TOKEN,
    null,
  );
  const [refreshToken, setRefreshToken] = useLocalStorage<string | null>(
    StorageKey.REFRESH,
    null,
  );

  const isLoggedIn = React.useMemo(() => Boolean(authToken), [authToken]);

  return (
    <UserContext.Provider value={user}>
      <SetUserContext.Provider value={setUser}>
        <AuthTokenContext.Provider value={authToken}>
          <SetAuthTokenContext.Provider value={setAuthToken}>
            <RefreshTokenContext.Provider value={refreshToken}>
              <SetRefreshTokenContext.Provider value={setRefreshToken}>
                <IsLoggedInContext.Provider value={isLoggedIn}>
                  {children}
                </IsLoggedInContext.Provider>
              </SetRefreshTokenContext.Provider>
            </RefreshTokenContext.Provider>
          </SetAuthTokenContext.Provider>
        </AuthTokenContext.Provider>
      </SetUserContext.Provider>
    </UserContext.Provider>
  );
};

export default AuthContextProvider;
