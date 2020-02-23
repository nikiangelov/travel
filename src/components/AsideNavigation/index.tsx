import React, { useState } from 'react';
import Link from 'next/link';
import theme from '../../constants/theme';
import SelectedIncidator from './SelectedIndicator';

const AsideNavigation: React.FC = () => {
  const [indicatorPosition, setIndicatorPosition] = useState(193);

  const handleOnPress = (event: any): void => {
    const position = event.target.getBoundingClientRect();
    const { y, height } = position;
    const newPosition = y + height / 2;

    console.log({ newPosition, position, height });
    setIndicatorPosition(newPosition);
  };
  return (
    <>
      <div className="base">
        <SelectedIncidator indicatorPositionY={indicatorPosition} />
        <Link href="/">
          <a className="logo">
            <img src="/assets/images/logo-t.svg" alt="" />
          </a>
        </Link>
        <button
          type="button"
          className="btn btn-sm btn-primary"
          onClick={handleOnPress}
        >
          +
        </button>
        <br />
        <br />
        <br />
        <br />
        <button
          type="button"
          className="btn btn-sm btn-primary"
          onClick={handleOnPress}
        >
          +
        </button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <button
          type="button"
          className="btn btn-sm btn-primary"
          onClick={handleOnPress}
        >
          +
        </button>
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
        .logo {
          display: block;
          margin-bottom: 80px;
        }
      `}</style>
    </>
  );
};

export default AsideNavigation;
