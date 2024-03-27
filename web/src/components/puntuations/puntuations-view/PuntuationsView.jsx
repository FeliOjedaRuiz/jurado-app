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
          <div className="bg-gray-50 border-2 border-gray-900 text-black text-base rounded-lg block p-1 w-12 text-center">
            {puntuation.interpretation}
          </div>
        </div>
      </div>

      <div className="mb-3">
        <div className="flex items-center justify-between">
          <label className="block  mr-4 text-xl font-medium text-gray-900">
            Música:
          </label>
          <div className="bg-gray-50 border-2 border-gray-900 text-black text-base rounded-lg block p-1 w-12 text-center">
            {puntuation.music}
          </div>
        </div>
      </div>

      <div className="mb-3">
        <div className="flex items-center justify-between">
          <label className="block  mr-4 text-xl font-medium text-gray-900">
            Letra:
          </label>
          <div className="bg-gray-50 border-2 border-gray-900 text-black text-base rounded-lg block p-1 w-12 text-center">
            {puntuation.leter}
          </div>
        </div>
      </div>

      <div className="mb-3">
        <div className="flex items-center justify-between">
          <label className="block  mr-4 text-xl font-medium text-gray-900">
            Puesta en escena:
          </label>
          <div className="bg-gray-50 border-2 border-gray-900 text-black text-base rounded-lg block p-1 w-12 text-center">
            {puntuation.staging}
          </div>
        </div>
      </div>

      <div className="mb-5">
        <div className="flex items-center justify-between rounded-lg bg-teal-600">
          <label className="block  mr-4 ml-3 text-xl font-bold text-white">
            TOTAL:
          </label>
          <div className="text-white text-xl font-bold rounded-lg block p-1 w-12 text-center">
            {total}{" "}
          </div>
        </div>
      </div>

      <div className="mb-3">
        <div className="flex flex-col">
          <label className="block  mr-4 text-xl font-medium text-gray-900">
            Observaciones:
          </label>
          <div className="bg-gray-50 border-2 min-h-10 border-gray-900 text-black text-base rounded-lg block p-1 max-h-24 overflow-scroll">
            {puntuation.observations}
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
