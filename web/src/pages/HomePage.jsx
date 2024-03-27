import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import NavbarLayout from "../components/layouts/NavbarLayout";

function HomePage() {
  return (
    <NavbarLayout>
      <div className="min-h-[calc(100vh-58px)] flex flex-col justify-around bg-gradient-to-b from-teal-700 to-cyan-500">
        <section className=" flex flex-col items-center justify-center p-6">
          <Typography
            variant="h1"
            className="mr-4 cursor-pointer py-1.5 md:text-6xl font-bold text-white text-center"
          >
            Jurado App
          </Typography>
          <Typography className="mr-4 cursor-pointer py-1.5 text-2xl leading-6 max-w-sm font-medium text-lime-500 text-center">
            Calificar en tus eventos ahora es más fácil.
          </Typography>
        </section>
        <div className="h-[1px] bg-lime-500 w-72 self-center" />
        <section className=" flex flex-col items-center justify-center p-4">
          <p className="text-xl md:text-3xl text-center mb-8 max-w-2xl font-medium text-white">
            Si aún no tienes cuenta, registrate y crea tu primer evento.
          </p>
          <NavLink to="/register">
            <div className="bg-lime-500 rounded-xl py-2 px-4 text-xl text-center font-bold text-teal-900 shadow-lg w-40">
              Registrarse
            </div>
          </NavLink>
        </section>
        <div className="h-[1px] bg-lime-500 w-72 self-center" />
        <section className=" flex flex-col items-center justify-center p-4">
          <p className="text-xl md:text-3xl text-center mb-8 max-w-2xl font-medium text-white">
            Ingresa para participar como jurado o crear tus propios eventos.
          </p>
          <NavLink to="/login">
            <div className="bg-teal-900 rounded-xl py-2 px-4 text-xl text-center font-bold text-lime-500 shadow-lg w-40">
              Iniciar sesión
            </div>
          </NavLink>
        </section>
      </div>
    </NavbarLayout>
  );
}

export default HomePage;
