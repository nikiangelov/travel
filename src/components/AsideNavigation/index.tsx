import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import theme from '../../constants/theme';
import routes from '../../constants/routes';
import NavigationItem from './NavigationItem';
import strings from '../../constants/strings';

const AsideNavigation: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <div className="base">
        <div className="separator" />
        <Link href="/">
          <a className="logo d-block mb-5">
            <img src={require('../../assets/images/logo-t.svg')} />
          </a>
        </Link>
        <div className="w-100">
          {routes.map(route => (
            <NavigationItem
              key={route.index}
              icon={route.icon}
              title={route.title}
              path={route.path}
              isSelected={router.asPath === route.path}
            />
          ))}
        </div>
        <div className="mt-auto">
          <NavigationItem
            icon="cog"
            title={strings.settings}
            path="#"
            noMargin={true}
          />
        </div>
      </div>
      <style jsx>{`
        .base {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: ${theme.sizes.asideNavigation}px;
          min-height: 100vh;
          padding: ${theme.sizes.topOffset}px 0;
          position: relative;
        }
        .separator {
          background: ${theme.colors.grey200};
          position: absolute;
          width: 2px;
          top: 50px;
          right: 0;
          bottom: 50px;
        }
        .logo {
          display: block;
        }
      `}</style>
    </>
  );
};

export default AsideNavigation;
