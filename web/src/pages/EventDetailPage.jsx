import { useEffect, useState } from "react";
import GeneralLayout from "../components/layouts/GeneralLayout";
import { useParams } from "react-router-dom";
import eventsService from "../services/events.js";

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
        <div className="flex flex-col bg-gray-200 w-full p-8 items-center lg:justify-center">
          <div className="font-bold text-2xl lg:text-4xl text-teal-800 mb-12 mt-4 lg:mt-0 lg:mb-8">
            <p>{event.name}</p>
          </div>

          <div></div>
        </div>
      )}
      
    </GeneralLayout>
  );
}

export default EventDetailPage;
