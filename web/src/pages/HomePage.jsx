import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import NavbarLayout from "../components/layouts/NavbarLayout";

function HomePage() {
  return (
    <NavbarLayout>
      <div className="h-[calc(100vh-58px)] flex flex-col bg-gradient-to-b from-teal-900 to-teal-200">
        <section className="h-full  flex flex-col items-center justify-center p-6">
          <Typography
            variant="h1"
            className="mr-4 cursor-pointer py-1.5 font-bold text-white text-center"
          >
            Jurado App
          </Typography>
          <Typography className="mr-4 cursor-pointer py-1.5 text-2xl leading-6 max-w-sm font-medium text-lime-500 text-center">
            Calificar en tus eventos ahora es más fácil.
          </Typography>
        </section>
        {/* <div className="h-1 bg-teal-800" /> */}
        <section className="h-full flex flex-col items-center justify-center p-6">
          <p className="text-3xl text-center mb-4 font-medium text-white">
            Registrate y crea tu primer evento.
          </p>
          <NavLink to="/register" ><div className="bg-gradient-to-b from-lime-500 to-lime-700 rounded-xl py-2 px-4 text-2xl font-bold text-black shadow-sm ">Registrarse</div></NavLink>
        </section>
      </div>
    </NavbarLayout>
  );
}

export default HomePage;
