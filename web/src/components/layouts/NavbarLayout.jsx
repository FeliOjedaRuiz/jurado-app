import { StickyNavbar } from "../navbar/StickyNavbar";

function NavbarLayout({ children }) {
  return (
    <div className="w-screen flex flex-col">
      <StickyNavbar />
      {children}
    </div>
  );
}

export default NavbarLayout;
