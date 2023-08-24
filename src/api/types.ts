import type { AxiosRequestConfig } from 'axios';

export enum HTTPMethod {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  PATCH = 'patch',
  DELETE = 'delete',
}

export enum StatusCode {
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  TOO_MANY_REQUESTS = 429,
  INTERNAL_SERVER_ERROR = 500,
  SERVICE_UNAVAILABLE = 503,
}

type APIErrorConfig = {
  originalRequest: AxiosRequestConfig;
  status: StatusCode;
  message: string;
  validationErrors?: Record<string, string[]> | null;
};

export class APIError extends Error {
  originalRequest: AxiosRequestConfig;

  status: StatusCode;

  validationErrors: Record<string, string[]> | null;

  constructor(config: APIErrorConfig) {
    super();
    this.originalRequest = config.originalRequest;
    this.status = config.status;
    this.message = config.message;
    this.validationErrors = config.validationErrors ?? null;
  }
}
