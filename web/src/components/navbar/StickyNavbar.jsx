import { useContext, useEffect, useState } from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import { ProfileMenu } from "../profile-menu/ProfileMenu";
import { AuthContext } from "../../contexts/AuthStore";
import { NavLink } from "react-router-dom";

export function StickyNavbar() {
  const { user } = useContext(AuthContext);
  const [route, setRoute] = useState();

  useEffect(() => {
    if (user) {
      setRoute("/events");
    } else {
      setRoute("/");
    }
  }, [user]);

  return (
    <div>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-2">
        <div className="flex items-center justify-between text-blue-gray-900">
          <NavLink to={route}>
            <Typography className="mr-4 cursor-pointer py-1.5 font-medium text-[#622599]">
              Jurado App
            </Typography>
          </NavLink>
          {user && (
            <div className="flex items-center gap-4">
              <ProfileMenu />
            </div>
          )}
          {!user && (
            <NavLink to="/login">
              <Typography className="mr-4 cursor-pointer py-1.5 font-medium text-[#622599] hover:text-black">
                Login
              </Typography>
            </NavLink>
          )}
        </div>
      </Navbar>
    </div>
  );
}
