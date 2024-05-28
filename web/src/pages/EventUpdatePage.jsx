import GeneralLayout from "../components/layouts/GeneralLayout";
// import EventsUpdate from "../components/events/events-update/EventsUpdate.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import eventsService from "../services/events.js";
import CategorysComponent from "../components/categorys/categorys.component/CategorysComponent.jsx";

function EventUpdatePage() {
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
      <div className="flex flex-col bg-gray-200 w-full p-8 items-center lg:justify-center">
        <div className="font-bold text-2xl lg:text-4xl text-teal-800 mb-12 mt-4 lg:mt-0 lg:mb-8">
          <p>{event.name} </p>
        </div>
        <p className="text-xl text-teal-800 font-medium mb-2">Editar evento</p>
        {/* <EventsUpdate event={event} /> */}
        <CategorysComponent />
      </div>
    </GeneralLayout>
  );
}

export default EventUpdatePage;
