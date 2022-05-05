import axios from 'axios';
import qs from 'qs';
import { baseURL } from 'constants/config';
import type {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import type { Responses } from 'api/response';

export enum HTTPMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
  DELETE = 'delete',
  OPTIONS = 'options',
  HEAD = 'head',
}

export enum StatusCode {
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  SERVICE_UNAVAILABLE = 503,
}

const axiosConfig: AxiosRequestConfig = {
  baseURL,
};

const request: AxiosInstance = axios.create(axiosConfig);
export interface ClientConfig extends AxiosRequestConfig {
  url?: string;
}
const client = <T extends Responses>({
  method = HTTPMethod.GET,
  url = baseURL,
  data,
  ...rest
}: ClientConfig): Promise<T> =>
  request({
    method,
    url,
    data,
    paramsSerializer,
    ...rest,
  }).then((res: AxiosResponse<T>) => res.data);

request.interceptors.response.use(
  (res: AxiosResponse) => res,
  handleErrorResponse,
);

export const errors: Record<StatusCode, string> = {
  [StatusCode.SERVICE_UNAVAILABLE]:
    'This service is unavailable right now, please try again later',
  [StatusCode.INTERNAL_SERVER_ERROR]:
    'An unexpected error occurred, please try again later',
  [StatusCode.NOT_FOUND]:
    'The requested content does not exist, please try something else',
  [StatusCode.FORBIDDEN]: 'You are not allowed to access this content',
  [StatusCode.UNAUTHORIZED]: 'You should login in order to access this content',
};

export function setHeaderToken(token?: string) {
  if (token) request.defaults.headers.common.Authorization = `Bearer ${token}`;
  else delete request.defaults.headers.common.Authorization;
}

function paramsSerializer(params: AxiosRequestConfig['params']) {
  return qs.stringify(params, { arrayFormat: 'repeat' });
}

export function handleErrorResponse(
  err: AxiosError<Record<'message', string | undefined>>,
) {
  const originalRequest = err.config;
  const status: StatusCode =
    err.response?.status || StatusCode.INTERNAL_SERVER_ERROR;
  if (!err.response) {
    const error = {
      originalRequest,
      status,
      message: errors[StatusCode.SERVICE_UNAVAILABLE],
    };
    throw error;
  }
  if (status in errors) {
    const error = {
      originalRequest,
      status,
      message: errors[status],
    };
    throw error;
  }

  const message =
    err?.response?.data?.message ??
    (err.message || errors[StatusCode.INTERNAL_SERVER_ERROR]);

  const error = { originalRequest, message, status };
  throw error;
}

export default client;
