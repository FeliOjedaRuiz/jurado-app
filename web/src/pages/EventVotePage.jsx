import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GeneralLayout from "../components/layouts/GeneralLayout";
import eventsService from "../services/events.js";
import PuntuationCard from "../components/puntuations/puntuation-card/PuntuationCard.jsx";
import { PuntuationsCarousel } from "../components/puntuations/puntuations-carousel/PuntuationsCarousel.jsx";

function EventVotePage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState({});
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    eventsService
      .detail(eventId)
      .then((event) => {
        setEvent(event);
        setGroups(event.groups);
      })
      .catch((error) => console.error(error));
  }, [eventId]);

  return (
    <GeneralLayout>
      {event && (
        <div className="flex flex-col items-center bg-gray-100 w-full">
          <div className="w-full font-bold text-base xl:text-2xl p-2 xl:p-4 border-b-2 border-teal-500  bg-gray-200 ">
            <p className=" mr-2">{event.name} </p>
          </div>
          <div className="flex items-center justify-center max-w-96">
            <PuntuationsCarousel groups={groups} />
          </div>
        </div>
      )}
    </GeneralLayout>
  );
}

export default EventVotePage;
