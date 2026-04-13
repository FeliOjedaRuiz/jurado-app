import { StickyNavbar } from "../navbar/StickyNavbar";

function NavbarLayout({ children }) {
  return (
    <div className="w-full max-w-full flex flex-col">
      <StickyNavbar />
      {children}
    </div>
  );
}

export default NavbarLayout;
