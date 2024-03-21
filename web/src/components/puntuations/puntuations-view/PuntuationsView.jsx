
function PuntuationsView({ puntuation }) {
  return (
    <div className="w-full max-w-sm mt-5">
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
            disabled
          />
        </div>
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
            disabled
          />
        </div>
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
            disabled
          />
        </div>
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
            disabled
          />
        </div>
      </div>

      <button
        
        className="text-white bg-gray-500 mt-3 rounded-full w-full px-4 py-1.5 text-center "
      >
        Guardar cambios
      </button>
    </div>
  );
}

export default PuntuationsView;
