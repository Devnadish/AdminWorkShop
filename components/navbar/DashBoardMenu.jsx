"use client";
import React, { useState } from "react";
import { Menu, Angry, Lightbulb } from "lucide-react";
import Link from "next/link";
import { VscCommentUnresolved } from "react-icons/vsc";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { getRecordCounts } from "@/db/dashboard";
import Logout from "@/app/dashboard/setting/auth/_component/Logout";
import { Home, Bell, Smile ,FaCashRegister ,PiEngineDuotone} from "@/lib/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import DesktopMenu from "./DesktopMenu";
import Ttip from "@/components/sharedcompnent/Ttip"
import HeaderNewClient from "@/app/dashboard/clients/new/_component/NavBarNewClient";


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

    <div className="flex items-center justify-between   w-full border-b-1   px-2 h-[55px] bg-primary shadow-xl">
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




const FastMenu = () => {
  const linkStyle =
    "w-9  rounded h-9  shadow-lg border border-border text-primary-foreground flex  items-center justify-center text-xl";
  return (
    <div className="flex w-full items-center   gap-2">


      <HeaderNewClient />


      <Ttip tool={"كرت صيانة"}>
        <Link
          href={"/dashboard/fixing/neworder"}
          className={`${linkStyle} `}
          prefetch={true}
        >
          <PiEngineDuotone size={25} className="text-yellow-300" />
          {/* كرت صيانة */}
        </Link>
      </Ttip>

      <Ttip tool={"سند صرف تشغليلي"}>
        <Link
          href={"/dashboard/finince/payment/fixpayment"}
          // onClick={() => toggleSidebar()}
          prefetch={true}
          className={`${linkStyle} `}
        >
          <FaCashRegister size={25} className="text-primary-foreground" />
        </Link>
      </Ttip>
      <Ttip tool={"سند قبض"}>
        <Link
          href={"/dashboard/finince/recipt"}
          // onClick={() => toggleSidebar()}
          prefetch={true}
          className={`${linkStyle} `}
        >
          <Smile size={25} className="text-primary-foreground" />
        </Link>
      </Ttip>


    </div>
  );
};


const ClientActivityDropMenu = ({ gotoActivity }) => {
  const [open, setOpen] = useState(false);
  const [clientData, setClientData] = useState({});
  const collectData = async () => {
    const data = await getRecordCounts();
    setOpen(!open)
    setClientData(pre => data)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const DoPush = (url) => {
    gotoActivity(url)
    handleClose()

  }

  return (
    <>
      <DropdownMenu open={open} onOpenChange={collectData} onClose={handleClose} dir="RTL">
        <DropdownMenuTrigger asChild onClick={collectData}>
          <Button   className="rounded-l-none p-0 w-8 bg-white " ><Bell size={20} strokeWidth={1.5} className="text-blue-700"/></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel className="bg-blue-400 text-white text-center ">تفاعل العملاء</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => DoPush("/dashboard/clients/comment")}>
              <div className="flex items-center justify-between px-1 w-full">
                <div className="flex items-center gap-1">
                  <VscCommentUnresolved size={15} />
                  <p>مشاركات  العملاء</p>
                </div>
                <div className="flex gap-1 ">
                  <span className="text-red-500 px-1   flex items-center justify-center">{clientData.pendingComments || 0}</span>
                  <span className="text-green-500 px-1 flex items-center justify-center">{clientData.visibleComments || 0}</span>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => DoPush("/dashboard/clients/complain")}>
              <div className="flex items-center justify-between px-1 w-full">
                <div className="flex items-center gap-1">
                  <Angry size={15} strokeWidth={1.25} />

                  <p>شكاوي  العملاء</p>
                </div>
                <div className="flex gap-1 ">
                  <span className="text-red-400 px-1    flex items-center justify-center">{clientData.pendingComplains}</span>
                  <span className="text-green-500 px-1   flex items-center justify-center">{clientData.visibleComplains}</span>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => DoPush("/dashboard/clients/suggestion")}>
              <div className="flex items-center justify-between px-1 w-full">
                <div className="flex items-center gap-1">
                  <Lightbulb size={15} strokeWidth={1.25} />
                  <p>اقتراحات  العملاء</p>
                </div>
                <div className="flex gap-1 ">
                  <span className="text-red-500 px-1  flex items-center justify-center">{clientData.pendingSuggestions}</span>
                  <span className="text-green-500 px-1  flex items-center justify-center">{clientData.visibleSuggestions}</span>
                </div>
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
