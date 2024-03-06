import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import usersService from "../../../services/users";

function UsersFom() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [serverError, setServerError] = useState();
  const navigate = useNavigate();

  console.debug(`Tags: ${watch("tags")}`);

  const onUserSubmit = async (user) => {
    try {
      setServerError();
      console.debug("Registering...");
      user = await usersService.create(user);
      navigate("/login");
    } catch (error) {
      if (error.response.status === 409) {
        setServerError("El nombre de usuario o contraseña ya existen.");
      } else {
        const errors = error.response?.data?.errors;
        if (errors) {
          console.error(error.message, errors);
          Object.keys(errors).forEach((inputName) =>
            setError(inputName, { message: errors[inputName] })
          );
        } else {
          console.error(error);
          setServerError(error.message);
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onUserSubmit)} className="w-full">
      <div className="mb-6">
        <label className="block mb-2 text-base font-medium text-gray-900">
          Nombre de usuario:
        </label>
        <input
          type="text"
          placeholder="Username"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2"
          {...register("username", {
            required: "Se necesita un nombre de usuario.",
          })}
        />
        {errors.username && (
          <div className="text-red-800 text-sm m-2">
            {errors.username?.message}
          </div>
        )}
      </div>
      <label className="block mb-2 text-base font-medium text-gray-900">
        Email:
      </label>
      <div className="mb-6">
        <input
          type="email"
          placeholder="Email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2"
          {...register("email", {
            required: "Se necesita un email.",
          })}
        />
        {errors.email && (
          <div className="text-red-800 text-sm m-2">
            {errors.email?.message}
          </div>
        )}
      </div>
      <label className="block mb-2 text-base font-medium text-gray-900">
        Contraseña:
      </label>
      <div className="mb-6">
        <input
          type="password"
          placeholder="Password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2"
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
      {serverError && (
        <div className="text-red-800 text-sm text-center">{serverError}</div>
      )}
      <button
        type="submit"
        className="text-white bg-teal-500 hover:bg-teal-700 focus:ring-2 focus:outline-none focus:ring-teal-300 mt-3 rounded-full w-full px-4 py-1.5 text-center "
      >
        Registrarse
      </button>
    </form>
  );
}

export default UsersFom;
