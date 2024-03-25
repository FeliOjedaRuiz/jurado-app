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
    <div className="w-full h-full ">
      
      <div className="flex items-center justify-between px-4 py-2 -m-4 bg-gray-300 ">
      <p className="text-xl font-medium text-teal-500 ">Eventos que administras</p>
        <Link
          to="/create-event"
          className=" bg-teal-800 w-12 h-12 shadow-md text-white text-3xl rounded-full flex items-center justify-center"
        >
          +
        </Link>
      </div>
      
      
      <div className="mt-8">
      {!events[0] && <p className='text-center p-1 bg-teal-300 rounded-lg text-white'>Crea eventos que administraras</p> }      
        {events.map((event) => (
          <EventItem event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
}

export default EventsList;
