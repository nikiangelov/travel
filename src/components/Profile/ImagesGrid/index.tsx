import React, { ReactElement } from 'react';
import theme from '../../../constants/theme';

interface Props {
  images: string[];
}

function ImagesGrid({ images }: Props): ReactElement | null {
  if (!images || !images.length) return null;

  return (
    <>
      <div className="gridWrap">
        {images.map((imageUrl, index) => (
          <div key={`img${index}`} className="gridItem elevation-3">
            <span
              className="imageBox bg-cover-img"
              style={{
                backgroundImage: `url('${imageUrl}')`,
              }}
            ></span>
          </div>
        ))}
      </div>
      <style jsx>{`
        .gridWrap {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          height: 450px;
          gap: 1.5em;
        }
        .gridItem {
          background: #eee;
          border-radius: ${theme.sizes.radius}px;
          position: relative;
        }
        .gridItem .imageBox {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: ${theme.sizes.radius}px;
        }
        .gridItem:first-child {
          background: red;
          grid-row-start: 1;
          grid-row-end: 3;
        }
        .gridItem:nth-child(2) {
          background: red;
          grid-column-start: 3;
          grid-column-end: 5;
          grid-row-start: 2;
          grid-row-end: 4;
        }
      `}</style>
    </>
  );
}

export default ImagesGrid;
