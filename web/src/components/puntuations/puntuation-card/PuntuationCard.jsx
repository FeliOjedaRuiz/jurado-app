import { useContext, useEffect, useState } from "react";
import PuntuationForm from "../puntuation-form/PuntuationForm";
import puntuationsService from "../../../services/puntuations";
import { AuthContext } from "../../../contexts/AuthStore";
import { useParams } from "react-router-dom";


function PuntuationCard({ group }) {
  const [exists, setExists] = useState(false)
  const { user } = useContext(AuthContext);
  const { eventId } = useParams();

  const onCreation = () => {
    setExists(true)
  }

  useEffect(() => {
    const juryId = user.id
    const groupId = group.id
    puntuationsService.exists(eventId, juryId, groupId)
    .then((puntuation) => {
      if (puntuation) {
        setExists(true)
      }
    })
    .catch((error) => console.error(error));
  }, [])
  
 

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md mt-4">
      <p className="text-xl font-bold text-teal-700 text-center">{group.name}</p>
      {!exists && <PuntuationForm group={group} onCreation={onCreation} /> }
      
    </div>
  );
}

export default PuntuationCard;
