import GroupItem from "../group-item/GroupItem";

function GroupsList({ groups, onGroupDelete }) {
  return (
    <div className="w-full ">
      <p className="font-bold pl-2 mb-2">Grupos:</p>
      <div className="w-full grid gap-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {groups.map((group) => (
          <GroupItem group={group} key={group.id} onGroupDelete={onGroupDelete} />
        ))}
      </div>
    </div>
  );
}

export default GroupsList;
