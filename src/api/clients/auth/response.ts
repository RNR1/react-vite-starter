export type Token = Record<`${'access' | 'refresh'}_token`, string>;

type UserDetails = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
};

export type Login = Token & Record<'user', UserDetails>;

export type RefreshToken = Record<'access', string>;
