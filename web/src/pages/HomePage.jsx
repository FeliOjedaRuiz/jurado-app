import { Link } from 'react-router-dom';
import NavbarLayout from '../components/layouts/NavbarLayout';
import {
	UserPlusIcon,
	ArrowRightIcon,
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
						<div className="glass-card rounded-[2.5rem] overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(98,37,153,0.3)] flex flex-col group animate-fade-in [animation-delay:200ms] opacity-0 fill-mode-forwards relative">
							{/* Subtle Background Pattern */}
							<div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
								<img src="https://res.cloudinary.com/duoshgr3h/image/upload/v1752250686/jurado-app/Icons/flor-de-lis_ihdgfm.svg" className="w-32 h-32 rotate-12" alt="" />
							</div>

							<div className="p-8 pt-10 flex flex-col items-center text-center flex-1 relative z-10">
								<h2 className="text-2xl font-black text-[#622599] mb-3 tracking-tight">Ingresar</h2>
								<div className="h-1 w-12 bg-gradient-to-r from-[#622599] to-transparent rounded-full mb-6 mx-auto opacity-20" />
								<p className="text-gray-600 font-medium leading-relaxed">
									Accede al panel de jurado o gestiona tus eventos si ya tienes cuenta.
								</p>
							</div>
							
							<div className="p-6 pt-0 w-full relative z-10">
								<Link to="/login">
									<button className="w-full py-4 px-6 bg-[#622599] hover:bg-[#4a1c73] text-white font-bold rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-3 active:scale-95 group/btn overflow-hidden relative">
										<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
										<span className="relative">Iniciar Sesión</span>
										<ArrowRightIcon className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
									</button>
								</Link>
							</div>
						</div>

						{/* Card: Register */}
						<div className="glass-card-dark rounded-[2.5rem] overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(98,37,153,0.4)] flex flex-col group animate-fade-in [animation-delay:400ms] opacity-0 fill-mode-forwards relative">
							{/* Subtle Background Pattern */}
							<div className="absolute top-0 right-0 p-4 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity pointer-events-none">
								<img src="https://res.cloudinary.com/duoshgr3h/image/upload/v1752250686/jurado-app/Icons/flor-de-lis_ihdgfm.svg" className="w-32 h-32 -rotate-12 invert" alt="" />
							</div>

							<div className="p-8 pt-10 flex flex-col items-center text-center flex-1 relative z-10">
								<h2 className="text-2xl font-black text-white mb-3 tracking-tight">Registrarse</h2>
								<div className="h-1 w-12 bg-gradient-to-r from-white to-transparent rounded-full mb-6 mx-auto opacity-30" />
								<p className="text-white/80 font-medium leading-relaxed">
									¿Primera vez aquí? Crea tu cuenta y comienza a organizar tu primer festival.
								</p>
							</div>

							<div className="p-6 pt-0 w-full relative z-10">
								<Link to="/register">
									<button className="w-full py-4 px-6 bg-white hover:bg-gray-100 text-[#622599] font-bold rounded-2xl shadow-lg hover:shadow-white/20 transition-all duration-300 flex items-center justify-center gap-3 active:scale-95 group/btn overflow-hidden relative">
										<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#622599]/5 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
										<span className="relative">Crear Cuenta</span>
										<UserPlusIcon className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
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
