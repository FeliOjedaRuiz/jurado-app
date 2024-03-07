import EventItem from "../event-item/EventItem";

function EventsList({ events }) {
  return (
    <div className=" w-full bg-gray-100 p-6">
      <h4 className="font-medium ">Tus eventos</h4>
      <div className="mt-4">
      {events.map((event) => (
          <EventItem event={event} key={event.id} />
        ))}
        
      </div>
    </div>
  );
}

export default EventsList;
