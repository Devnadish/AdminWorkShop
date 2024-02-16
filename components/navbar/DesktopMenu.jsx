"use client";
import {
  Menubar,
} from "@/components/ui/menubar";
import {
  clientMenu,
  maintainanceMenu,
  fininceMenu,
  settingeMenu,
} from "@/constant/menu";
import { UsersRound, BadgeDollarSign, Settings } from "lucide-react";
import { FaCarCrash } from "react-icons/fa";
import { ModeToggle } from "../ui/ModeTogole";
import { MenuWithChild } from "./component/MenuWithChild";
import { BiSolidCarMechanic, Drill } from "@/lib/icons";

export function DesktopMenu({ toggleSidebar, type = "desktop" }) {
  const menuStyle = "flex w-full items-center justify-between px-1 text-lg";
  const mainMenu = "w-[250px]  md:w-60 font-tajwal border-none";
  return (
    <>
      <ModeToggle />
      <Menubar
        className="bg-transparent h-full   flex-grow  flex items-center gap-4 justify-around flex-col md:flex-row border-none"
        dir="RTL"
      >
        <MenuWithChild
          menuTitle="العملاء"
          menuIcon={<UsersRound size={25} strokeWidth={1} />}
          submenu={clientMenu}
          menuStyle={menuStyle}
          mainMenu={mainMenu}
          toggleSidebar={toggleSidebar}
          type={type}
        />
        <MenuWithChild
          menuTitle="الصيانة"
          menuIcon={<FaCarCrash size={25} strokeWidth={1} />}
          submenu={maintainanceMenu}
          menuStyle={menuStyle}
          mainMenu={mainMenu}
          toggleSidebar={toggleSidebar}
          type={type}
        />
        <MenuWithChild
          menuTitle="المالية"
          menuIcon={<BadgeDollarSign size={25} strokeWidth={1} />}
          submenu={fininceMenu}
          menuStyle={menuStyle}
          mainMenu={mainMenu}
          toggleSidebar={toggleSidebar}
          type={type}
        />
       
        <MenuWithChild
          menuTitle="الاعدادات"
          menuIcon={<Settings size={25} strokeWidth={1} />}
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


