import { useEffect, useState } from "react";
import GroupsForm from "../groups-form/GroupsForm";
import { useParams } from "react-router-dom";
import groupsService from "../../../services/groups"
import GroupsList from './../groups-list/GroupsList';

function GroupComponent() {
  const [groups, setGroups] = useState([]);
  const [reload, setReload] = useState(false);
  const { eventId } = useParams(); 

  useEffect(() => {
    groupsService.list(eventId)
      .then((groups) => {
        setGroups(groups)        
      })
      .catch(error => console.error(error));
  }, [reload, eventId]);

  const onGroupCreation = () => {
    setReload(!reload)
  }

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <GroupsForm onGroupCreation={onGroupCreation} />
      <GroupsList groups={groups} />
    </div>
  );
}

export default GroupComponent;
