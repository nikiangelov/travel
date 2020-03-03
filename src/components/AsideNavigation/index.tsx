import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import theme from '../../constants/theme';
import routes from '../../constants/routes';
import strings from '../../constants/strings';
import NavigationItem from './NavigationItem';

const AsideNavigation: React.FC = () => {
  const router = useRouter();
  const topRoute = '/' + router.pathname.split('/')[1];
  return (
    <div className="d-none d-lg-block base-placeholder mr-5">
      <div className="base pt-5 pb-4 fixed-top ">
        <div className="separator my-4" />
        <Link href="/">
          <a className="logo d-block mb-6 mt-n1">
            <img
              src={require('../../assets/images/logo-t.svg')}
              className="mr-n2"
              alt="logo"
            />
          </a>
        </Link>
        <div className="w-100">
          {routes.map(route => (
            <NavigationItem
              key={route.index}
              icon={route.icon}
              title={route.title}
              path={route.path}
              isSelected={topRoute === route.path}
            />
          ))}
        </div>
        <div className="mt-auto w-100">
          <NavigationItem
            icon="cog"
            title={strings.profile}
            path="/profile"
            noMargin={true}
            isSelected={topRoute === '/profile'}
          />
        </div>
      </div>
      <style jsx>{`
        .base {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: ${theme.sizes.asideNavigationWidth}px;
          min-height: 100vh;
        }
        .base-placeholder {
          width: ${theme.sizes.asideNavigationWidth}px;
          min-height: 100vh;
        }
        .separator {
          background: ${theme.colors.grey200};
          position: absolute;
          width: 2px;
          top: 0;
          right: 0;
          bottom: 0;
        }
        .logo {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default AsideNavigation;
