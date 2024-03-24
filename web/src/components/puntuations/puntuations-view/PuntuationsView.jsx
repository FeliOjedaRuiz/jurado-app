import { useEffect, useState } from "react";
import puntuationsService from "../../../services/puntuations";

function PuntuationsView({ juryId, groupId, eventId, exists }) {
  const [puntuation, setPuntuation] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    puntuationsService
      .exists(eventId, juryId, groupId)
      .then((puntuation) => {
        if (puntuation) {
          setPuntuation(puntuation);
          const sum =
            puntuation.interpretation +
            puntuation.music +
            puntuation.leter +
            puntuation.staging;
          setTotal(sum);
        }
      })
      .catch((error) => console.error(error));
  }, [exists]);

  return (
    <div className="w-full max-w-sm mt-5">
      <div className="mb-3">
        <div className="flex items-center justify-between">
          <label className="block  mr-4 text-xl font-medium text-gray-900">
            Interpretación:
          </label>
          <input
            type="number"
            placeholder={puntuation.interpretation}
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-base rounded-lg block p-1 w-12 text-center"
            disabled
          />
        </div>
      </div>

      <div className="mb-3">
        <div className="flex items-center justify-between">
          <label className="block  mr-4 text-xl font-medium text-gray-900">
            Música:
          </label>
          <input
            type="number"
            placeholder={puntuation.music}
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-base rounded-lg block p-1 w-12 text-center"
            disabled
          />
        </div>
      </div>

      <div className="mb-3">
        <div className="flex items-center justify-between">
          <label className="block  mr-4 text-xl font-medium text-gray-900">
            Letra:
          </label>
          <input
            type="number"
            placeholder={puntuation.leter}
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-base rounded-lg block p-1 w-12 text-center"
            disabled
          />
        </div>
      </div>

      <div className="mb-3">
        <div className="flex items-center justify-between">
          <label className="block  mr-4 text-xl font-medium text-gray-900">
            Puesta en escena:
          </label>
          <input
            type="number"
            placeholder={puntuation.staging}
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-base rounded-lg block p-1 w-12 text-center"
            disabled
          />
        </div>
      </div>

      <div className="mb-3 mt-5">
        <div className="flex items-center justify-between border-2 rounded-lg border-black">
          <label className="block  mr-4 ml-2 text-xl font-bold text-gray-900">
            TOTAL:
          </label>
          <div className=" text-gray-900 text-xl font-bold rounded-lg block p-1 w-12 text-center">
            {total}{" "}
          </div>
        </div>
      </div>

      <button className="text-white bg-gray-500 mt-3 rounded-full w-full px-4 py-1.5 text-center ">
        Guardar cambios
      </button>
    </div>
  );
}

export default PuntuationsView;
