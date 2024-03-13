import { useEffect, useState } from "react";
import GeneralLayout from "../components/layouts/GeneralLayout";
import { useParams } from "react-router-dom";
import eventsService from "../services/events.js";
import { EventDetailTabs } from "../components/events/events-detail/EventDetailTabs.jsx";

function EventDetailPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    eventsService
      .detail(eventId)
      .then((event) => {
        setEvent(event);
      })
      .catch((error) => console.error(error));
  }, [eventId]);

  return (
    <GeneralLayout>
      {event && (
        <div className="flex flex-col bg-gray-100 w-full">
          <div className="font-bold text-base xl:text-2xl p-2 xl:p-4 border-b-2 border-teal-500 bg-gray-200  text-teal-800 ">
            <p>{event.name}</p>
          </div>
          <EventDetailTabs />
        </div>
      )}
    </GeneralLayout>
  );
}

export default EventDetailPage;
