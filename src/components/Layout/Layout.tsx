import React, { ReactNode } from 'react';
import AsideNavigation from '../AsideNavigation';
import Header from '../Header';

interface Props {
  children?: ReactNode;
}

const Layout: React.FunctionComponent = ({ children }: Props) => (
  <div className="asideNavWrap d-flex flex-row">
    <AsideNavigation />
    <div className="flex-1">
      <div className="pageContent d-flex flex-column">
        <Header />
        <div className="container-fluid py-3">{children}</div>
      </div>
    </div>
  </div>
);

export default Layout;
