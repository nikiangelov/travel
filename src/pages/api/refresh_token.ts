import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import User from '../../graphql/models/User';
import {
  createAccessToken,
  sendRefreshToken,
  createRefreshToken,
} from '../../graphql/lib/Auth';

const JWT_REFRESH_TOKEN_SECRET = process.env.JWT_REFRESH_TOKEN_SECRET;

type Data = {
  ok: boolean;
  accessToken: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === 'POST') {
    // Process a POST request
    console.log(req.headers);
    res.status(200).json({ ok: false, accessToken: '' });
  } else {
    // is there a cookie?
    const { jid } = cookie.parse(req.headers.cookie ?? '');
    if (!jid) {
      return res.status(200).json({ ok: false, accessToken: '' });
    }

    // validate the access token cookie
    let payload: any;
    try {
      payload = jwt.verify(jid, JWT_REFRESH_TOKEN_SECRET!);
    } catch {
      return res.status(200).json({ ok: false, accessToken: '' });
    }

    // get the user from the token
    const user = await User.findById(payload._id);
    if (!user) {
      return res.status(200).json({ ok: false, accessToken: '' });
    }

    // Refresh the refresh token
    sendRefreshToken(
      res,
      createRefreshToken({
        _id: user._id,
        email: user.email,
      }),
    );

    // every thing is fine, generate new access token for this user
    return res.status(200).json({
      ok: false,
      accessToken: createAccessToken({
        _id: user._id,
        email: user.email,
      }),
    });
  }
};
