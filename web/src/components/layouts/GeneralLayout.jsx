import EventsList from "../events/events-list/EventsList";
import { StickyNavbar } from "../navbar/StickyNavbar";

function GeneralLayout({ children }) {
  
  return (
    <div className="w-screen flex flex-col">
      <StickyNavbar />
      <div className="flex h-[calc(100vh-58px)] w-full">
      <div className="hidden lg:flex w-full max-w-sm"><EventsList /></div>
        
        {children}
      </div>
    </div>
  );
}

export default GeneralLayout;
