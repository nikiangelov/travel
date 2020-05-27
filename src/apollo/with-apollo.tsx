import { IncomingMessage, ServerResponse } from 'http';
import { NextPage, NextPageContext } from 'next';
import { ContextFunction } from 'apollo-server-core';
import React from 'react';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';
import { typeDefs } from './state/types';
import { resolvers } from './state/resolvers';
import { PersistentStorage, PersistedData } from 'apollo-cache-persist/types';
import { resolveUser } from '../graphql/lib/Auth';
import cookie from 'cookie';

import {
  getAccessToken,
  setAccessToken,
  isTokenValid,
  fetchNewAccessToken,
} from '../utils/auth';
import constants from '../constants';

type TApolloClient = ApolloClient<NormalizedCacheObject>;

type InitialProps = {
  apolloClient: TApolloClient;
  apolloState: any;
} & Record<string, any>;

type WithApolloPageContext = {
  apolloClient: TApolloClient;
} & NextPageContext;

export type ResolverContext = {
  req: IncomingMessage;
  res: ServerResponse;
  // TODO: change type
  authenticatedUser: any;
  serverAccessToken?: string | undefined;
};

let globalApolloClient: TApolloClient;

export const createResolverContext: ContextFunction<
  { req: IncomingMessage; res: ServerResponse },
  ResolverContext
> = async ({ req, res }) => {
  // todo needs refactor
  let headerAuthorization = req.headers.authorization || '';
  let serverAccessToken = '';
  if (typeof window === 'undefined') {
    if (req && req.headers && req.headers.cookie) {
      const cookies = cookie.parse(req.headers.cookie);
      if (cookies.jid) {
        const response = await fetchNewAccessToken({
          headers: {
            cookie: 'jid=' + cookies.jid,
          },
        });
        const data = await response.json();
        serverAccessToken = data.accessToken;
        headerAuthorization = `Bearer ${serverAccessToken}`;
      }
    }
  }

  const authenticatedUser = resolveUser(headerAuthorization);

  return { req, res, authenticatedUser, serverAccessToken };
};

/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 * By passing `{ssr: false}`, it could be statically optimized
 * instead of being exported as a serverless function.
 */
