import { Link } from "react-router-dom";
import { AvatarDefault } from "../../../avatar/AvatarDefault";

function EventItem({ event }) {
  const eventId = event.id
  
  return (
    <Link to={`/events/${eventId}`} className="flex items-center my-5">
      {!event.image && (
        <div className="bg-teal-400 w-10 h-10 rounded-full text-center text-white text-lg flex items-center justify-center ">
          <p>{event.name[0]}</p>
        </div>
      )}
      {event.image && <AvatarDefault image={event.image} />}
      <div>
        <p className="ml-2">{event.name}</p>
        {/* <p className="ml-2 text-xs text-gray-600"></p> */}
      </div>
    </Link>
  );
}

export default EventItem;
