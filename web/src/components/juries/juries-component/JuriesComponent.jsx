import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JuriesForm from "../juries-form/JuriesForm";
import JuriesList from "../juries-list/JuriesList";
import usersService from "../../../services/users";

function JuriesComponent() {
  const [juries, setJuries] = useState([]);
  const [reload, setReload] = useState(false);
  const { eventId } = useParams();

  useEffect(() => {
    usersService
      .listJuries(eventId)
      .then((juries) => {
        setJuries(juries);
      })
      .catch((error) => console.error(error));
  }, [reload]);

  const onJuryAdd = () => {
    setReload(!reload);
  };

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <JuriesForm onJuryAdd={onJuryAdd} />
      <JuriesList juries={juries} />
    </div>
  );
}

export default JuriesComponent;
