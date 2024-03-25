import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import EventsList from "./EventsList";
import EventListJury from "./EventListJury";
 
export function EventsTabs() {
  const [activeTab, setActiveTab] = React.useState("Admin");
  const data = [
    {
      label: "Administrador",
      value: "Admin",
      desc: <EventsList/>,
    },
    {
      label: "Jurado",
      value: "Jurys",
      desc: <EventListJury />,
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
            className={activeTab === value ? "text-gray-900 text-xl font-bold w-1/2 h-12" : "w-1/2 text-xl h-12"}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}