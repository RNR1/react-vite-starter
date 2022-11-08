import { AuthAPI } from 'api/clients/auth/methods';
import Button from 'components/Button';
import config from 'constants/config';
import * as React from 'react';
import { useGoogleLogin, GoogleLoginResponse } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import type { ReactFacebookLoginInfo } from 'react-facebook-login';
import { SetAuthTokenContext, SetUserContext } from 'contexts/AuthContext';
import { useMutation } from '@tanstack/react-query';
import { User } from 'models/User';
import { setHeaderToken } from 'api/clients/auth/client';

const Login = () => {
  const setUser = React.useContext(SetUserContext);
  const setAuthToken = React.useContext(SetAuthTokenContext);
  const onSuccess = (response: { token: string; user: User }) => {
    setHeaderToken(response.token);
    setAuthToken(response.token);
    setUser(response.user);
  };

  const { signIn } = useGoogleLogin({
    clientId: config.googleClientId,
    prompt: 'consent',
    onSuccess: (response) =>
      onGoogleLoginSuccess(response as GoogleLoginResponse),
  });

  const { mutate: onFacebookLoginSuccess, isLoading: isLoggingWithFacebook } =
    useMutation(
      (userInfo: ReactFacebookLoginInfo) =>
        AuthAPI.loginWithFacebook({
          access_token: userInfo.accessToken,
          id_token: userInfo.userID,
        }),
      { onSuccess },
    );

  const { mutate: onGoogleLoginSuccess, isLoading: isLoggingWithGoogle } =
    useMutation(
      (userInfo: GoogleLoginResponse) =>
        AuthAPI.loginWithGoogle({
          access_token: userInfo.accessToken,
          id_token: userInfo.tokenId,
        }),
      { onSuccess },
    );

  return (
    <section>
      <h1>Login</h1>
      <Button onClick={signIn}>Sign-in with Google</Button>
      <FacebookLogin
        appId={config.facebookClientId}
        callback={(response) =>
          onFacebookLoginSuccess(response as ReactFacebookLoginInfo)
        }
        render={(props) => (
          <Button onClick={props.onClick}>Sign-in with Facebook</Button>
        )}
      />
    </section>
  );
};

export default Login;
