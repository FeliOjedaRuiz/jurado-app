import { Link } from 'react-router-dom';
import EditIcon from '../../icons/EditIcon';
import TrashIcon from '../../icons/TrashIcon';
import groupsService from '../../../services/groups';

function GroupItem({ group, onGroupDelete }) {
	const handleDelete = async () => {
		if (
			window.confirm(`¿Estás seguro de que quieres eliminar el grupo "${group.name}"?`)
		) {
			try {
				await groupsService.remove(group.id);
				if (onGroupDelete) onGroupDelete();
			} catch (error) {
				console.error('Error eliminando grupo:', error);
				alert('Error al eliminar el grupo');
			}
		}
	};

	return (
		<div className="border-2 border-brand-purple-500 px-2 py-1 pl-3 w-full rounded-xl flex items-center justify-between">
			<p className="text-black font-medium text-lg flex-1 truncate">{group.name}</p>
			<div className="flex items-center gap-2 ml-2">
				<Link
					to={`/groups/${group.id}/edit`}
					className="text-brand-purple-500 hover:text-brand-purple-700"
				>
					<EditIcon className="w-5 h-5" />
				</Link>
				<button
					onClick={handleDelete}
					className="text-brand-purple-500 hover:text-red-500"
				>
					<TrashIcon className="w-5 h-5" />
				</button>
			</div>
		</div>
	);
}

export default GroupItem;
