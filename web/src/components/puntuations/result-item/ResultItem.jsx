import React from 'react';

function ResultItem({ groupPunt }) {
	return (
		<div className="flex w-full text-xl font-medium justify-between border-b-2 border-brand-purple-200  p-2">
			<div>{groupPunt.name} </div>
			<div className="text-brand-purple-600 ml-4">{groupPunt.total}</div>
		</div>
	);
}

export default ResultItem;
