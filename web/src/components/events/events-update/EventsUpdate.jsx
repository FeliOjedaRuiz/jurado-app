import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthStore";
import eventsService from "../../../services/events";
import CategoryItem from "../category-item/CategoryItem";

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

  //UPDATE DE CRITERIOS DE EVALUACIÓ

  const [criterion, setCriterion] = useState("");
  const [categorys, setCategorys] = useState([]);
  // const [newCategorys, setNewCategorys] = useState([]);
  let newCategorys = []
  const [reload, setReload] = useState(false)

  useEffect(() => {
    if (event.categorys) {
      console.log(`usefect ${categorys}`)
      setCategorys(event.categorys);
    }
  }, [event]);

  useEffect(() => {
    console.log("x")
    newCategorys = categorys
    newCategorys.push(criterion);
    console.log(`newCat ${newCategorys}`)
    setCategorys(newCategorys)
  }, [reload])

  const handleChange = (e) => {
    setCriterion(e.target.value);
  };

  const handleClick = () => {
    // newCategorys = categorys
    // newCategorys.push(criterion);
    // console.log(`newCat ${newCategorys}`)
    setReload(!reload)
  };

  return (
    <form onSubmit={handleSubmit(onEventSubmit)} className="w-full max-w-sm">
      <div className="mb-6">
        <label className="block mb-1 pl-1 text-base font-medium text-gray-900">
          Nombre del evento:
        </label>
        <div className="flex">
          <input
            type="text"
            placeholder={event.name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2"
            {...register("name", {
              required: "Se necesita un nombre para el evento",
            })}
          />
          <div className="text-white bg-teal-500 hover:bg-teal-700 text-2xl flex items-center justify-center w-10 h-10 ml-3 focus:ring-2 focus:outline-none focus:ring-teal-300 px-4 rounded-full text-center">
            <p>+</p>
          </div>
        </div>
        {errors.name && (
          <div className="text-red-800 text-sm m-2">{errors.name?.message}</div>
        )}
      </div>

      <div className="mb-6">
        <label className="block mb-1 pl-1 text-base font-medium text-gray-900">
          Criterios de evaluación:
        </label>
        <div className="flex">
          <input
            type="text"
            placeholder="Escribir criterio"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2"
          />
          <div
            onClick={handleClick}
            className="text-white bg-teal-500 hover:bg-teal-700 text-2xl flex items-center justify-center w-10 h-10 ml-3 focus:ring-2 focus:outline-none focus:ring-teal-300 px-4 rounded-full text-center"
          >
            <p>+</p>
          </div>
        </div>
        {errors.name && (
          <div className="text-red-800 text-sm m-2">{errors.name?.message}</div>
        )}
        <div className="bg-gray-50 border mt-2 border-gray-300 text-gray-900 text-base rounded-lg block w-full py-2 px-1">
          {categorys.map((category, index) => (
            <CategoryItem category={category} key={index} />
          ))}
        </div>
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
