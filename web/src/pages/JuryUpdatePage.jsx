import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import GeneralLayout from '../components/layouts/GeneralLayout';
import usersService from '../services/users';

function JuryUpdatePage() {
	const { juryId } = useParams();
	const navigate = useNavigate();
	const [jury, setJury] = useState(null);
	const [serverError, setServerError] = useState();
	const {
		register,
		handleSubmit,
		setValue,
		setError,
		formState: { errors },
	} = useForm({ mode: 'onBlur' });

	useEffect(() => {
		usersService
			.detail(juryId)
			.then((data) => {
				setJury(data);
				setValue('email', data.email);
			})
			.catch((error) => console.error(error));
	}, [juryId, setValue]);

	const onJurySubmit = async (data) => {
		try {
			setServerError();
			await usersService.update(juryId, data);
			navigate(-1); // Go back
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
			window.confirm(`¿Estás seguro de que quieres eliminar a ${jury.email}?`)
		) {
			try {
				await usersService.remove(juryId);
				navigate(-1); // Go back
			} catch (error) {
				console.error('Error eliminando jurado:', error);
				setServerError('Error al eliminar el jurado');
			}
		}
	};

	return (
		<GeneralLayout>
			<div className="flex flex-col bg-gray-200 w-full p-8 items-center lg:justify-center min-h-screen">
				<h1 className="font-bold text-2xl lg:text-4xl text-brand-purple-800 mb-8">
					Editar Jurado
				</h1>

				{jury && (
					<form
						onSubmit={handleSubmit(onJurySubmit)}
						className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md"
					>
						<div className="mb-4">
							<label className="block mb-2 text-sm font-medium text-gray-900">
								Email
							</label>
							<input
								type="email"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-brand-purple-500 focus:border-brand-purple-500 block w-full p-2.5"
								{...register('email', {
									required: 'El email es obligatorio',
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: 'Email inválido',
									},
								})}
							/>
							{errors.email && (
								<p className="mt-1 text-sm text-red-600">
									{errors.email.message}
								</p>
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
								Eliminar Jurado
							</button>
						</div>
					</form>
				)}
			</div>
		</GeneralLayout>
	);
}

export default JuryUpdatePage;
