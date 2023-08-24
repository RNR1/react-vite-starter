import type { QueryKey } from '@tanstack/react-query';
import type { Client } from 'api/client';
import { HTTPMethod } from 'api/types';
import * as Params from 'api/params';
import * as Response from 'api/response';
import { absolutePath, join } from 'utils/path.utils';

type CreateAPIMethodFunction<Payload, Response> = (
  data: Payload,
) => Promise<Response>;

type RetrieveOrDeleteAPIMethodFunction<Response> = (
  id: number,
) => Promise<Response>;

type UpdateAPIMethodFunction<Payload, Response> = (
  id: number,
  data: Payload,
) => Promise<Response>;

type ListAPIMethodFunction<Params, Response> = (
  params?: Params,
) => Promise<Response>;

export type APIMethod<Payload, Response = object | void, Params = object> = {
  key: QueryKey | ((args: unknown) => QueryKey);
  fn:
    | CreateAPIMethodFunction<Payload, Response>
    | RetrieveOrDeleteAPIMethodFunction<Response>
    | UpdateAPIMethodFunction<Payload, Response>
    | ListAPIMethodFunction<Params, Response>;
};

type ModelMethodOptions = {
  client: Client;
  baseName: string;
};

const createModelListMethod = <
  Model extends object,
  ListParams = Params.ListParams,
>({
  client,
  baseName,
}: ModelMethodOptions) =>
  ({
    key: (args) => [[baseName, 'list'].join('-'), args],
    fn: (params: ListParams) =>
      client<Response.PaginatedResponse<Model>>({
        url: absolutePath(join(baseName, '')),
        method: HTTPMethod.GET,
        params,
      }),
  }) satisfies APIMethod<never, Response.PaginatedResponse<Model>, ListParams>;

const createModelRetrieveMethod = <Model extends object>({
  client,
  baseName,
}: ModelMethodOptions) =>
  ({
    key: (args) => [[baseName, 'retrieve'].join('-'), args],
    fn: (id: number) =>
      client<Model>({
        url: absolutePath(join(baseName, id.toString(), '')),
        method: HTTPMethod.GET,
      }),
  }) satisfies APIMethod<never, Model>;

const createModelCreateMethod = <Model extends object, Payload>({
  client,
  baseName,
}: ModelMethodOptions) =>
  ({
    key: [[baseName, 'create'].join('-')],
    fn: (data: Payload) =>
      client<Model>({
        url: absolutePath(join(baseName, '')),
        method: HTTPMethod.POST,
        data,
      }),
  }) satisfies APIMethod<Payload, Model>;

const createModelUpdateMethod = <Model extends object, Payload>({
  client,
  baseName,
}: ModelMethodOptions) =>
  ({
    key: [[baseName, 'create'].join('-')],
    fn: (id: number, data: Payload) =>
      client<Model>({
        url: absolutePath(join(baseName, id.toString(), '')),
        method: HTTPMethod.PUT,
        data,
      }),
  }) satisfies APIMethod<Payload, Model>;

const createModelPartialUpdateMethod = <Model extends object, Payload>({
  client,
  baseName,
}: ModelMethodOptions) =>
  ({
    key: [[baseName, 'partial-update'].join('-')],
    fn: (id: number, data: Partial<Payload>) =>
      client<Model>({
        url: absolutePath(join(baseName, id.toString(), '')),
        method: HTTPMethod.PATCH,
        data,
      }),
  }) satisfies APIMethod<Payload, Model>;

const createModelDeleteMethod = ({ client, baseName }: ModelMethodOptions) =>
  ({
    key: [[baseName, 'delete'].join('')],
    fn: (id: number) =>
      client<void>({
        url: absolutePath(join(baseName, id.toString(), '')),
        method: HTTPMethod.DELETE,
      }),
  }) satisfies APIMethod<never, void>;

export const createModelMethods = <
  Model extends object,
  Payload,
  ListParams = Params.ListParams,
>({
  client,
  baseName,
}: ModelMethodOptions) => ({
  list: createModelListMethod<Model, ListParams>({ client, baseName }),
  retrieve: createModelRetrieveMethod<Model>({ client, baseName }),
  create: createModelCreateMethod<Model, Payload>({ client, baseName }),
  update: createModelUpdateMethod<Model, Payload>({ client, baseName }),
  partialUpdate: createModelPartialUpdateMethod<Model, Payload>({
    client,
    baseName,
  }),
  delete: createModelDeleteMethod({ client, baseName }),
});
