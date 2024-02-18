import { useEffect, useState } from "react";
import LayoutLogin from "../components/layouts/LayoutLogin";
import LoginImage from "../images/cerrar-mujer-sosteniendo-smartphone.jpg";
import UsersLogin from "../components/users/users-login/UsersLogin";

function LoginPage() {
  const [mobile, setMobile] = useState(true)
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
    <LayoutLogin>
      <div className="flex h-[calc(100vh-58px)]">
      <div className="w-full flex flex-col lg:w-1/4 bg-gray-100 p-8">
          <div>
            <h1 className="text-4xl text-teal-800 font-black">Inicia sesión</h1>
          </div>          
          <div className="mt-14">
          <UsersLogin />
          </div>
          <div className="mt-20 text-center">
            <p className="font-bold ">¿No tienes cuenta? <a href="/register" className="text-teal-600">Registrate aquí.</a></p>
          </div>
        </div>
        {!mobile && (<div className="w-3/4">
          <img
            className="object-cover w-full h-full"
            src={LoginImage}
            alt="Mujer sosteniendo móvil"
          />
        </div>)}
      </div>
    </LayoutLogin>
  );
}

export default LoginPage;
