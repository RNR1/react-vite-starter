import * as Response from 'api/clients/auth/response';
import { User } from 'models/User';

export const socialLogin = ({
  token,
  user,
}: Response.SocialLogin): { token: string; user: User } => ({
  token,
  user: {
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    apiKey: user.api_key,
  },
});

const Transform = { socialLogin };
export default Transform;
