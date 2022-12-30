export type SocialLogin = Record<`${'access' | 'id'}_token`, string>;

export type Login = Record<'email' | 'password', string>;

export type VerifyToken = Record<'token', string>;

export type RefreshToken = Record<'refresh', string>;
