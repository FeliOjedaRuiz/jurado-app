import { useEffect, useState } from "react";
import GeneralLayout from "../components/layouts/GeneralLayout";
import { Link, useParams } from "react-router-dom";
import EditIcon from "../components/icons/EditIcon";
import usersService from "../services/users";
import PuntuationItem from "../components/puntuations/puntuation-item/PuntuationItem";

function JuryDetailPage() {
  const { juryId } = useParams();
  const [jury, setJury] = useState({});
  const [juryPuntuations, setJuryPuntuations] = useState([]);

  useEffect(() => {
    usersService
      .detail(juryId)
      .then((jury) => {
        setJury(jury);
        if (jury.puntuations) {
          setJuryPuntuations(jury.puntuations);
          console.log(jury.puntuations)
        }
      })
      .catch((error) => console.error(error));
  }, [juryId]);

  return (
    <GeneralLayout>
      {jury && (
        <div className="flex flex-col bg-gray-100 w-full h-fit">
          <div className="font-bold text-base xl:text-2xl p-2 xl:p-4 border-b-2 border-teal-500  bg-gray-200 ">
            <Link to={`/events`} className="flex items-center text-teal-800">
              <p className=" mr-2">{jury.email}</p>
              <EditIcon className={`w-7 h-7 pb-1`} />
            </Link>
          </div>
          <div className="overflow-scroll min-h-[calc(100vh-101px)] flex justify-center">
            <div className="grid lg:grid-cols-2 2xl:grid-cols-3">
              {juryPuntuations.map((puntuation) => (
                <PuntuationItem puntuation={puntuation} key={puntuation.id} />
              ))}
            </div>
          </div>
        </div>
      )}
    </GeneralLayout>
  );
}

export default JuryDetailPage;
