import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import usersService from "../../../services/users";
import { AuthContext } from "../../../contexts/AuthStore";

function UsersLogin() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [serverError, setServerError] = useState(undefined);
  const { onUserChange } = useContext(AuthContext);

  const onLoginSubmit = async (user) => {
    try {
      setServerError();
      user = await usersService.login(user);
      onUserChange(user);
      navigate("/events");
    } catch (error) {
      const errors = error.response?.data?.errors;
      if (errors) {
        Object.keys(errors).forEach((inputName) =>
          setError(inputName, { message: errors[inputName] })
        );
      } else {
        setServerError(error.message);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onLoginSubmit)}>
        {serverError && <div>{serverError}</div>}
        <div className="mb-6">
          <label className="block mb-2 text-base font-medium text-gray-900">
            Nombre de usuario
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
            placeholder="username"
            {...register("username", {
              required: "Se necesita un nombre de usuario.",
            })}
          />
          {errors.username && (
            <div className="text-red-800 text-sm m-2">
              {" "}
              {errors.username?.message}{" "}
            </div>
          )}
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-base font-medium text-gray-900">
            Contraseña
          </label>
          <input
            type="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
            placeholder="password"
            {...register("password", {
              required: "Se necesita una contraseña.",
            })}
          />
          {errors.password && (
            <div className="text-red-800 text-sm m-2">
              {" "}
              {errors.password?.message}{" "}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="text-white bg-teal-500 hover:bg-teal-700 focus:ring-2 focus:outline-none focus:ring-teal-300 mt-3 rounded-full w-full px-4 py-1.5 text-center "
        >
          Iniciar sesión
        </button>
      </form>
    </>
  );
}

export default UsersLogin;
