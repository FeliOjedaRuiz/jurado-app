import { useEffect, useState } from "react";
import groupsService from "../../../services/groups";
import puntuationsService from "../../../services/puntuations";
import { useParams } from "react-router-dom";
import ResultItem from "../result-item/ResultItem";

function PuntuationsOrder() {
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

  useEffect(() => {
    groups.forEach((group) => {
      puntuationsService
        .listByGroup(group.id)
        .then((groupPuntuations) => {
          const groupPunt = {};
          groupPunt.name = group.name;
          groupPunt.id = group.id;
          let totalInterpretation = 0;
          let totalMusic = 0;
          let totalLeter = 0;
          let totalStaging = 0;
          groupPuntuations.forEach((puntuation) => {
            totalInterpretation += puntuation.interpretation;
            totalMusic += puntuation.music;
            totalLeter += puntuation.leter;
            totalStaging += puntuation.staging;
          });
          let total =
            totalInterpretation + totalMusic + totalLeter + totalStaging;
          groupPunt.total = total;
          groupPunt.interpretation = totalInterpretation;
          groupPunt.music = totalMusic;
          groupPunt.leter = totalLeter;
          groupPunt.staging = totalStaging;
          allPuntuations.push(groupPunt);
          console.log(groupPunt);
        })
        .catch((error) => console.error(error));
    });
    setAllGroupsPuntuation(allPuntuations);
  }, [groups]);

  return (
    <div className="mt-5 w-full max-w-md flex flex-col items-center justify-between border-2 border-teal-600 rounded-xl p-3 pb-5">
      <div className="text-3xl font-medium">Resultados</div>
      <div className="flex w-full justify-between text-xl p-2 text-teal-700 font-bold  border-b-2 border-teal-600">
        <p>Grupo</p>
        <p>TOTAL</p>
      </div>
      {allGroupsPuntuation
        .sort((a, b) => b.total - a.total)
        .map((groupPunt) => (
          <ResultItem groupPunt={groupPunt} key={groupPunt.id} />
        ))}
    </div>
  );
}

export default PuntuationsOrder;
