import jwt, { sign } from 'jsonwebtoken';
import { ServerResponse } from 'http';
import cookie from 'cookie';

const JWT_ACCESS_TOKEN_SECRET = process.env.JWT_ACCESS_TOKEN_SECRET;
const JWT_REFRESH_TOKEN_SECRET = process.env.JWT_REFRESH_TOKEN_SECRET;

export interface AuthenticatedUserType {
  _id: string;
  email: string;
}
export const resolveUser = (
  authorizationHeader: string,
): object | string | null => {
  if (!authorizationHeader) {
    return null;
  }

  try {
    const token = authorizationHeader.split(' ')[1];
    if (token) {
      return jwt.verify(token, JWT_ACCESS_TOKEN_SECRET!);
    }
    return null;
  } catch (err) {
    return null;
  }
};

export const createAccessToken = (user: AuthenticatedUserType) => {
  return sign(
    {
      _id: user._id,
    },
    JWT_ACCESS_TOKEN_SECRET!,
    {
      expiresIn: '15s',
    },
  );
};
export const createRefreshToken = (user: AuthenticatedUserType) => {
  return sign(
    {
      _id: user._id,
    },
    JWT_REFRESH_TOKEN_SECRET!,
    {
      expiresIn: '7d',
    },
  );
};

export const sendRefreshToken = (res: ServerResponse, token: string) => {
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('jid', token, {
      httpOnly: true,
      // maxAge: 6 * 60 * 60,
      path: '/',
      // sameSite: 'lax',
      // secure: process.env.NODE_ENV === 'production',
    }),
  );
};
