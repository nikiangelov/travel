import bcrypt from 'bcrypt';
import validator from 'validator';
import ValidationError from '../lib/ValidationError';
import User, { UserType } from '../models/User';
import { QueryResolvers, MutationResolvers } from '../type-defs.graphqls';
import { IResolvers } from 'graphql-tools';
import { ResolverContext } from '../../apollo/with-apollo';
import {
  createRefreshToken,
  sendRefreshToken,
  createAccessToken,
} from '../lib/Auth';

const Query: QueryResolvers<ResolverContext> = {
  user(_parent, _args, _context, _info) {
    return new Promise<any>((resolve, reject) => {
      User.findOne(_args).exec((error, response) => {
        error ? reject(error) : resolve(response);
      });
    });
  },
  users: (_parent, _args, _context, _info) => {
    const { authenticatedUser } = _context;
    console.log('users query', authenticatedUser);
    return new Promise<any>((resolve, reject) => {
      if (!authenticatedUser) {
        resolve(null);
      }
      User.find()
        //   .populate()
        .exec((error, response) => {
          error ? reject(error) : resolve(response);
        });
    });
  },
  currentUser: async (
    _parent,
    _args,
    { authenticatedUser },
    _info,
  ): Promise<any> => {
    if (!authenticatedUser) {
      throw new ValidationError([
        {
          key: 'user',
          message: 'user_not_authenticated',
        },
      ]);
    }
    return await User.findById(authenticatedUser._id);
  },
};
const Mutation: MutationResolvers<ResolverContext> = {
  registerUser: async (_, { user }, { res }): Promise<any> => {
    const { firstName, lastName, email, password, passwordConfirm } = user;
    let errors = [];
    if (!validator.isEmail(email)) {
      errors.push({
        key: 'email',
        message: 'email_not_valid',
      });
    } else {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        errors.push({
          key: 'email',
          message: 'email_exists',
        });
      }
    }
    if (validator.isEmpty(firstName)) {
      errors.push({
        key: 'firstName',
        message: 'empty_first_name',
      });
    }
    if (validator.isEmpty(lastName)) {
      errors.push({
        key: 'lastName',
        message: 'empty_last_name',
      });
    }
    if (!password || !passwordConfirm) {
      errors.push({
        key: 'password',
        message: 'password_missing',
      });
    } else {
      if (password !== passwordConfirm) {
        errors.push({
          key: 'passwordConfirm',
          message: 'password_not_match',
        });
      }
      if (!validator.isLength(password, { min: 6, max: 50 })) {
        errors.push({
          key: 'password',
          message: 'password_length',
        });
      }
    }
    if (errors.length) {
      throw new ValidationError(errors);
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      userType: 'regular',
    });
    let loginToken = null;
    try {
      const savedUser = await newUser.save();
      if (!savedUser) {
        throw new Error(
          `Не можем да регистрираме потребител с email:  ${email}`,
        );
      }

      // Refresh token
      sendRefreshToken(
        res,
        createRefreshToken({
          _id: savedUser._id,
          email: savedUser.email,
        }),
      );

      // Access token
      loginToken = createAccessToken({
        _id: savedUser._id,
        email: savedUser.email,
      });
    } catch (error) {
      console.log(`Възникна проблем: ${error}`);
    }
    return loginToken;
  },
  loginUser: async (_, { email, password }, { res }) => {
    let hasError = false;
    const user = await User.findOne({
      email,
    });
    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        hasError = true;
      }
    } else {
      hasError = true;
    }

    if (hasError) {
      throw new ValidationError([
        {
          key: 'email_and_password',
          message: 'wrong_email_and_password',
        },
      ]);
    }

    // Refresh token
    sendRefreshToken(
      res,
      createRefreshToken({
        _id: user._id,
        email: user.email,
      }),
    );

    // Access token
    const token = createAccessToken({
      _id: user._id,
      email: user.email,
    });

    return token;
  },
  deleteUser: (_, { _id }) => {
    return new Promise<any>((resolve, reject) => {
      User.findByIdAndRemove({ _id }).exec((error, response) => {
        error ? reject(error) : resolve(response);
      });
    });
  },
  editUser: async (_, { _id, user }, { authenticatedUser }): Promise<any> => {
    if (!authenticatedUser) {
      throw new Error('Не сте влезли в профила си');
    }
    const { firstName, lastName, password, userType } = user;
    let newSet = {} as UserType;
    if (firstName) {
      newSet.firstName = firstName;
    }
    if (lastName) {
      newSet.lastName = lastName;
    }
    if (password) {
      newSet.password = await bcrypt.hash(password, 12);
    }
    if (userType) {
      newSet.userType = userType;
    }
    const response = await User.findByIdAndUpdate(
      { _id },
      { $set: newSet },
      { new: true },
    ).exec();
    if (!response) {
      throw new Error(`Проблем при редакцията`);
    }
    return response;
  },
};

export default {
  Query,
  Mutation,
} as IResolvers;
