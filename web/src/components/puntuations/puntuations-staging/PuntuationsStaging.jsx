import { useEffect, useState } from "react";
import groupsService from "../../../services/groups";
import puntuationsService from "../../../services/puntuations";
import { useParams } from "react-router-dom";
import ResultItem from "../result-item/ResultItem";

function PuntuationsStaging() {
  const [allGroupsPuntuation, setAllGroupsPuntuation] = useState([]);
  const { eventId } = useParams();

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
    groupsService
      .list(eventId)
      .then((groups) => {
        const allPuntuations = [];
        groups.forEach((group) => {
          puntuationsService
            .listByGroup(group.id)
            .then((groupPuntuations) => {
              const stagingPoints = [];
              groupPuntuations.forEach((puntuation) => {
                stagingPoints.push(puntuation.staging);
              });
              let stagingBounded = boundedMean(stagingPoints);

              const groupPunt = {};
              groupPunt.id = group.id;
              groupPunt.name = group.name;
              groupPunt.total = sum(stagingBounded);
              allPuntuations.push(groupPunt);
            })
            .catch((error) => console.error(error));
        });
        setAllGroupsPuntuation(allPuntuations);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="mt-3 w-full max-w-md flex flex-col items-center justify-between border-2 border-teal-600 rounded-xl p-3  pb-5">
      <p className="text-2xl font-bold text-teal-600">Mejor Música</p>
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

export default PuntuationsStaging;