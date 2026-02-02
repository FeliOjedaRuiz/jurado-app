import { Link } from 'react-router-dom';
import EditIcon from '../../icons/EditIcon';
import TrashIcon from '../../icons/TrashIcon';
import usersService from '../../../services/users';

function JuryItem({ jury, onJuryDelete }) {
	const handleDelete = async () => {
		if (
			window.confirm(`¿Estás seguro de que quieres eliminar a ${jury.email}?`)
		) {
			try {
				await usersService.remove(jury.id);
				if (onJuryDelete) onJuryDelete();
			} catch (error) {
				console.error('Error eliminando jurado:', error);
				alert('Error al eliminar el jurado');
			}
		}
	};

	return (
		<div className="bg-brand-purple-500 px-2 py-1 pl-3 w-full rounded-full flex items-center justify-between">
			<Link to={`/juries/${jury.id}`} className="flex-1 overflow-hidden">
				<p className="text-white font-medium text-xl truncate">{jury.email}</p>
			</Link>
			<div className="flex items-center gap-2 ml-2">
				<Link
					to={`/juries/${jury.id}/edit`}
					className="text-white hover:text-brand-purple-200"
				>
					<EditIcon className="w-5 h-5" />
				</Link>
				<button
					onClick={handleDelete}
					className="text-white hover:text-red-300"
				>
					<TrashIcon className="w-5 h-5" />
				</button>
			</div>
		</div>
	);
}

export default JuryItem;
