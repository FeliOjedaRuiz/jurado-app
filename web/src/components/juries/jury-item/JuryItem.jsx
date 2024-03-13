function JuryItem({ jury }) {
  return (
    <div className="border-2 border-teal-500 px-2 py-1 w-full rounded-xl">
      <p className="text-black font-medium text-lg">{jury.username}</p>
    </div>
  );
}

export default JuryItem;
