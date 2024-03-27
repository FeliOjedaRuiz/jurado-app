import { useEffect, useState } from "react";
import groupsService from "../../../services/groups";
import puntuationsService from "../../../services/puntuations";
import { useParams } from "react-router-dom";
import ResultItem from "../result-item/ResultItem";

function PuntuationsMusic() {
  const [groups, setGroups] = useState([]);
  const [allGroupsPuntuation, setAllGroupsPuntuation] = useState([]);
  const { eventId } = useParams();
  const allPuntuations = [];

  useEffect(() => {
    groupsService
      .list(eventId)
      .then((groups) => {
        setGroups(groups);
      })
      .catch((error) => console.error(error));
  }, [eventId]);

  const boundedMean = (puntuations) => {
    const puntSorted = puntuations.sort((a, b) => b.total - a.total);
    console.log(`PuntSort = ${puntSorted}`)
    console.log(`PuntSort shift pop = ${puntSorted.pop().shift()}`)
  };

  const sum = function (boundedMeanArray) {
    let sum = 0;
    boundedMeanArray.forEach((punt) => {
      sum += punt;
    });
    return sum;
  };

  useEffect(() => {
    groups.forEach((group) => {
      puntuationsService
        .listByGroup(group.id)
        .then((groupPuntuations) => {
          const groupPunt = {};
          groupPunt.name = group.name;
          groupPunt.id = group.id;
          const totalPunts = [];

          groupPuntuations.forEach((puntuation) => {
            let total =
              puntuation.interpretation +
              puntuation.music +
              puntuation.leter +
              puntuation.staging;
            totalPunts.push(total);
          });
          boundedMean(totalPunts)
          groupPunt.total = sum(totalPunts)
          allPuntuations.push(groupPunt)
        })
        .catch((error) => console.error(error));
    });
    setAllGroupsPuntuation(allPuntuations);
  }, [groups]);

  return (
    <div className="mt-3 w-full max-w-md flex flex-col items-center justify-between border-2 border-teal-600 rounded-xl p-3  pb-5">
      <p className="text-3xl font-medium">Resultados</p>
      <div className="flex w-full justify-between text-xl p-2 text-teal-700 font-bold  border-b-2 border-teal-600">
        <p>Grupo</p>
        <p>TOTAL</p>
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

export default PuntuationsMusic;