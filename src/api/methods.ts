import apiClient, { HTTPMethod } from 'api/client';
import * as Response from 'api/response';
import * as Params from 'api/params';
import * as Payload from 'api/payload';
import * as Transform from 'api/transform';

// Declare your API calls here...
const API = {
  getPosts: (params: Params.GetPosts) =>
    apiClient<Response.Post[]>({
      url: '/posts',
      method: HTTPMethod.GET,
      params,
    }).then(Transform.postResponse),
};

export default API;
