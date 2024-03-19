import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthStore";
import eventsService from "../../../services/events";

function PuntuationCard() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [serverError, setServerError] = useState();
  const { user } = useContext(AuthContext);

  console.debug(`Tags: ${watch("tags")}`);

  const onEventSubmit = async (event) => {
    try {
      setServerError();
      console.debug("Creating event...");
      event.admin = user.id;
      event = await eventsService.create(event);
    } catch (error) {
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
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <p className="text-lg font-bold text-teal-700 text-center">Group Name</p>
      <form
        onSubmit={handleSubmit(onEventSubmit)}
        className="w-full max-w-sm mt-5"
      >
        <div className="mb-3">
          <div className="flex items-center justify-between">
            <label className="block  mr-4 text-xl font-medium text-gray-900">
              Interpretación:
            </label>
            <input
              type="number"
              placeholder="0"
              min="0"
              max="10"
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-base rounded-lg block p-1 w-12 text-center"
              {...register("interpretación", {
                required: "Se necesita un puntaje en interpretación",
                max: 10,
                min: 0,
                maxLength: 2,
              })}
            />
          </div>
          {errors.interpretación && (
            <div className="text-red-800 text-sm m-2">
              {errors.interpretación?.message}
            </div>
          )}
        </div>

        <div className="mb-3">
          <div className="flex items-center justify-between">
            <label className="block  mr-4 text-xl font-medium text-gray-900">
              Música:
            </label>
            <input
              type="number"
              placeholder="0"
              min="0"
              max="10"
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-base rounded-lg block p-1 w-12 text-center"
              {...register("música", {
                required: "Se necesita un puntaje en música",
                max: 10,
                min: 0,
                maxLength: 2,
              })}
            />
          </div>
          {errors.música && (
            <div className="text-red-800 text-sm m-2">
              {errors.música?.message}
            </div>
          )}
        </div>

        <div className="mb-3">
          <div className="flex items-center justify-between">
            <label className="block  mr-4 text-xl font-medium text-gray-900">
              Letra:
            </label>
            <input
              type="number"
              placeholder="0"
              min="0"
              max="10"
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-base rounded-lg block p-1 w-12 text-center"
              {...register("letra", {
                required: "Se necesita un puntaje en letra",
                max: 10,
                min: 0,
                maxLength: 2,
              })}
            />
          </div>
          {errors.letra && (
            <div className="text-red-800 text-sm m-2">
              {errors.letra?.message}
            </div>
          )}
        </div>

        <div className="mb-3">
          <div className="flex items-center justify-between">
            <label className="block  mr-4 text-xl font-medium text-gray-900">
              Puesta en escena:
            </label>
            <input
              type="number"
              placeholder="0"
              min="0"
              max="10"
              className="bg-gray-50 border  border-gray-300 text-gray-900 text-base rounded-lg block p-1 w-12 text-center"
              {...register("escena", {
                required: "Se necesita un puntaje en música",
                max: 10,
                min: 0,
                maxLength: 2,
              })}
            />
          </div>
          {errors.escena && (
            <div className="text-red-800 text-sm m-2">
              {errors.escena?.message}
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
          Guardar
        </button>
      </form>
    </div>
  );
}

export default PuntuationCard;
