import * as React from 'react';
import AnimatedLayout from '../../../../components/Layout/AnimatedLayout';
import withApollo from '../../../../apollo/with-apollo';
import Editor from '../../../../components/Editor';

const EditorPage: React.FunctionComponent = () => {
  return (
    <AnimatedLayout>
      <div style={{ zIndex: 1100, position: 'relative' }}>
        <Editor />
      </div>
    </AnimatedLayout>
  );
};
export default withApollo(EditorPage);
