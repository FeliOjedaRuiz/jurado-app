import { Link } from 'react-router-dom';
import NavbarLayout from '../components/layouts/NavbarLayout';
import {
	ArrowLeftOnRectangleIcon,
	UserPlusIcon,
} from '@heroicons/react/24/solid';

function HomePage() {
	return (
		<NavbarLayout>
			<div className="min-h-[calc(100vh-58px)] flex flex-col bg-gray-50">
				{/* Hero Section */}
				<section className="relative w-full h-[65vh] min-h-[500px] overflow-hidden">
					{/* Background Image */}
					<div className="absolute inset-0 bg-[url('https://res.cloudinary.com/duoshgr3h/image/upload/v1752251561/jurado-app/Images/Festival-Scout_14_pbba59.webp')] bg-cover bg-center bg-no-repeat" />

					{/* Gradient Overlay */}
					<div className="absolute inset-0 bg-gradient-to-b from-[#622599]/90 via-[#622599]/70 to-gray-50" />

					{/* Hero Content */}
					<div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pb-12">
						<img
							className="h-24 md:h-32 lg:h-40 mb-6 drop-shadow-2xl animate-fade-in"
							src="https://res.cloudinary.com/duoshgr3h/image/upload/v1752250686/jurado-app/Icons/flor-de-lis_ihdgfm.svg"
							alt="logo scouts flor de lis"
						/>
						<h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight drop-shadow-lg mb-4">
							JURADO SCOUT
						</h1>
						<p className="text-lg md:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
							La plataforma digital para gestionar y votar en festivales de la
							canción scout.
						</p>
					</div>
				</section>

				{/* Cards Section - Floating Over Hero */}
				<div className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20 pb-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
						{/* Card: Login */}
						<div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col">
							<div className="p-5 flex flex-col items-center text-center flex-1">
								<div className="flex items-center justify-center gap-3 mb-2">
									<div className="h-10 w-10 bg-[#622599]/10 rounded-lg flex items-center justify-center text-[#622599]">
										<ArrowLeftOnRectangleIcon className="h-5 w-5" />
									</div>
									<h2 className="text-lg font-bold text-gray-800">Ingresar</h2>
								</div>
								<p className="text-sm text-gray-600 mb-4 max-w-xs mx-auto leading-relaxed">
									Accede al panel de jurado o gestiona tus eventos si ya tienes
									cuenta.
								</p>
							</div>
							<div className="p-4 pt-0 w-full">
								<Link to="/login">
									<button className="w-full py-2.5 px-4 bg-[#622599] hover:bg-[#4a1c73] text-white font-bold rounded-lg shadow-md transition-colors flex items-center justify-center gap-2 text-sm">
										<span>Iniciar Sesión</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={2.5}
											stroke="currentColor"
											className="w-4 h-4"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
											/>
										</svg>
									</button>
								</Link>
							</div>
						</div>

						{/* Card: Register */}
						<div className="bg-[#622599] rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col">
							<div className="p-5 flex flex-col items-center text-center flex-1 text-white">
								<div className="flex items-center justify-center gap-3 mb-2">
									<div className="h-10 w-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
										<UserPlusIcon className="h-5 w-5 text-white" />
									</div>
									<h2 className="text-lg font-bold">Registrarse</h2>
								</div>
								<p className="text-sm text-white/90 mb-4 max-w-xs mx-auto leading-relaxed">
									¿Primera vez aquí? Crea tu cuenta y comienza a organizar tu
									primer festival.
								</p>
							</div>
							<div className="p-4 pt-0 w-full">
								<Link to="/register">
									<button className="w-full py-2.5 px-4 bg-white hover:bg-gray-100 text-[#622599] font-bold rounded-lg shadow-md transition-colors flex items-center justify-center gap-2 text-sm">
										<span>Crear Cuenta</span>
										<UserPlusIcon className="h-4 w-4" />
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>

				{/* Footer */}
				<footer className="mt-auto py-8 text-center bg-white border-t border-gray-100">
					<div className="flex flex-col items-center justify-center gap-2">
						<p className="text-gray-500 font-medium">
							Desarrollado por
						</p>
						<Link
							to="http://leopublicidad.com/"
							target="_blank"
							className="transition-opacity hover:opacity-80"
						>
							<img
								className="h-8"
								src="https://res.cloudinary.com/duoshgr3h/image/upload/v1739986959/logo-leopubli-black_ftwdxu.svg"
								alt="Logo Leopublicidad"
							/>
						</Link>
					</div>
				</footer>
			</div>
		</NavbarLayout>
	);
}

export default HomePage;
