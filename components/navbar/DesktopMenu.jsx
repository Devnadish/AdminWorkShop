"use client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  clientMenu,
  maintainanceMenu,
  fininceMenu,
  settingeMenu,
} from "@/constant/menu";
import { UsersRound, BadgeDollarSign, Settings } from "lucide-react";
import Link from "next/link";
import { FaCarCrash } from "react-icons/fa";
import { ModeToggle } from "../ui/ModeTogole";

export function DesktopMenu({ toggleSidebar, type = "desktop" }) {
  const menuStyle = "flex w-full items-center justify-between px-1 text-lg";
  const mainMenu = "w-[250px]  md:w-60 font-tajwal";
  return (
    <>
      <ModeToggle />
      <Menubar
        className="bg-transparent h-full   flex-grow  flex items-center gap-4 justify-around flex-col md:flex-row border-none"
        dir="RTL"
      >
        <MenuWithChild
          menuTitle="العملاء"
          menuIcon={<UsersRound size={20} strokeWidth={1} />}
          submenu={clientMenu}
          menuStyle={menuStyle}
          mainMenu={mainMenu}
          toggleSidebar={toggleSidebar}
          type={type}
        />
        <MenuWithChild
          menuTitle="الصيانة"
          menuIcon={<FaCarCrash size={20} strokeWidth={1} />}
          submenu={maintainanceMenu}
          menuStyle={menuStyle}
          mainMenu={mainMenu}
          toggleSidebar={toggleSidebar}
          type={type}
        />
        <MenuWithChild
          menuTitle="المالية"
          menuIcon={<BadgeDollarSign size={20} strokeWidth={1} />}
          submenu={fininceMenu}
          menuStyle={menuStyle}
          mainMenu={mainMenu}
          toggleSidebar={toggleSidebar}
          type={type}
        />
        <MenuWithChild
          menuTitle="الاعدادات"
          menuIcon={<Settings size={20} strokeWidth={1} />}
          submenu={settingeMenu}
          menuStyle={menuStyle}
          mainMenu={mainMenu}
          toggleSidebar={toggleSidebar}
          type={type}
        />
      </Menubar>
    </>
  );
}
export default DesktopMenu;

const MenuWithChild = ({
  menuTitle,
  submenu,
  menuStyle,
  mainMenu,
  menuIcon,
  toggleSidebar,
  type,
}) => {
  const handleclose = () => {
    if (type === "mobile") {
      toggleSidebar();
    }
  };
  return (
    <MenubarMenu className="w-full">
      <MenubarTrigger className="w-full  bg-transparent  text-primary  text-lg font-tajwal font-semibold flex items-center justify-center gap-4 hover:bg-primary hover:text-white">
        {menuIcon}
        {menuTitle}
      </MenubarTrigger>
      <MenubarContent className={mainMenu}>
        {submenu.map((menu) => {
          return (
            <MenubarItem asChild key={menu.id}>
              <Link
                href={menu.href}
                className={menuStyle}
                onClick={handleclose}
              >
                <p>{menu.title}</p>
                {menu.icon}
              </Link>
            </MenubarItem>
          );
        })}
      </MenubarContent>
    </MenubarMenu>
  );
};
