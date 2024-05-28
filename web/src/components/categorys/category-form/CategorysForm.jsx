import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import categorysService from "../../../services/categorys.js";


function CategorysForm({ onCategoryCreation }) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [serverError, setServerError] = useState();
  const { eventId } = useParams();

  const onCategorySubmit = async (category) => {
    try {
      setServerError();
      console.debug("Creating category...");
      category.event = eventId;
      category = await categorysService.create(category, eventId);
      onCategoryCreation();
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
    <form onSubmit={handleSubmit(onCategorySubmit)}>
        <div className="mb-6">
          <label className="block mb-1 pl-1 text-base font-medium text-gray-900">
            Criterios de evaluación:
          </label>
          <div className="flex">
            <input
              type="text"
              placeholder="Escribir criterio"
              // onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg block w-full p-2"
              {...register("name", {
              required: "Se necesita un nombre para el grupo",
            })}
            />
            <button
              type="submit"
              // onClick={handleClick}
              className="text-white bg-teal-500 hover:bg-teal-700 text-2xl flex items-center justify-center w-10 h-10 ml-3 focus:ring-2 focus:outline-none focus:ring-teal-300 px-4 rounded-full text-center"
            >
              <p>+</p>
            </button>
          </div>
          {/* {errors.name && (
          <div className="text-red-800 text-sm m-2">{errors.name?.message}</div>
        )} */}
        </div>

        {serverError && (
          <div className="text-red-800 text-sm text-center">{serverError}</div>
        )}
      </form>
  )
}

export default CategorysForm