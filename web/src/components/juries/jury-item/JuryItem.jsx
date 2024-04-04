import { Link } from "react-router-dom";

function JuryItem({ jury }) {
  return (
    <Link to={`/juries/${jury.id}`} className="bg-teal-500 px-2 py-1 pl-3 w-full rounded-full ">
      <p className="text-white font-medium text-xl">{jury.email}</p>
    </Link>
  );
}

export default JuryItem;
