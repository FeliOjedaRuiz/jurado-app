import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
 
export function UnderlineTabs() {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "Administrador",
      value: "Admin",
      desc: ``,
    },
    {
      label: "Jurado",
      value: "Jury",
      desc: ``,
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
            className={activeTab === value ? "text-gray-900 w-32" : "w-32"}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      {/* <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody> */}
    </Tabs>
  );
}