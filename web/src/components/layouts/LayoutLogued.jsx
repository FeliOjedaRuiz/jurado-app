import EventsList from "../events/events-list/EventsList";
import { StickyNavbar } from "../navbar/StickyNavbar";

function LayoutLoged({ children }) {
  return (
    <div className="w-screen flex flex-col">
      <StickyNavbar />
      <div className="flex h-[calc(100vh-58px)] w-full">
        <EventsList />
        {children}    
        
      </div>
    </div>
  );
}

export default LayoutLoged;
