import React, { useContext } from "react";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { AuthContext } from "../../contexts/AuthStore";

export function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, logout } = useContext(AuthContext);

  const closeMenu = () => setIsMenuOpen(false);

  // profile menu component
  const profileMenuItems = [
    {
      label: "Mi Perfil",
      icon: UserCircleIcon,
      acction: closeMenu,
    },
    // {
    //   label: "Edit Profile",
    //   icon: Cog6ToothIcon,
    // },
    {
      label: "Cerrar sesión",
      icon: PowerIcon,
      acction: logout,
    },
  ];

  

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="black"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Typography variant="h6" className="ml-3 text-xs lowercase">
            {user.email}
          </Typography>
          {user.image && <Avatar
            variant="circular"
            size="xs"
            alt="foto de perfil"
            className="border border-gray-900 p-0.5"
            src={user.image} />}
            {!user.image && <div className="bg-teal-600 w-6 h-6 rounded-full text-center text-white flex items-center justify-center ">
          <p>{user.email[0]}</p>
        </div> }
          
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, acction }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={acction}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
