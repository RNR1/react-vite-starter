import type { UserDetails } from 'models/User';

type Token = Record<'access' | 'refresh', string>;

export type Login = Token & Record<'user', UserDetails>;
