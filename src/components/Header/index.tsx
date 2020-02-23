import * as React from 'react';
import Link from 'next/link';
import theme from '../../constants/theme';

export default function Header(): JSX.Element {
  return (
    <>
      <nav className="main-header mb-4 container-fluid">
        <Link href="/">
          <a>
            <img src="/assets/images/logo.svg" alt="" />
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
