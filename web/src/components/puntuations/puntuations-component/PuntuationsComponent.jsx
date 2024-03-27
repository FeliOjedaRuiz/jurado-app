import { useEffect, useState } from "react";
import PuntuationsOnOff from "../puntuations-on-off/PuntuationsOnOff";
import eventServices from "../../../services/events"
import { useParams } from "react-router-dom";
import PuntuationsTabs from "../puntuations-tabs/PuntuationsTabs";

function PuntuationsComponent() {
  const [enable, setEnable] = useState(true)
  const { eventId } = useParams();

  useEffect(() => {
    eventServices.detail(eventId)
    .then((event) => {
      setEnable(event.open)
    })
  }, [])
  

  const onSwitch = () => {
    setEnable(!enable)
    const event = {}
    event.open = enable
    eventServices.update(eventId, event)
    .then((event) => {
      console.log(`Votación habilitada: ${event.open}`)
    })
    .catch((error) => console.error(error));
  }

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <PuntuationsOnOff onSwitch={onSwitch} enable={enable} />
      <PuntuationsTabs />
    </div>
  );
}

export default PuntuationsComponent;
