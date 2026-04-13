import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import GeneralLayout from '../components/layouts/GeneralLayout';
import groupsService from '../services/groups';

function GroupUpdatePage() {
	const { groupId } = useParams();
	const navigate = useNavigate();
	const [group, setGroup] = useState(null);
	const [serverError, setServerError] = useState();
	const {
		register,
		handleSubmit,
		setValue,
		setError,
		formState: { errors },
	} = useForm({ mode: 'onBlur' });

	useEffect(() => {
		groupsService
			.detail(groupId)
			.then((data) => {
				setGroup(data);
				setValue('name', data.name);
			})
			.catch((error) => console.error(error));
	}, [groupId, setValue]);

	const onGroupSubmit = async (data) => {
		try {
			setServerError();
			await groupsService.update(groupId, data);
			navigate(-1);
		} catch (error) {
			if (error.response?.data?.errors) {
				const errors = error.response.data.errors;
				Object.keys(errors).forEach((inputName) =>
					setError(inputName, { message: errors[inputName] }),
				);
			} else {
				setServerError(error.message);
			}
		}
	};

	const handleDelete = async () => {
		if (
			window.confirm(`¿Estás seguro de que quieres eliminar el grupo "${group.name}"?`)
		) {
			try {
				await groupsService.remove(groupId);
				navigate(-1);
			} catch (error) {
				console.error('Error eliminando grupo:', error);
				setServerError('Error al eliminar el grupo');
			}
		}
	};

	return (
		<GeneralLayout>
			<div className="flex flex-col bg-gray-200 w-full p-8 items-center lg:justify-center min-h-screen">
				<h1 className="font-bold text-2xl lg:text-4xl text-brand-purple-800 mb-8">
					Editar Grupo
				</h1>

				{group && (
					<form
						onSubmit={handleSubmit(onGroupSubmit)}
						className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md"
					>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-medium text-gray-900">
								Nombre del grupo
							</label>
							<input
								type="text"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-purple-500 focus:border-brand-purple-500 block w-full p-2.5"
								{...register('name', {
									required: 'El nombre es obligatorio',
									minLength: { value: 1, message: 'Mínimo 1 carácter' },
									maxLength: { value: 40, message: 'Máximo 40 caracteres' },
								})}
							/>
							{errors.name && (
								<p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
							)}
						</div>

						{serverError && (
							<div className="mb-4 text-sm text-red-600 text-center">
								{serverError}
							</div>
						)}

						<div className="flex flex-col gap-3">
							<button
								type="submit"
								className="w-full text-white bg-brand-purple-500 hover:bg-brand-purple-700 focus:ring-4 focus:outline-none focus:ring-brand-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
							>
								Guardar cambios
							</button>

							<button
								type="button"
								onClick={handleDelete}
								className="w-full text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
							>
								Eliminar Grupo
							</button>
						</div>
					</form>
				)}
			</div>
		</GeneralLayout>
	);
}

export default GroupUpdatePage;
