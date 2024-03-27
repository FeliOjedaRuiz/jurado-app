import { useContext, useEffect, useState } from "react";
import PuntuationForm from "../puntuation-form/PuntuationForm";
import puntuationsService from "../../../services/puntuations";
import { AuthContext } from "../../../contexts/AuthStore";
import { useParams } from "react-router-dom";
import PuntuationsUpdate from "../puntuations-update/PuntuationsUpdate";
import EditIcon from "../../icons/EditIcon";
import PuntuationsView from "../puntuations-view/PuntuationsView";

function PuntuationCard({ group }) {
  const [exists, setExists] = useState(false);
  const [edit, setEdit] = useState(false);
  const [puntuation, setPuntuation] = useState();
  const { user } = useContext(AuthContext);
  const { eventId } = useParams();

  const onSave = () => {
    setExists(true);
  };

  const changeEdit = () => {
    setEdit(!edit);
  };

  useEffect(() => {
    const juryId = user.id;
    const groupId = group.id;
    puntuationsService
      .exists(eventId, juryId, groupId)
      .then((puntuation) => {
        if (puntuation) {
          setExists(true);
          setPuntuation(puntuation);
        }
      })
      .catch((error) => console.error(error));
  }, [edit, exists]);

  return (
    <div className="bg-white p-7 rounded-2xl shadow-md m-10">
      <div className="flex justify-between items-center">
        <p className="text-lg font-bold text-teal-700 text-center">
          {group.name}
        </p>
        {exists && !edit && (
          <div onClick={changeEdit} className="flex font-medium text-teal-700">
          <p>Editar</p>
            <EditIcon className={`w-7 h-7 pb-1 text-teal-700`} />
          </div>
        )}
        {exists && edit && (
          <div onClick={changeEdit} className="flex font-medium text-red-700">
          <p>Cancelar</p>
            <EditIcon className={`w-7 h-7 pb-1 text-red-700`} />
          </div>
        )}
      </div>
      {!exists && <PuntuationForm group={group} onSave={onSave} />}
      {exists && edit && (
        <PuntuationsUpdate
          puntuation={puntuation}
          onSave={onSave}
          changeEdit={changeEdit}
        />
      )}
      {exists && !edit && (
        <PuntuationsView
          juryId={user.id}
          groupId={group.id}
          eventId={eventId}
          exists={exists}
        />
      )}
    </div>
  );
}

export default PuntuationCard;
