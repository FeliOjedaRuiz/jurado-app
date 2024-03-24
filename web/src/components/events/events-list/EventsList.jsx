import { useContext, useEffect, useState } from "react";
import EventItem from "../event-item/EventItem";
import { AuthContext } from "../../../contexts/AuthStore";
import eventsService from "../../../services/events.js";
import { Link } from "react-router-dom";

function EventsList() {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    eventsService
      .listAdminEvents(user.id)
      .then((events) => {
        setEvents(events);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="w-full h-[calc(100vh-58px)] relative">
      <div className="absolute right-0 -top-10">
        <Link
          to="/create-event"
          className=" bg-teal-800 w-12 h-12 shadow-md text-white text-3xl rounded-full flex items-center justify-center"
        >
          +
        </Link>
      </div>
      
      <div className="mt-10">
      {!events[0] && <p className='text-center p-1 bg-teal-300 rounded-lg text-white'>Crea eventos que administraras</p> }      
        {events.map((event) => (
          <EventItem event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
}

export default EventsList;
