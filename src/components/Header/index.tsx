import * as React from 'react';
import Link from 'next/link';
import theme from '../../constants/theme';

export default function Header(): JSX.Element {
  return (
    <>
      <nav className="main-header mb-4 container-fluid">
        <Link href="/">
          <a className="d-block">
            <img src={require('../../assets/images/logo.svg')} />
          </a>
        </Link>
      </nav>
      <style jsx>
        {`
          .main-header {
            padding-top: ${theme.sizes.topOffset}px;
          }
        `}
      </style>
    </>
  );
}
