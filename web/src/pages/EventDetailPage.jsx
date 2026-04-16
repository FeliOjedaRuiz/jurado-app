import { useEffect, useState } from 'react';
import GeneralLayout from '../components/layouts/GeneralLayout';
import { Link, useParams } from 'react-router-dom';
import eventsService from '../services/events.js';
import { EventDetailTabs } from '../components/events/events-detail/EventDetailTabs.jsx';
import EditIcon from '../components/icons/EditIcon.jsx';

function EventDetailPage() {
	const { eventId } = useParams();
	const [event, setEvent] = useState({});

	useEffect(() => {
		eventsService
			.detail(eventId)
			.then((event) => {
				setEvent(event);
			})
			.catch((error) => console.error(error));
	}, [eventId]);

	return (
		<GeneralLayout>
			{event && (
				<div className="flex flex-col bg-gray-100 w-full">
					{/* Header con link al editor y Avatar a la izquierda */}
					<div className="flex items-center p-2 xl:p-4 border-b-2 border-brand-purple-500 bg-gray-200">
						<Link
							to={`/events-update/${eventId}`}
							className="flex items-center text-brand-purple-800 w-full"
						>
							{/* Imagen tipo medalla / círculo */}
							<div className="shrink-0 mr-3">
								{event.image ? (
									<img 
										src={event.image} 
										alt={event.name} 
										className="w-12 h-12 rounded-full object-cover border-2 border-brand-purple-500 shadow-sm"
									/>
								) : (
									<div className="w-12 h-12 bg-brand-purple-400 rounded-full flex items-center justify-center border-2 border-brand-purple-500 text-white font-bold text-xl shadow-sm">
										{event.name ? event.name[0].toUpperCase() : ''}
									</div>
								)}
							</div>
							
							<p className="mr-2 font-bold text-base xl:text-2xl">{event.name}</p>
							<EditIcon className="w-7 h-7 pb-1 shrink-0 ml-auto" />
						</Link>
					</div>

					{/* Tabs */}
					<div className="overflow-scroll">
						<EventDetailTabs />
					</div>
				</div>
			)}
		</GeneralLayout>
	);
}

export default EventDetailPage;
