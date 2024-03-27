import { useEffect, useState } from "react";
import GeneralLayout from "../components/layouts/GeneralLayout";
import { Link, useParams } from "react-router-dom";
import eventsService from "../services/events.js";
import { EventDetailTabs } from "../components/events/events-detail/EventDetailTabs.jsx";
import EditIcon from "../components/icons/EditIcon.jsx";

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
        <div className="flex flex-col bg-gray-100 w-full" >
          <div className="font-bold text-base xl:text-2xl p-2 xl:p-4 border-b-2 border-teal-500  bg-gray-200 ">
            <Link to={`/events`} className="flex items-center text-teal-800">
              <p className=" mr-2">{event.name} </p>
              <EditIcon className={`w-7 h-7 pb-1`} />
            </Link>
          </div>
          <div className="overflow-scroll ">
            <EventDetailTabs />
          </div>
        </div>
      )}
    </GeneralLayout>
  );
}

export default EventDetailPage;
