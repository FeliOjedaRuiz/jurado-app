import { children } from "react";
import { StickyNavbar } from "../navbar/StickyNavbar";

function LayoutLogin({ children }) {
  return (
    <div className="w-screen flex flex-col">
      <StickyNavbar />
      {children}
    </div>
  );
}

export default LayoutLogin;
