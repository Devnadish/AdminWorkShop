"use client";
import React, { useState  } from "react";
import { Menu, Angry, Lightbulb } from "lucide-react";
import Link from "next/link";
import { FaChartColumn } from "react-icons/fa6";
import { VscCommentUnresolved } from "react-icons/vsc";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { FaCarCrash } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";

import { getRecordCounts } from "@/db/dashboard";
import Logout from "@/app/_pagecomponent/auth/Logout";
import { Home, Bell } from "lucide-react";
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


const DashBoardMenu = ({user}) => {
  const router=useRouter()
  const [isOpen, setIsOpen] = useState(false);
const gotoActivity=(url) => {router.push(url); return}

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };

  const toggleAndClose = () => {
    setIsOpen(!isOpen);
  }


  return (

      <div className="flex items-center justify-between  w-full border-b-1   px-8 h-[55px] bg-slate-700 shadow-xl">
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

        <div className="w-full md:w-1/2  md:flex md:items-center justify-center hidden "><DesktopMenu /></div>
          <div className=" flex  items-center   bg-yellow-300 text-sky-950  rounded-md ">
          <ClientActivityDropMenu gotoActivity={gotoActivity}  />
          <Link className="flex items-center justify-center rounded-l-none p-0 w-8 " href={"/"}>
            <Home size={20} strokeWidth={1.25} />
            </Link>
          </div>
        </div>
      )


};

export default DashBoardMenu;




const FastMenu = ({ toggleSidebar }) => {
  const linkStyle =
    "w-1/3  rounded h-20  shadow-lg text-white flex flex-col items-center justify-center text-xl";
  return (
    <div className="flex w-full items-center justify-around flex-col gap-4">
      <div className="flex w-full items-center justify-around ">
      <Link
        href={"/dashboard/fixing/neworder"}
        className={`${linkStyle} bg-teal-500`}
        onClick={() => toggleSidebar()}
        prefetch={true}
      >
        <FaCarCrash size={40} className="text-yellow-300" />
        {/* كرت صيانة */}
      </Link>
      <Link
        href={"/dashboard/finince/fixpayment"}
        onClick={() => toggleSidebar()}
        prefetch={true}
        className={`${linkStyle} bg-yellow-300`}
      >
        <FaCashRegister size={40} className="text-red-500" />
      </Link>
      </div>
      <Link
        href={"/dashboard/admin"}
        onClick={() => toggleSidebar()}
        prefetch={true}
        className={`${linkStyle} bg-gray-200 w-11/12 `}
      >
        <FaChartColumn size={40} className="text-blue-500" />
      </Link>
      {/* <Link href={"/dashboard"}>كرت صيانة</Link> */}
    </div>
  );
};


const ClientActivityDropMenu = ({ gotoActivity }) => {
  const [open,setOpen]=useState(false);
  const [clientData, setClientData]=useState({});
  const collectData = async  () => {
    const data = await getRecordCounts();
    setOpen(!open)
    setClientData(pre=>data)
  }
  const handleClose=() => {
    setOpen(false)
  }

const DoPush=(url)=>{
  gotoActivity(url)
  handleClose()

}

  return (
    <>
      <DropdownMenu open={open} onOpenChange={collectData} onClose={handleClose}   dir="RTL">
     <DropdownMenuTrigger asChild onClick={collectData}>
        <Button variant="outline" className="rounded-l-none p-0 w-8 " ><Bell size={20} strokeWidth={1.25} /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="bg-blue-400 text-white text-center">تفاعل العملاء</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => DoPush("/dashboard/clients/comment")}>
            <div className="flex items-center justify-between px-1 w-full">
              <div className="flex items-center gap-1">
                <VscCommentUnresolved size={15}/>

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
  )}
