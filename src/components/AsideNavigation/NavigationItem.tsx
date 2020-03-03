import React, { ReactElement } from 'react';
import Link from 'next/link';
import theme from '../../constants/theme';

interface Props {
  icon: string;
  path: string;
  title: string;
  isSelected?: boolean;
  noMargin?: boolean;
}

function NavigationItem({
  path,
  icon,
  title,
  isSelected,
  noMargin,
}: Props): ReactElement {
  return (
    <>
      <Link href={path}>
        <a
          className={`d-flex text-decoration-none flex-column text-center base ${
            noMargin ? 'py-1' : 'mb-4 py-2'
          } `}
        >
          {icon === 'cog' ? (
            <i className="far icon-fa fa-user-circle mb-2" />
          ) : (
            <img
              src={require(`../../assets/icons/${icon}${
                isSelected ? '-selected' : ''
              }.svg`)}
              className="icon mb-2"
            />
          )}
          <small>{title}</small>
          {isSelected && <span className="indicator" />}
        </a>
      </Link>
      <style jsx>{`
        .base {
          color: ${isSelected
            ? theme.colors.primaryDark
            : theme.colors.grey600};
          position: relative;
        }
        .icon-fa {
          font-size: 26px;
        }
        .icon {
          opacity: ${isSelected ? 0.7 : 0.5};
        }
        .base:hover {
          color: ${isSelected
            ? theme.colors.primaryDarker
            : theme.colors.grey700};
        }
        .base:hover .icon {
          opacity: 0.8;
        }
        .indicator {
          width: 6px;
          background-color: ${theme.colors.primary};
          border-radius: ${theme.sizes.radius}px;
          position: absolute;
          top: 0;
          right: -2px;
          bottom: 0;
        }
      `}</style>
    </>
  );
}

export default NavigationItem;
