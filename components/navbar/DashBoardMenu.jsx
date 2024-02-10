"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Logout from "@/app/dashboard/setting/auth/_component/Logout";
import { Home} from "@/lib/icons";
import DesktopMenu from "./DesktopMenu";
import { FastMenu } from "./FastMenu";
import { ClientActivityDropMenu } from "./ClientActivityDropMenu";


const DashBoardMenu = ({ user }) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const gotoActivity = (url) => { router.push(url); return }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
 

  const toggleAndClose = () => {
    setIsOpen(!isOpen);
  }


  return (

    <div className="flex items-center justify-between   w-full border-b-1   px-2 h-[55px] bg-accent opacity-90 shadow-xl">
      {/* mobile Menu */}
      <div className="flex  justify-center items-center    text-sky-950  rounded-md h-10  md:hidden " id="sidebar">
        <Sheet
          open={isOpen}
          onOpenChange={toggleAndClose}
          onClose={toggleSidebar}
          className="w-1/2"

        >
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="bg-yellow-300  px-2   "
              size="sm"
            >
              <Menu className="text-black" size={20} strokeWidth={1.25} />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-auto bg-sky-800 flex  flex-col justify-between w-1/2 p-2 py-9">
            <DesktopMenu toggleSidebar={toggleSidebar} type={"mobile"} />
            <SheetFooter >
              <Logout />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      {/* md menu */}
    
      <div className="w-full md:w-1/2  md:flex md:items-center justify-center hidden gap-4"><DesktopMenu /> </div>
      <div className="text-white bg-purple-600 px-5 py-1 rounded-md font-tajwal font-bold animate-pulse text-sm">  <p> النظام تحت التطوير</p></div>
      <div className="flex items-center gap-4">
      
        <FastMenu />
        <div className=" flex  items-center   bg-yellow-300 text-sky-950  rounded-md ">
          <ClientActivityDropMenu gotoActivity={gotoActivity} />
          <Link className="flex items-center justify-center rounded-l-none p-0 w-8 " href={"/"}>
            <Home size={20} strokeWidth={1.25} />
          </Link>
        </div>
      </div>
    </div>
  )


};

export default DashBoardMenu;





