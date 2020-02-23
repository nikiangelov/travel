import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import theme from '../../constants/theme';

interface SelectedIncidatorProps {
  className?: string;
  indicatorPositionY?: number;
}
const indicatorConfig = {
  width: 6,
  height: 78,
  half: 39,
};

export default function SelectedIncidatorProps(
  props: SelectedIncidatorProps,
): ReactElement {
  const router = useRouter();
  console.log(router);
  const { indicatorPositionY = 0 } = props;

  return (
    <>
      <div className="base">
        <div className="indicator" />
      </div>
      <style jsx>{`
        .base {
          background: ${theme.colors.grey200};
          position: absolute;
          width: 2px;
          top: 50px;
          right: 0;
          bottom: 50px;
        }
        .indicator {
          width: ${indicatorConfig.width}px;
          height: ${indicatorConfig.height}px;
          background-color: ${theme.colors.primary};
          border-radius: ${theme.sizes.radius}px;
          margin-top: -${indicatorConfig.height / 2}px;
          margin-left: -2px;
          transition: transform 0.2s ease-out;
          transform: translateY(${indicatorPositionY - 50}px);
        }
      `}</style>
    </>
  );
}
