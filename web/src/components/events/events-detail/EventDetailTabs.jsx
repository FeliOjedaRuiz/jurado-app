import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import GroupComponent from "../../groups/group-component/GroupComponent";
import JuriesComponent from "../../juries/juries-component/JuriesComponent";
 
export function EventDetailTabs() {
  const [activeTab, setActiveTab] = React.useState("groups");
  const data = [
    {
      label: "Grupos",
      value: "groups",
      desc: <GroupComponent/>,
    },
    {
      label: "Jurados",
      value: "jurys",
      desc: <JuriesComponent/>,
    },
    {
      label: "Puntuaciones",
      value: "puntuations",
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
            className={activeTab === value ? "text-gray-900 font-bold w-1/3 lg:w-32" : "w-1/3 lg:w-32"}
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