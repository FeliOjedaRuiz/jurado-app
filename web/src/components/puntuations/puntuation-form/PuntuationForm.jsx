import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthStore";
import puntuationsService from "../../../services/puntuations";
import { useParams } from "react-router-dom";

function PuntuationForm({ group, onSave }) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [serverError, setServerError] = useState();
  const { user } = useContext(AuthContext);

  const { eventId } = useParams();

  const onPuntuationSubmit = async (puntuation) => {
    try {
      setServerError();
      console.debug("Creating puntuation...");
      puntuation.event = eventId;
      puntuation.jury = user.id;
      puntuation.group = group.id;
      puntuation = await puntuationsService.create(eventId, puntuation);
      onSave()
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
    <form
        onSubmit={handleSubmit(onPuntuationSubmit)}
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
              {...register("interpretation", {
                required: "Se necesita puntaje de 0 a 10",
                max: 10,
                min: 0,
                maxLength: 2,
              })}
            />
          </div>
          {errors.interpretation && (
            <div className="text-red-800 text-sm m-2">
              {errors.interpretation?.message}
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
              {...register("music", {
                required: "Se necesita puntaje de 0 a 10",
                max: 10,
                min: 0,
                maxLength: 2,
              })}
            />
          </div>
          {errors.music && (
            <div className="text-red-800 text-sm m-2">
              {errors.music?.message}
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
              {...register("leter", {
                required: "Se necesita puntaje de 0 a 10",
                max: 10,
                min: 0,
                maxLength: 2,
              })}
            />
          </div>
          {errors.leter && (
            <div className="text-red-800 text-sm m-2">
              {errors.leter?.message}
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
              {...register("staging", {
                required: "Se necesita puntaje de 0 a 10",
                max: 10,
                min: 0,
                maxLength: 2,
              })}
            />
          </div>
          {errors.staging && (
            <div className="text-red-800 text-sm m-2">
              {errors.staging?.message}
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
  )
}

export default PuntuationForm