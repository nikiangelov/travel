import * as React from 'react';
import AnimatedLayout from '../../components/Layout/AnimatedLayout';
import withApollo from '../../apollo/with-apollo';
import Editor from '../../components/Editor';
import TravelLogAssistant from '../../components/TravelLogs/Assistant';

const EditorPage: React.FunctionComponent = () => {
  return (
    <AnimatedLayout>
      <TravelLogAssistant />
      {false && (
        <div style={{ zIndex: 1100, position: 'relative' }}>
          <Editor />
        </div>
      )}
    </AnimatedLayout>
  );
};
export default withApollo(EditorPage);
