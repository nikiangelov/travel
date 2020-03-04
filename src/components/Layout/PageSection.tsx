import React, { ReactElement, ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';

interface Props {
  title?: string;
  titleBold?: string;
  titleRightComponent?: any;
  children?: ReactNode;
}

function PageSection({
  title,
  children,
  titleRightComponent,
}: Props): ReactElement {
  return (
    <section className="mb-7">
      <div className="d-flex align-items-center">
        {title && (
          <h3 className="mb-2 flex-fill">
            <ReactMarkdown source={title} />
          </h3>
        )}
        {!!titleRightComponent && titleRightComponent()}
      </div>
      <div>{children}</div>
    </section>
  );
}

export default PageSection;
