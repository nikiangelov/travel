import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import strings from '../../constants/strings';
import SearchBar from './SearchBar';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import withApollo from '../../apollo/with-apollo';
function Header(): ReactElement {
  const { data } = useQuery(gql`
    query UserCount {
      userCount @client
    }
  `);
  const router = useRouter();
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
        <div>
          <Link href="/">
            <a className="btn btn-link">
              {strings.signIn} {data?.userCount || '-'}
            </a>
          </Link>
          <Link href="/">
            <a className="btn btn-link">{strings.signUp}</a>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default withApollo(Header);
