import { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import eventsService from '../../../services/events';

function EventsUpdate({ event }) {
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({ mode: 'onBlur' });

	const [serverError, setServerError] = useState();
	const [imageFile, setImageFile] = useState(null);
	const [imagePreview, setImagePreview] = useState(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const fileInputRef = useRef(null);
	const navigate = useNavigate();
	const eventId = event.id;

	useEffect(() => {
		if (event.name) {
			setValue('name', event.name);
		}
		if (event.image) {
			setImagePreview(event.image);
		}
	}, [event, setValue]);

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (!file) return;

		setImageFile(file);

		const reader = new FileReader();
		reader.onloadend = () => setImagePreview(reader.result);
		reader.readAsDataURL(file);
	};

	const handleRemoveImage = () => {
		setImageFile(null);
		setImagePreview(null);
		if (fileInputRef.current) fileInputRef.current.value = '';
	};

	const onEventSubmit = async (formData) => {
		try {
			setServerError(undefined);
			setIsSubmitting(true);

			const payload = { name: formData.name };
			if (imageFile) payload.image = imageFile;

			await eventsService.update(eventId, payload);
			navigate(`/events/${eventId}`);
		} catch (error) {
			const fieldErrors = error.response?.data?.errors;
			if (fieldErrors) {
				Object.keys(fieldErrors).forEach((inputName) =>
					setValue(inputName, { message: fieldErrors[inputName] }),
				);
			} else {
				setServerError(error.response?.data?.message || error.message);
			}
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onEventSubmit)}
			className="w-full max-w-md space-y-6"
		>
			{/* Imagen del evento */}
			<div className="flex flex-col items-center gap-3">
				<div
					className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-brand-purple-300 bg-gray-100 cursor-pointer group shadow-md"
					onClick={() => fileInputRef.current?.click()}
				>
					{imagePreview ? (
						<>
							<img
								src={imagePreview}
								alt="Imagen del evento"
								className="w-full h-full object-cover transition-opacity duration-200 group-hover:opacity-70"
							/>
							<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black bg-opacity-30">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
									<path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
									<path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
								</svg>
							</div>
						</>
					) : (
						<div className="w-full h-full flex flex-col items-center justify-center gap-2 text-brand-purple-400 group-hover:text-brand-purple-600 transition-colors">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
								<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
							</svg>
							<span className="text-xs font-medium">Agregar imagen</span>
						</div>
					)}
				</div>

				<input
					ref={fileInputRef}
					type="file"
					accept="image/jpeg,image/png,image/webp"
					onChange={handleImageChange}
					className="hidden"
				/>

				{imagePreview && (
					<button
						type="button"
						onClick={handleRemoveImage}
						className="text-xs text-red-500 hover:text-red-700 font-medium transition-colors"
					>
						Quitar imagen
					</button>
				)}
			</div>

			{/* Nombre del evento */}
			<div>
				<label className="block mb-1 pl-1 text-sm font-semibold text-gray-700">
					Nombre del evento
				</label>
				<input
					type="text"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-xl block w-full p-2.5 focus:outline-none focus:ring-2 focus:ring-brand-purple-400 transition"
					{...register('name', {
						required: 'Se necesita un nombre para el evento',
						minLength: { value: 3, message: 'Mínimo 3 caracteres' },
						maxLength: { value: 40, message: 'Máximo 40 caracteres' },
					})}
				/>
				{errors.name && (
					<p className="text-red-600 text-xs mt-1 pl-1">{errors.name.message}</p>
				)}
			</div>

			{/* Error del server */}
			{serverError && (
				<div className="text-red-700 bg-red-50 border border-red-200 rounded-lg text-sm text-center px-3 py-2">
					{serverError}
				</div>
			)}

			<button
				type="submit"
				disabled={isSubmitting}
				className="w-full text-white bg-brand-purple-500 hover:bg-brand-purple-700 disabled:opacity-60 disabled:cursor-not-allowed focus:ring-2 focus:outline-none focus:ring-brand-purple-300 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-200"
			>
				{isSubmitting ? 'Guardando...' : 'Guardar cambios'}
			</button>
		</form>
	);
}

export default EventsUpdate;
