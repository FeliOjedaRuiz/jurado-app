import { AvatarDefault } from "../../../avatar/AvatarDefault";

function EventItem() {
  return (
    <div className="flex items-center mt-3">
      <AvatarDefault />
      <div>
        <p className="ml-2">Festival de la canción.</p>
        <p className="ml-2 text-xs text-gray-600">Grupo 1, Grupo 2, </p>
      </div>
    </div>
  );
}

export default EventItem;
