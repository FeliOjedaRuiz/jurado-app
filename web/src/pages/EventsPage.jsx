import { useEffect, useState } from 'react';
import GeneralLayout from '../components/layouts/GeneralLayout';
import { EventsTabs } from '../components/events/events-list/EventsTabs';
// import EventsTabs from "../components/events/events-list/EventsTabs";

function EventsPage() {
	const [verticalScreen, setVerticalScreen] = useState(true);
	const [changeSize, setChageSize] = useState(true);

	useEffect(() => {
		const handleResize = () => {
			setVerticalScreen(window.innerHeight >= window.innerWidth);
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<GeneralLayout>
			<div className="flex flex-col bg-gray-200 w-full items-center">
				{verticalScreen && (
					<div className=" w-full">
						{' '}
						<EventsTabs />
					</div>
				)}
				{!verticalScreen && (
					<div className="bg-brand-purple-100 font-bold  w-fit px-3 py-1 mt-6 rounded-lg text-brand-purple-800">
						<p>Selecciona o crea un nuevo evento</p>
					</div>
				)}
			</div>
		</GeneralLayout>
	);
}

export default EventsPage;
