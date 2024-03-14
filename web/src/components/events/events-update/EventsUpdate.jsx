import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthStore";
import eventsService from "../../../services/events";

function EventsUpdate({ event }) {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [serverError, setServerError] = useState();
  const navigate = useNavigate();
  // const { user } = useContext(AuthContext);
  const eventId = event.id;


  

  console.debug(`Tags: ${watch("tags")}`);

  const onEventSubmit = async (event) => {
    try {
      setServerError();
      console.debug("Updating event...");
      event = await eventsService.update(eventId, event);
      navigate(`/events/${eventId}`);
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
    <form onSubmit={handleSubmit(onEventSubmit)} className="w-full max-w-sm">
      <div className="mb-6">
        <label className="block mb-1 pl-1 text-base font-medium text-gray-900">
          Nombre del evento:
        </label>
        <input
          type="text"
          placeholder={event.name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2"
          {...register("name", {
            required: "Se necesita un nombre para el evento",
          })}
        />
        {errors.name && (
          <div className="text-red-800 text-sm m-2">{errors.name?.message}</div>
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
  );
}

export default EventsUpdate;
