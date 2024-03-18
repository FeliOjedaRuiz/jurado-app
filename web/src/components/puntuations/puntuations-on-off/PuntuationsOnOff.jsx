import { Switch } from "@material-tailwind/react";
import { useEffect, useState } from "react";

function PuntuationsOnOff({ onSwitch, enable }) {
  const [switching, setSwitching] = useState(enable)

  useEffect(() => {
    setSwitching(enable)
  }, [enable])
  

  

  return (
    <div className="flex items-center border-2 border-teal-300 bg-teal-50 rounded-xl py-2 px-3 mt-4">
    <p className="mr-8 text-xl text-teal-800 font-medium">Habilitar votación</p>
      <Switch color="teal" onClick={onSwitch} defaultChecked={switching} />
    </div>
  );
}

export default PuntuationsOnOff;
