type Token = Record<'token', string>;

type User = {
  id: number;
  email: string;
  api_key: string;
  first_name: string;
  last_name: string;
};

export type SocialLogin = Token & Record<'user', User>;
