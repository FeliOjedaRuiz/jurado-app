import { EventsTabs } from "../events/events-list/EventsTabs";
import { StickyNavbar } from "../navbar/StickyNavbar";

function GeneralLayout({ children }) {
  return (
    <div className="w-screen flex flex-col">
      <StickyNavbar />
      <div className="flex h-[calc(100vh-58px)] ">
        <div className="hidden md:block min-w-96 border-r-2 border-gray-300">
          <EventsTabs />
        </div>
        {children}
      </div>
    </div>
  );
}

export default GeneralLayout;
