import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import NavbarLayout from "../components/layouts/NavbarLayout";

function HomePage() {
  return (
    <NavbarLayout>
      <div>
        <section className="md:h-96 bg-teal-500 flex flex-col items-center justify-center p-6">
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
        <section className="h-96 bg-teal-50 flex flex-col items-center p-6">
          <NavLink to="/register">
            <p className="text-3xl text-center">
              Registrate y crea tu <br /> primer evento.
            </p>
          </NavLink>
        </section>
      </div>
    </NavbarLayout>
  );
}

export default HomePage;
