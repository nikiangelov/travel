import * as React from 'react';
import AnimatedLayout from '../../../components/Layout/AnimatedLayout';
import withApollo from '../../../apollo/with-apollo';
import TravelLogAssistant, {
  AssistantDataType,
} from '../../../components/TravelLogs/Assistant';
import { useRouter } from 'next/router';

const AssistantPage: React.FunctionComponent = () => {
  const router = useRouter();
  const createTravelLog = () => {
    // TODO: create travel log
  };
  const handleAssistantOnSkip = () => {
    // todo
    router.push('/travellogs/add/editor');
  };
  const handleAssistantOnStart = () => {
    console.log('start');
  };
  const handleAssistantOnChange = (data: AssistantDataType) => {
    console.log('change', data);
  };
  const handleAssistantOnComplete = () => {
    // todo
    console.log('- handleAssistantOnComplete -');
    router.push('/travellogs/add/editor');
  };
  return (
    <AnimatedLayout>
      <TravelLogAssistant
        onSkip={handleAssistantOnSkip}
        onStart={handleAssistantOnStart}
        onChange={handleAssistantOnChange}
        onComplete={handleAssistantOnComplete}
      />
    </AnimatedLayout>
  );
};
export default withApollo(AssistantPage);
