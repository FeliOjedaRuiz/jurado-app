import { useContext, useEffect, useState } from "react";
import EventItem from "../event-item/EventItem";
import { AuthContext } from "../../../contexts/AuthStore";
import eventsService from "../../../services/events.js";
import { UnderlineTabs } from "./UnderlineTabs.jsx";
import { Link } from "react-router-dom";

function EventsList() {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    eventsService
      .listAdmin(user.id)
      .then((events) => {
        setEvents(events);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="w-full h-[calc(100vh-58px)] relative ">
      <div className=" mt-2">
        <div className="w-64">
          <UnderlineTabs />
        </div>

        <Link to="/create-event" className=" absolute right-4 bottom-4  bg-teal-600 w-12 h-12 shadow-md text-white text-3xl rounded-full flex items-center justify-center">
          +
        </Link>
      </div>

      <div className="mt-4 px-3">
        {events.map((event) => (
          <EventItem event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
}

export default EventsList;
