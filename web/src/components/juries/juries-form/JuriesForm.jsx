import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import eventService from "../../../services/events"


function JuriesForm({ onJuryAdd }) {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [serverError, setServerError] = useState();
  const { eventId } = useParams();

  // console.debug(`Tags: ${watch("tags")}`);

  const onEventSubmit = async (event) => {
    try {
      setServerError();
      console.debug("Updateng event");
      event = await eventService.addJury(eventId, event);
      onJuryAdd();
    } catch (error) {
      if (error.response.status === 404) {
        setServerError("No hay ningún usuario registrado con ese email, porfavor chequea bien el email.");
      } else if(error.response.status === 409) {
        setServerError("El usuario ya está registrado como jurado del evento");
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
    <form onSubmit={handleSubmit(onEventSubmit)} className="w-full max-w-sm">
      <div className="mb-3">
        <label className="block mb-1 pl-1 text-base font-medium text-gray-900">
          Email :
        </label>
        <div className="flex">
          <input
            type="email"
            placeholder="Email del jurado"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2"
            {...register("email", {
              required: "Se necesita un email para agregar al jurado",
            })}
          />
          <button
            type="submit"
            className="text-white bg-teal-500 hover:bg-teal-700 text-2xl flex items-center justify-center w-10 h-10 ml-3 focus:ring-2 focus:outline-none focus:ring-teal-300 px-4 rounded-full text-center"
          >
            +
          </button>
        </div>
        {errors.name && (
          <div className="text-red-800 text-sm m-2">{errors.name?.message}</div>
        )}
      </div>

      {serverError && (
        <div className="text-red-800 text-sm text-center">{serverError}</div>
      )}
    </form>
  )
}

export default JuriesForm