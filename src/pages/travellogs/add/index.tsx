import * as React from 'react';
import AnimatedLayout from '../../../components/Layout/AnimatedLayout';
import withApollo from '../../../apollo/with-apollo';
import TravelLogAssistant, {
  AssistantDataType,
} from '../../../components/TravelLogs/Assistant';
import { useRouter } from 'next/router';
import {
  useNewTravellogMutation,
  useEditTravellogMutation,
} from '../../../graphql/mutations/travellog.graphql';

const AssistantPage: React.FunctionComponent = () => {
  const router = useRouter();
  const [travellogID, setTravellogID] = React.useState(router.query.id || '');
  const [newTravellogMutation] = useNewTravellogMutation();
  const [editTravellogMutation] = useEditTravellogMutation();
  const getTravellogID = async () => {
    if (!travellogID) {
      const { data } = await newTravellogMutation();
      if (data && data.newTravellog && data.newTravellog._id) {
        return data.newTravellog._id;
      }
    }
  };
  const handleAssistantOnComplete = async () => {
    const newTravellogID = travellogID || (await getTravellogID());
    if (newTravellogID) {
      router.push(`/travellogs/add/editor?id=${newTravellogID}`);
    }
  };
  const handleAssistantOnStart = async () => {
    const newTravellogID = await getTravellogID();
    if (newTravellogID) {
      setTravellogID(newTravellogID);
      router.push(`/travellogs/add?id=${newTravellogID}`, undefined, {
        shallow: true,
      });
    }
  };
  const handleAssistantOnChange = async (data: AssistantDataType) => {
    if (!travellogID) return;
    const mapData = {
      where: data.location,
      title: data.title,
      duration: data.timeKey,
      price: data.priceKey,
      category: data.categoryKey,
      season: data.seasonKey,
    };
    const id = Array.isArray(travellogID) ? travellogID[0] : travellogID;
    const { data: mutationData } = await editTravellogMutation({
      variables: { id, travellog: { ...mapData } },
    });
    console.log(mutationData);
  };
  return (
    <AnimatedLayout>
      <TravelLogAssistant
        onSkip={handleAssistantOnComplete}
        onStart={handleAssistantOnStart}
        onChange={handleAssistantOnChange}
        onComplete={handleAssistantOnComplete}
      />
    </AnimatedLayout>
  );
};
export default withApollo(AssistantPage, {
  protectedRoute: true,
});
