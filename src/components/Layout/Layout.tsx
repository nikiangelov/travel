import React, { ReactNode } from 'react';
import AsideNavigation from '../AsideNavigation';
import Header from '../Header';

interface Props {
  children?: ReactNode;
}

const Layout: React.FunctionComponent = ({ children }: Props) => (
  <div className="asideNavWrap">
    <AsideNavigation />
    <div className="pageContent">
      <Header />
      <div className="container-fluid py-3">{children}</div>
    </div>
    <style jsx>{`
      .asideNavWrap {
        display: flex;
        flex-direction: row;
      }
      .pageContent {
        flex: 1;
        padding: 0 30px;
        margin-left: 15px;
      }
    `}</style>
  </div>
);

export default Layout;
