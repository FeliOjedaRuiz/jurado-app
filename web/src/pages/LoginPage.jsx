import LayoutLogin from "../components/layouts/LayoutLogin";

function LoginPage() {
  return (
    <LayoutLogin>
      <div className="flex  h-[calc(100vh-58px)] w-full">
        <div className="w-1/4 bg-gray-100">Formulario</div>
        <div className="flex flex-col bg-gray-200 justify-center w-full">
          <h1 className="">Datos </h1>
          <h1 className="">Datos </h1>
          <h1 className="">Datos </h1>
          <h1 className="">Datos </h1>
        </div>
      </div>
    </LayoutLogin>
  );
}

export default LoginPage;
