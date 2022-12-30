import authClient from 'api/clients/auth';
import * as Payload from 'api/clients/auth/payload';
import * as Response from 'api/clients/auth/response';
import * as Transform from 'api/clients/auth/transform';
import { HTTPMethod } from 'api/types';

export const AuthAPI = {
  loginWithGoogle: (data: Payload.SocialLogin) =>
    authClient<Response.Login>({
      url: '/auth/login/google/',
      method: HTTPMethod.POST,
      data,
    }).then(Transform.socialLogin),
  loginWithFacebook: (data: Payload.SocialLogin) =>
    authClient<Response.Login>({
      url: '/auth/login/facebook/',
      method: HTTPMethod.POST,
      data,
    }).then(Transform.socialLogin),
  verifyToken: (data: Payload.VerifyToken) =>
    authClient<void>({
      url: '/auth/verify-token/',
      method: HTTPMethod.POST,
      data,
    }),
  refreshToken: (data: Payload.RefreshToken) =>
    authClient<Response.Login>({
      url: '/auth/refresh-token/',
      method: HTTPMethod.POST,
      data,
    }),
};

const API = { AuthAPI };
export default API;
