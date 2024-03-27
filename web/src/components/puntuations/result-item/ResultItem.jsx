import React from "react";

function ResultItem({ groupPunt }) {
  return (
    <div className="flex w-full text-xl font-medium justify-between border-b-2 border-teal-200  p-2">
      <div>{groupPunt.name} </div>
      <div className="text-teal-600">{groupPunt.total}</div>
    </div>
  );
}

export default ResultItem;
