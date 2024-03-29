import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import React from "react";
import PuntuationsOrder from './../puntuations-order/PuntuationsOrder';
import PuntuationsInterp from "../puntuations-interp/PuntuationsInterp";
import PuntuationsMusic from "../puntuations-music/PuntuationsMusic";
import PuntuationsLeter from "../puntuations-leter/PuntuationsLeter";
import PuntuationsStaging from './../puntuations-staging/PuntuationsStaging';

function PuntuationsTabs({ groupsList }) {
  const [activeTab, setActiveTab] = React.useState("Total");

  const data = [
    {
      label: "TOTAL",
      value: "Total",
      desc: <PuntuationsOrder groupsList={groupsList} />,
    },
    {
      label: "Interpret",
      value: "Interpretación",
      desc: <PuntuationsInterp groupsList={groupsList} />,
    },
    {
      label: "Música",
      value: "Música",
      desc: <PuntuationsMusic groupsList={groupsList} />,
    },
    {
      label: "Letra",
      value: "Letra",
      desc: <PuntuationsLeter groupsList={groupsList} />,
    },
    {
      label: "Escena",
      value: "Escena",
      desc: <PuntuationsStaging groupsList={groupsList} />,
    },    
  ];

  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-teal-700 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900 text-lg font-bold w-1/5 h-12" : "w-1/5 text-lg h-12"}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className="p-0">
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  )
}

export default PuntuationsTabs