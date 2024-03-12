import { useEffect, useState } from "react";
import GeneralLayout from "../components/layouts/GeneralLayout";
import { EventsTabs } from "../components/events/events-list/EventsTabs";
// import EventsTabs from "../components/events/events-list/EventsTabs";

function EventsPage() {
  const [verticalScreen, setVerticalScreen] = useState(true);
  const [changeSize, setChageSize] = useState(true);

  useEffect(() => {
    if (window.innerHeight < window.innerWidth) {
      setVerticalScreen(false);
    } else {
      setVerticalScreen(true);
    }
  }, [changeSize]);

  window.onresize = function (event) {
    setChageSize(!changeSize);
  };

  return (
    <GeneralLayout>
      <div className="flex flex-col bg-gray-200 w-full items-center">
        {verticalScreen && (
          <div className=" w-full">
            {" "}
            <EventsTabs />
          </div>
        )}
        {!verticalScreen && (
          <div className="bg-teal-100 font-bold  w-fit px-3 py-1 mt-6 rounded-lg text-teal-800">
            <p>Selecciona o crea un nuevo evento</p>
          </div>
        )}
      </div>
    </GeneralLayout>
  );
}

export default EventsPage;
