import { useEffect, useState } from "react";
import NavbarLayout from "../components/layouts/NavbarLayout";
import LoginImage from "../images/cerrar-mujer-sosteniendo-smartphone.jpg";
import UsersForm from "../components/users/users-form/UsersForm";

function RegisterPage() {
  const [mobile, setMobile] = useState(true);
  const [changeSize, setChageSize] = useState(true);

  useEffect(() => {
    if (window.innerWidth < "960") {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [changeSize]);
  window.onresize = function () {
    setChageSize(!changeSize);
    console.log("resize");
  };

  return (
    <NavbarLayout>
      <div className="flex h-[calc(100vh-58px)]">
        <div className="w-full lg:max-w-sm flex flex-col items-center bg-gray-100 p-8">
          <div className="max-w-md w-full">
            <div>
              <h1 className="text-4xl text-teal-800 font-black">Registrate!</h1>
              <p className="text-wrap leading-5 text-sm ">
                Podrás crear eventos o participar como jurado.
              </p>
            </div>
            <div className="mt-14">
              <UsersForm />
            </div>
            <div className="mt-20 text-center">
              <p className="font-bold ">
                ¿Ya tienes cuenta?{" "}
                <a href="/login" className="text-teal-600">
                  Inicia sesión aquí.
                </a>
              </p>
            </div>
          </div>
        </div>
        {!mobile && (
          <div className="w-3/4">
            <img
              className="object-cover w-full h-full"
              src={LoginImage}
              alt="Mujer sosteniendo móvil"
            />
          </div>
        )}
      </div>
    </NavbarLayout>
  );
}

export default RegisterPage;
