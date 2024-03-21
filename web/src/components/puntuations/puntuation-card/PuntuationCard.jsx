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
    console.log("edit");
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
  }, [edit]);

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md mt-4">
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold text-teal-700 text-center">
          {group.name}
        </p>
        {exists && <div onClick={changeEdit}>
          <EditIcon className={`w-7 h-7 pb-1 text-teal-700`} />
        </div>}
      </div>
      {!exists && <PuntuationForm group={group} onSave={onSave} />}
      {exists && edit && (
        <PuntuationsUpdate puntuation={puntuation} onSave={onSave} changeEdit={changeEdit} />
      )}
      {exists && !edit && (
        <PuntuationsView
          puntuation={puntuation}
        />
      )}
    </div>
  );
}

export default PuntuationCard;
