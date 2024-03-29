import { useContext, useEffect, useState } from "react";
import eventsService from "../../../services/events.js";
import { AuthContext } from "../../../contexts/AuthStore";
import { Link } from "react-router-dom";
import JuryEventItem from "../jury-event-item/JuryEventItem.jsx";

function EventListJury() {
  const { user } = useContext(AuthContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    eventsService
      .listJuryEvents(user.id)
      .then((events) => {
        setEvents(events);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="w-full h-[calc(100vh-58px)] relative ">
      <div className="flex items-center justify-between px-4 h-16 -m-4 bg-gray-300 ">
        <p className="text-xl font-medium text-teal-500 ">
          Invitado como Jurado
        </p>
        
      </div>

      <div className="mt-8">
        {!events[0] && (
          <p className="text-center p-1 bg-teal-300 rounded-lg mt-2 text-white">
            Aún no eres jurado en ningún evento
          </p>
        )}
        {events.map((event) => (
          <JuryEventItem event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
}

export default EventListJury;
