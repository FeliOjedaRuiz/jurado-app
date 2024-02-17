import { useEffect, useState } from "react";
import LayoutLogin from "../components/layouts/LayoutLogin";
import LoginImage from "../images/cerrar-mujer-sosteniendo-smartphone.jpg";
import UsersForm from "../components/users/users-form/UsersForm";

function RegisterPage() {
  const [mobile, setMobile] = useState(true);
  const [changeSize, setChageSize] = useState(true);

  useEffect(() => {
    if (window.innerWidth < "960") {
      console.log("menor");
      setMobile(true);
    } else {
      console.log("mayor");
      setMobile(false);
    }
  }, [changeSize]);
  window.onresize = function () {
    setChageSize(!changeSize);
    console.log("resize");
  };

  return (
    <LayoutLogin>
      <div className="flex h-[calc(100vh-58px)]">
        <div className="w-full flex flex-col  lg:w-1/4 bg-gray-100 p-8">
          <div>
            <h1 className="text-3xl font-black">Crea tu cuenta!</h1>
            <p className="text-wrap leading-5 text-teal-800">Podrás crear eventos o participar como jurado</p>
          </div>
          <div className="mt-10">
            <p className="font-extrabold text-lg">¿Ya tienes cuenta? <a href="/login" className="text-teal-600">Inicia sesión</a></p>
          </div>
          <div className="mt-10">
          <UsersForm />
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
    </LayoutLogin>
  );
}

export default RegisterPage;
