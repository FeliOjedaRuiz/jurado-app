import { useContext, useEffect, useState } from "react";
import EventsList from "../events/events-list/EventsList";
import { StickyNavbar } from "../navbar/StickyNavbar";
import { AuthContext } from '../../contexts/AuthStore.jsx';
import eventsService from "../../services/events.js"

function GeneralLayout({ children }) {
  const { user } = useContext(AuthContext)  
  const [events, setEvents] = useState([]);
  // const [reload, setReload] = useState(false)

  useEffect(() => {
    eventsService.listAdmin(user.id)
      .then((events) => {
        setEvents(events)        
      })
      .catch(error => console.error(error));
  }, [/*reload*/]);

  // const onEstabCreation = () => {
  //   setReload(!reload)
  // }
  
  return (
    <div className="w-screen flex flex-col">
      <StickyNavbar />
      <div className="flex h-[calc(100vh-58px)] w-full">
      <div className="hidden lg:flex w-full max-w-sm"><EventsList events={events} /></div>
        
        {children}
      </div>
    </div>
  );
}

export default GeneralLayout;
