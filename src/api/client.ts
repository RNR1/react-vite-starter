import axios from 'axios';
import qs from 'qs';
import { baseURL } from 'constants/config';
import type {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { Responses } from 'api/response';

export enum HTTPMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
  DELETE = 'delete',
  OPTIONS = 'options',
  HEAD = 'head',
}

const axiosConfig: AxiosRequestConfig = {
  baseURL,
};
function createAxiosInstance() {
  return axios.create(axiosConfig);
}
const request: AxiosInstance = createAxiosInstance();
const cache: { [key: string]: Responses } = {};
export interface ClientConfig extends AxiosRequestConfig {
  useCache?: boolean;
  invalidateQuery?: boolean;
  url?: string;
}
const client = <T extends Responses>({
  method = HTTPMethod.GET,
  url = baseURL,
  data,
  useCache = false,
  invalidateQuery = false,
  ...rest
}: ClientConfig): Promise<T> =>
  useCache && !invalidateQuery && cache[url]
    ? (Promise.resolve(cache[url]) as Promise<T>)
    : request({
        method,
        url,
        data,
        paramsSerializer,
        ...rest,
      }).then((res: AxiosResponse<T>) => {
        if (useCache) cache[url] = res.data;
        return res.data;
      });

request.interceptors.request.use(
  (req: AxiosRequestConfig) => {
    if (req.url?.includes('get_location')) {
      delete req.headers?.Authorization;
    }
    return req;
  },
  (error: AxiosError) => {},
);

request.interceptors.response.use(
  (res: AxiosResponse) => res,
  (err: AxiosError) => {
    const originalRequest = err.config;
    const status = err.response?.status || 500;
    if (status === 503) {
      const error = {
        originalRequest,
        status,
        message:
          'This service is unavailable right now, please try again later',
      };
      throw error;
    }
    if (status === 500) {
      const error = {
        originalRequest,
        status,
        message: 'An unexpected error occurred, please try again later',
      };
      throw error;
    }
    if (status === 404) {
      const error = {
        originalRequest,
        status,
        message: 'The requested content does not exist, please try again later',
      };
      throw error;
    }

    const response: { data: Record<string, string[]> } | undefined =
      err.response?.data;
    const message = response ? response.data.message : err.message;

    const error = { originalRequest, message, status };
    throw error;
  },
);
export function setHeaderToken(token?: string) {
  if (token) request.defaults.headers.common.Authorization = `Bearer ${token}`;
  else delete request.defaults.headers.common.Authorization;
}

function paramsSerializer(params: AxiosRequestConfig['params']) {
  return qs.stringify(params, { arrayFormat: 'repeat' });
}

export default client;
