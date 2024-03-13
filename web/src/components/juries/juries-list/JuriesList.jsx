import JuryItem from "../jury-item/JuryItem"


function JuriesList({ juries }) {
  return (
    <div className="w-full ">
      <p className="font-bold pl-2 mb-2">Jurados:</p>
      <div className="w-full grid gap-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {juries.map((jury) => (
          <JuryItem jury={jury} key={jury.id} />
        ))}
      </div>
    </div>
  )
}

export default JuriesList