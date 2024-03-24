import { useState } from "react";
import { useForm } from "react-hook-form";
import puntuationsService from "../../../services/puntuations";

function PuntuationsUpdate({ puntuation, onSave, changeEdit }) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const [serverError, setServerError] = useState();

  const puntuationId = puntuation.id;
  const oldPuntuation = puntuation;

  const onPuntuationSubmit = async (puntuation) => {
    try {
      setServerError();
      console.debug("Updating puntuation...");
      if (!puntuation.interpretation) {
        puntuation.interpretation = oldPuntuation.interpretation;
      }
      if (!puntuation.music) {
        puntuation.music = oldPuntuation.music;
      }
      if (!puntuation.leter) {
        puntuation.leter = oldPuntuation.leter;
      }
      if (!puntuation.staging) {
        puntuation.staging = oldPuntuation.staging;
      }
      puntuation = await puntuationsService.update(puntuationId, puntuation);
      onSave();
      changeEdit();
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
            placeholder={puntuation.interpretation}
            min="0"
            max="10"
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-base rounded-lg block p-1 w-12 text-center"
            {...register("interpretation", {
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
            placeholder={puntuation.music}
            min="0"
            max="10"
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-base rounded-lg block p-1 w-12 text-center"
            {...register("music", {
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
            placeholder={puntuation.leter}
            min="0"
            max="10"
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-base rounded-lg block p-1 w-12 text-center"
            {...register("leter", {
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
            placeholder={puntuation.staging}
            min="0"
            max="10"
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-base rounded-lg block p-1 w-12 text-center"
            {...register("staging", {
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
        Guardar cambios
      </button>
    </form>
  );
}

export default PuntuationsUpdate;
