import { HTTPMethod } from 'api/types';
import { UserDetails } from 'models/User';
import coreClient from 'api/clients/core';
import * as Payload from 'api/clients/core/payload';
import * as Response from 'api/clients/core/response';
import { APIMethod } from 'api/methods';

export const AuthAPI = {
  login: {
    key: ['login'],
    fn: (data: Payload.Login) =>
      coreClient<Response.Login>({
        url: '/auth/login/',
        method: HTTPMethod.POST,
        data,
      }),
  } satisfies APIMethod<Payload.Login, Response.Login>,

  logout: {
    key: ['logout'],
    fn: () =>
      coreClient<void>({
        url: '/auth/logout/',
        method: HTTPMethod.POST,
      }),
  } satisfies APIMethod<never, void>,

  user: {
    me: {
      key: ['user'],
      fn: () =>
        coreClient<UserDetails>({
          url: '/auth/user/',
          method: HTTPMethod.GET,
        }),
    } satisfies APIMethod<never, UserDetails>,
  },
};

export const AlternativeAPI = {};