export default function withApollo(
  PageComponent: NextPage,
  { ssr = true } = {},
): any {
  const WithApollo = ({
    apolloClient,
    apolloState,
    serverAccessToken,
    ...pageProps
  }: InitialProps): any => {
    if (
      typeof window !== 'undefined' &&
      serverAccessToken &&
      !getAccessToken()
    ) {
      setAccessToken(serverAccessToken);
    }
    const client = apolloClient || initApolloClient(apolloState);
    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== 'production') {
    const displayName =
      PageComponent.displayName || PageComponent.name || 'Component';

    if (displayName === 'App') {
      console.warn('This withApollo HOC only works with PageComponents.');
    }

    WithApollo.displayName = `withApollo(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async (ctx: WithApolloPageContext) => {
      // Resolver context here is only set on server. For client-side,
      // "/api/graphql" route creates and pass it to resolver functions.
      let resolverContext: ResolverContext | undefined;
      let serverAccessToken: string | undefined;
      // Keep the "isServer" check inline, so webpack removes the block
      // for client-side bundle.
      if (typeof window === 'undefined') {
        resolverContext = await createResolverContext({
          req: ctx.req!,
          res: ctx.res!,
        });
        if (resolverContext.serverAccessToken) {
          serverAccessToken = resolverContext.serverAccessToken;
        }
      }

      // Initialize ApolloClient, add it to the ctx object so
      // we can use it in `PageComponent.getInitialProp`.
      const apolloClient = (ctx.apolloClient = initApolloClient(
        undefined,
        resolverContext,
      ));

      // Run wrapped getInitialProps methods
      let pageProps = {};
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      }

      // Only on the server:
      if (typeof window === 'undefined') {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return pageProps;
        }

        // Only if ssr is enabled
        if (ssr) {
          try {
            const { AppTree } = ctx;
            // Run all GraphQL queries
            const { getDataFromTree } = await import('@apollo/react-ssr');
            await getDataFromTree(
              <AppTree
                pageProps={{
                  ...pageProps,
                  apolloClient,
                }}
              />,
            );
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error('Error while running `getDataFromTree`', error);
          }

          // getDataFromTree does not call componentWillUnmount
          // head side effect therefore need to be cleared manually
          Head.rewind();
        }
      }

      // Extract query data from the Apollo store
      const apolloState = apolloClient.cache.extract();

      // handle i18n
      let { lang } = ctx.query;
      if (lang) {
        lang = Array.isArray(lang) ? lang[0] : lang;
        if (constants.availableLanguages.indexOf(lang) < 0) {
          lang = constants.defaultLanguage;
        }
      } else {
        lang = constants.defaultLanguage;
      }
      const { default: lngDict = {} } = await import(`../locales/${lang}.json`);

      return {
        ...pageProps,
        apolloState,
        serverAccessToken,
        lng: lang,
        lngDict,
      };
    };
  }

  return WithApollo;
}

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 */
function initApolloClient(
  initialState?: any,
  resolverContext?: ResolverContext,
): any {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return createApolloClient(initialState, resolverContext);
  }

  // Reuse client on the client-side
  if (!globalApolloClient) {
    globalApolloClient = createApolloClient(initialState);
  }

  return globalApolloClient;
}

/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 */
function createApolloClient(
  initialState = {},
  resolverContext?: ResolverContext,
): any {
  const ssrMode = typeof window === 'undefined';
  const cache = new InMemoryCache().restore(initialState);
  // await before instantiating ApolloClient, else queries might run before the cache is persisted

  if (!ssrMode) {
    persistCache({
      cache,
      storage: window.localStorage as PersistentStorage<
        PersistedData<NormalizedCacheObject>
      >,
      debug: true,
    });
  }
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  const client = new ApolloClient({
    ssrMode,
    link: createIsomorphLink(resolverContext),
    cache,
    typeDefs,
    resolvers,
  });
  return client;
}

function createIsomorphLink(resolverContext?: ResolverContext): any {
  if (typeof window === 'undefined') {
    const { SchemaLink } = require('apollo-link-schema');
    const schema = require('../graphql/schema').default;

    // "resolverContext" is passed only before calling "getDataFromTree".
    return new SchemaLink({ schema, context: resolverContext });
  } else {
    const { createHttpLink } = require('apollo-link-http');
    const { setContext } = require('apollo-link-context');
    const { ApolloLink } = require('apollo-link');
    const { onError } = require('apollo-link-error');
    const { TokenRefreshLink } = require('apollo-link-token-refresh');

    const httpLink = createHttpLink({
      uri: '/api/graphql',
      credentials: 'same-origin',
    });

    const authLink = setContext((_: any, { headers }: any) => {
      // get the access token from local variable
      const token = getAccessToken();
      // return the headers to the context so httpLink can read them
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        },
      };
    });

    const apolloLinkError = onError(({ graphQLErrors, networkError }: any) => {
      if (graphQLErrors) {
        console.log('graphQLErrors', graphQLErrors);
      }
      if (networkError) {
        console.log('networkError', networkError);
      }
    });

    const tokenRefreshHandler = new TokenRefreshLink({
      accessTokenField: 'accessToken',
      isTokenValidOrUndefined: () => {
        return isTokenValid();
      },
      fetchAccessToken: () => {
        return fetchNewAccessToken();
      },
      handleFetch: (accessToken: any) => {
        setAccessToken(accessToken);
      },
      handleError: (err: any) => {
        // full control over handling token fetch Error
        console.warn('Your refresh token is invalid. Try to relogin');
        console.log(err);
      },
    });

    return ApolloLink.from([
      tokenRefreshHandler,
      apolloLinkError,
      authLink,
      httpLink,
    ]);
  }
}
