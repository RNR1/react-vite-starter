import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { QueryClient } from '@tanstack/react-query';
import { HTTPMethod } from 'api/types';
import { handleErrorResponse } from 'api/errors';

export const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

const createClient = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (res: AxiosResponse) => res,
    handleErrorResponse,
  );

  return <Res = unknown, Data = unknown>({
    method = HTTPMethod.GET,
    url,
    data,
    ...rest
  }: AxiosRequestConfig<Data>): Promise<Res> =>
    instance<unknown, AxiosResponse<Res>, Data>({
      method,
      url,
      data,
      paramsSerializer: { indexes: null },
      withCredentials: true,
      ...rest,
    }).then((res) => res.data);
};

export type Client = ReturnType<typeof createClient>;
export default createClient;
