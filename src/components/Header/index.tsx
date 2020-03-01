import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import strings from '../../constants/strings';
import SearchBar from './SearchBar';

export default function Header(): ReactElement {
  const router = useRouter();
  return (
    <header className="pt-5 mb-4">
      <nav className="d-flex main-header justify-content-between container-fluid">
        <div className="d-flex">
          {router.pathname !== '/' && (
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
          <Link href="/user/signin">
            <a className="btn btn-link">{strings.signIn}</a>
          </Link>
          <Link href="/user/signup">
            <a className="btn btn-link">{strings.signUp}</a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
