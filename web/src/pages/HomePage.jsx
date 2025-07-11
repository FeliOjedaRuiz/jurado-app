import { Link } from 'react-router-dom';
import NavbarLayout from '../components/layouts/NavbarLayout';

function HomePage() {
	return (
		<NavbarLayout>
			<div className="h-[calc(100vh-58px)] flex flex-col">
				<section className="relative isolate flex flex-col h-full items-center justify-center p-6 md:min-h-[600px] bg-[url('https://res.cloudinary.com/duoshgr3h/image/upload/v1752251561/jurado-app/Images/Festival-Scout_14_pbba59.webp')] bg-cover bg-center bg-no-repeat">
					{/* Capa de mezcla sobre la imagen de fondo */}
					<div className="absolute inset-0 bg-[#622599] mix-blend-multiply z-0"></div>

					{/* Contenido por encima del fondo y la capa de mezcla */}
					<div className="relative z-10">
						<div className="flex items-center justify-center mb-4">
							<img
								className="h-12 md:h-28 lg:h-36 mr-2"
								src="https://res.cloudinary.com/duoshgr3h/image/upload/v1752250686/jurado-app/Icons/flor-de-lis_ihdgfm.svg"
								alt="logo scouts flor de lis"
							/>
							<h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-white text-center drop-shadow-md">
								JURADO SCOUT
							</h1>
						</div>
						<p className="cursor-pointer  text-lg md:text-2xl lg:text-4xl font-normal text-white text-center">
							La web app para votación en festivales de la canción scout
						</p>
					</div>
				</section>

				{/* <div className="h-[1px] bg-lime-500 w-72 self-center" /> */}

				{/* <div className="h-[1px] bg-lime-500 w-72 self-center" /> */}
				<section className="flex flex-col items-center justify-center px-4 py-6 bg-white ">
					<p className="text-lg leading-5 md:text-2xl text-center mb-4 max-w-2xl font-medium text-[#622599]">
						Ingresa para participar como jurado o crear tus propios eventos.
					</p>
					<Link to="/login">
						<div className="bg-[#622599] rounded-xl py-2 px-4 text-xl text-center font-bold text-white shadow-lg w-40 animate-pulse">
							Iniciar sesión
						</div>
					</Link>
				</section>
				<section className="flex flex-col h-full items-center justify-center p-4 bg-[#622599] ">
					<p className="text-3xl font-bold text-white mb-2">REGISTRATE</p>
					<p className="text-xl md:text-3xl text-center mb-4 max-w-2xl font-medium text-white">
						Si aún no tienes cuenta, registrate y crea tu primer evento.
					</p>
					<Link to="/register">
						<div className="bg-white rounded-xl py-2 px-4 text-xl text-center font-bold text-[#622599] shadow-lg w-40 animate-pulse">
							Registrarse
						</div>
					</Link>
				</section>
				<footer className="flex flex-col justify-center items-center bg-white text-[#622599] p-2">
					<p className="mb-1">Web-app desarrollada por</p>
					<Link to="http://leopublicidad.com/">
						<img
							className="h-8"
							src="https://res.cloudinary.com/duoshgr3h/image/upload/v1739986959/logo-leopubli-black_ftwdxu.svg"
							alt="Logo Leopublicidad"
						/>
					</Link>
				</footer>
			</div>
		</NavbarLayout>
	);
}

export default HomePage;
