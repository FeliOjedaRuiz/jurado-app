import { useContext, useEffect, useState } from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import { ProfileMenu } from "../profile-menu/ProfileMenu";
import { AuthContext } from "../../contexts/AuthStore";

export function StickyNavbar() {
  const { user } = useContext(AuthContext);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  // const navList = (
  //   <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
  //     <Typography
  //       as="li"
  //       variant="small"
  //       color="blue-gray"
  //       className="p-1 font-normal"
  //     >
  //       <a href="#" className="flex items-center">
  //         Pages
  //       </a>
  //     </Typography>
  //     <Typography
  //       as="li"
  //       variant="small"
  //       color="blue-gray"
  //       className="p-1 font-normal"
  //     >
  //       <a href="#" className="flex items-center">
  //         Account
  //       </a>
  //     </Typography>
  //     <Typography
  //       as="li"
  //       variant="small"
  //       color="blue-gray"
  //       className="p-1 font-normal"
  //     >
  //       <a href="#" className="flex items-center">
  //         Blocks
  //       </a>
  //     </Typography>
  //     <Typography
  //       as="li"
  //       variant="small"
  //       color="blue-gray"
  //       className="p-1 font-normal"
  //     >
  //       <a href="#" className="flex items-center">
  //         Docs
  //       </a>
  //     </Typography>
  //   </ul>
  // );

  return (
    <div>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-2">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            Jurado App
          </Typography>
          {user && (
            <div className="flex items-center gap-4">
              <ProfileMenu />
            </div>
          )}
        </div>
      </Navbar>
    </div>
  );
}
