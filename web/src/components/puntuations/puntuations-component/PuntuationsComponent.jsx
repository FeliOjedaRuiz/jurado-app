import { useEffect, useState } from 'react';
import PuntuationsOnOff from '../puntuations-on-off/PuntuationsOnOff';
import eventServices from '../../../services/events';
import groupsService from '../../../services/groups';
import { useParams } from 'react-router-dom';
import PuntuationsTabs from '../puntuations-tabs/PuntuationsTabs';
import { Switch } from '@material-tailwind/react';

function PuntuationsComponent() {
	const [open, setOpen] = useState(false);
	const [load, setLoad] = useState(false);
	const { eventId } = useParams();
	const [groupsList, setGroupsList] = useState([]);

	useEffect(() => {
		eventServices
			.detail(eventId)
			.then((event) => {
				setOpen(event.open);
				setLoad(true);
			})
			.catch((error) => console.error(error));
		groupsService
			.list(eventId)
			.then((groups) => {
				setGroupsList(groups);
			})
			.catch((error) => console.error(error));
	}, []);

	const onSwitch = () => {
		const newOpen = !open;
		eventServices
			.toggleVoting(eventId, newOpen)
			.then((event) => {
				setOpen(event.open);
			})
			.catch((error) => console.error(error));
	};

	return (
		<div className="flex flex-col w-full items-center justify-center">
			<div className="flex items-center border-2 border-brand-purple-300 bg-brand-purple-50 rounded-xl py-2 px-3 my-4">
				<p className="mr-8 text-xl text-brand-purple-800 font-medium">
					Habilitar votación
				</p>
				{load && (
					<Switch color="purple" onChange={onSwitch} checked={open} />
				)}
			</div>
			{/* <PuntuationsOnOff onSwitch={onSwitch} enable={enable} /> */}
			<PuntuationsTabs groupsList={groupsList} />
		</div>
	);
}

export default PuntuationsComponent;
