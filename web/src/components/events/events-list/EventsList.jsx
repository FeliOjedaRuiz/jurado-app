import { AvatarDefault } from "../../../avatar/AvatarDefault";

function EventsList() {
  return (
    <div className="w-1/3 bg-gray-100 p-6">
      <h4 className="font-medium ">Tus eventos</h4>
      <div className="mt-4">
        <div className="flex items-center mt-3">
          <AvatarDefault />
          <div>
          <p className="ml-2">Festival de la canción.</p>
          <p className="ml-2 text-xs text-gray-600">Grupo 1, Grupo 2, </p>
          </div>
        </div>
        <div className="flex items-center mt-3">
          <AvatarDefault />
          <div>
          <p className="ml-2">Festival de la canción.</p>
          <p className="ml-2 text-xs text-gray-600">Grupo 1, Grupo 2, </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsList;
