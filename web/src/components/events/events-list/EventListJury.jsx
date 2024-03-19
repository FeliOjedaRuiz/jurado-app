import { useContext, useEffect, useState } from 'react';
import eventsService from "../../../services/events.js";
import { AuthContext } from "../../../contexts/AuthStore";
import { Link } from 'react-router-dom';
import JuryEventItem from '../jury-event-item/JuryEventItem.jsx';

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
      

      <div className="">
        {events.map((event) => (
          <JuryEventItem event={event} key={event.id} />
        ))}
      </div>
    </div>
  )
}

export default EventListJury