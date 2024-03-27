import { useEffect, useState } from "react";
import puntuationsService from "../../../services/puntuations";
import ResultItem from "../result-item/ResultItem";

function PuntuationsLeter({ groupsList }) {
  const [allGroupsPuntuation, setAllGroupsPuntuation] = useState([]);

  const boundedMean = (puntuations) => {
    puntuations.sort((a, b) => a - b);
    if (puntuations.length > 2) {
      puntuations.pop();
      puntuations.shift();
    }
    return puntuations;
  };

  const sum = function (boundedMeanArray) {
    let sum = 0;
    boundedMeanArray.forEach((punt) => {
      sum += punt;
    });
    return sum;
  };

  useEffect(() => {
    const allPuntuations = [];
    groupsList.forEach((group) => {
      puntuationsService
        .listByGroup(group.id)
        .then((groupPuntuations) => {
          const leterPoints = [];
          groupPuntuations.forEach((puntuation) => {
            leterPoints.push(puntuation.leter);
          });
          let leterBounded = boundedMean(leterPoints);

          const groupPunt = {};
          groupPunt.id = group.id;
          groupPunt.name = group.name;
          groupPunt.total = sum(leterBounded);
          allPuntuations.push(groupPunt);
        })
        .catch((error) => console.error(error));
    });
    setAllGroupsPuntuation(allPuntuations);
  }, [groupsList]);

  return (
    <div className="mt-3 w-full max-w-md flex flex-col items-center justify-between border-2 border-teal-600 rounded-xl p-3  pb-5">
      <p className="text-2xl font-bold text-teal-600">Mejor Letra</p>
      <div className="flex w-full justify-between text-xl p-2 text-teal-700 font-bold  border-b-2 border-teal-600">
        <p>Grupo</p>
        <p>puntos</p>
      </div>
      <div>
        {allGroupsPuntuation
          .sort((a, b) => b.total - a.total)
          .map((groupPunt) => (
            <ResultItem groupPunt={groupPunt} key={groupPunt.id} />
          ))}
      </div>
    </div>
  );
}

export default PuntuationsLeter;
