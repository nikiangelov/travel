import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SearchBar from './SearchBar';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import withApollo from '../../apollo/with-apollo';
import ChangeLanguageDropdown from '../ChangeLanguageDropdown';
import linkBuilder from '../../utils/link-builder';
import { useCurrentUserQuery } from '../../graphql/queries/user.graphql';
import { useLogoutUserMutation } from '../../graphql/mutations/user.graphql';
import { setAccessToken } from '../../utils/auth';
import useI18n from '../../hooks/useI18n';

function Header(): ReactElement {
  const i18n = useI18n();
  const { data: currentUserData, loading } = useCurrentUserQuery();
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
    router.push('/');
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
          <Link href={linkBuilder('/index', i18n.activeLocale)}>
            <a className="d-block">
              <img src={require('../../assets/images/logo.svg')} />
            </a>
          </Link>
          <div className="mt-2 ml-3">
            <ChangeLanguageDropdown />
          </div>
        </div>
        <div className="d-none d-lg-block">
          <SearchBar />
        </div>
        <div className="d-flex align-items-start">
          {!!loading && <span className="btn btn-light text-primary">...</span>}
          {!loading && !!currentUser && currentUser._id && (
            <>
              <Link href={linkBuilder('/profile', i18n.activeLocale)}>
                <a className="btn btn-light text-primary font-weight-bold">
                  {!currentUser.avatar && (
                    <i className="fas fa-user-circle mr-2" />
                  )}
                  {!!currentUser.avatar && (
                    <span
                      className="user-avatar-tiny"
                      style={{ backgroundImage: `url(${currentUser.avatar})` }}
                    />
                  )}
                  {currentUser.firstName}
                </a>
              </Link>
              <Link href={linkBuilder('/members/settings', i18n.activeLocale)}>
                <a className="btn btn-light ml-2 text-black-50">
                  <i className="fas fa-cog" />
                </a>
              </Link>
              <button onClick={handleUserLogout} className="btn btn-light ml-2">
                <i className="fas fa-sign-out-alt text-black-50" />
              </button>
            </>
          )}
          {!loading && !currentUser && (
            <>
              <Link href={linkBuilder('/members/login', i18n.activeLocale)}>
                <a className="btn btn-light mr-2">
                  {i18n.t('common.login-button')}
                </a>
              </Link>
              <Link href={linkBuilder('/members/register', i18n.activeLocale)}>
                <a className="btn btn-light mr-2">
                  {i18n.t('common.register-button')}
                </a>
              </Link>
            </>
          )}
          {/* <div className="ml-3">({data?.userCount || '-'})</div> */}
        </div>
      </nav>
    </header>
  );
}

export default withApollo(Header);
