import { useEffect, useState } from "react";
import LayoutLogin from "../components/layouts/LayoutLogin";
import LoginImage from "../images/cerrar-mujer-sosteniendo-smartphone.jpg";

function LoginPage() {
  const [mobile, setMobile] = useState(true)
  const [changeSize, setChageSize] = useState(true);

  useEffect(() => {
    if (window.innerWidth < "960") {
      console.log("menor")
      setMobile(true);
    } else {
      console.log("mayor")
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
        <div className="w-full lg:w-1/4 bg-gray-100">
          <h6>Formulario</h6>
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
