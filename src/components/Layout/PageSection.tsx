import React, { ReactElement, ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';

interface Props {
  title?: string;
  titleBold?: string;
  children?: ReactNode;
}

function PageSection({ title, children }: Props): ReactElement {
  return (
    <section className="mb-7">
      <div>
        {title && (
          <h2 className="mb-4">
            <ReactMarkdown source={title} />
          </h2>
        )}
      </div>
      <div>{children}</div>
    </section>
  );
}

export default PageSection;
