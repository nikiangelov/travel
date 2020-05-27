import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import strings from '../../constants/strings';
import SearchBar from './SearchBar';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import withApollo from '../../apollo/with-apollo';
import ChangeLanguageDropdown from '../ChangeLanguageDropdown';
import buildLink from '../../utils/link-handler';
import { useCurrentUserQuery } from '../../graphql/queries/user.graphql';
import { useLogoutUserMutation } from '../../graphql/mutations/user.graphql';
import { setAccessToken } from '../../utils/auth';

function Header(): ReactElement {
  const { data: currentUserData } = useCurrentUserQuery();
  const [logoutUserMutation, { client }] = useLogoutUserMutation();
  const { currentUser } = currentUserData || {};

  const { data } = useQuery(gql`
    query UserCount {
      userCount @client
    }
  `);
  const router = useRouter();
  const handleUserLogout = async () => {
    await logoutUserMutation();
    setAccessToken('');
    if (client) {
      await client.resetStore();
    }
  };
  return (
    <header className="pt-5 mb-4">
      <nav className="d-flex main-header justify-content-between container-fluid">
        <div className="d-flex">
          {false && router.pathname !== '/' && (
            <div>
              <button
                type="button"
                className="btn btn-sm btn-primary rounded-circle mr-3"
                onClick={(): void => router.back()}
              >
                &laquo;
              </button>
            </div>
          )}
          <Link href="/">
            <a className="d-block">
              <img src={require('../../assets/images/logo.svg')} />
            </a>
          </Link>
        </div>
        <div className="d-none d-lg-block">
          <SearchBar />
        </div>
        <div className="d-flex align-items-center">
          <ChangeLanguageDropdown />
          <Link href="/about">
            <a className="btn btn-link">About</a>
          </Link>
          {!!currentUser && currentUser._id && (
            <>
              <div>{currentUser.firstName}</div>
              <button onClick={handleUserLogout} className="btn btn-link">
                Logout
              </button>
            </>
          )}
          {!currentUser && (
            <>
              <Link href={buildLink('/members/login')}>
                <a className="btn btn-link">{strings.signIn}</a>
              </Link>
              <Link href="/members/register">
                <a className="btn btn-link">{strings.signUp}</a>
              </Link>
            </>
          )}
          <div className="ml-3">({data?.userCount || '-'})</div>
        </div>
      </nav>
    </header>
  );
}

export default withApollo(Header);
