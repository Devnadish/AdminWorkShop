"use client";
import React, { useState, useEffect } from "react";
import { Menu, Angry, Lightbulb, RefreshCcw } from "lucide-react";
import ClientMenu from "./ClientMenu";
import FixOrderMenu from "./FixOrderMenu";
import FinicalMenu from "./FinicalMenu";
import Link from "next/link";
import { FaChartColumn } from "react-icons/fa6";
import { VscCommentUnresolved } from "react-icons/vsc";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { FaCarCrash } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";

import { getRecordCounts } from "@/db/dashboard";
import Logout from "../auth/Logout";
import { useSession } from "next-auth/react";
import Setting from "./Users";
import { Home } from "lucide-react";



const DashBoardMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [recordCounts, setRecordCounts] = useState(null);
  const { data: session } = useSession();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };

  const refresData = async () => {
    setRecordCounts("");
    const data = await getRecordCounts();
    setRecordCounts(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRecordCounts();
      setRecordCounts(data);
    };
    fetchData();
  }, []);

  return (
    <>
      {session && (
        <div className="flex items-center justify-between sticky top-0 z-50 shadow-2xl  w-full h-14 bg-slate-800">
          <div className="flex absolute top-0 z-50 ">
            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
              onClose={toggleSidebar}
            >
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-yellow-300  px-2 h-10  mt-2 mr-2"
                  size="sm"
                >
                  <Menu className="text-black" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-auto bg-sky-800 flex  flex-col justify-between w-full p-2 py-9">
                <SidebarMenu toggleSidebar={closeSidebar} />
                <SheetFooter>
                  <Logout />
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
          <ClientActivity   recordCounts={recordCounts}     refresData={refresData}    />
          <div className="absolute left-3 top-2   z-40 flex  justify-center items-center   bg-yellow-300 text-sky-950 rounded-md h-10 w-10">
            <Link href={"/"}>
              <Home size={30} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

const SidebarMenu = ({ toggleSidebar }) => (
  <div className="mt-4 flex flex-col gap-2 ">
    <FastMenu toggleSidebar={toggleSidebar} />
    <ClientMenu toggleSidebar={toggleSidebar} />
    <FixOrderMenu toggleSidebar={toggleSidebar} />
    <FinicalMenu toggleSidebar={toggleSidebar} />
    <Setting toggleSidebar={toggleSidebar} />
  </div>
);

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



function ClientActivity(props) {
  return (
    <div className="flex justify-center justify-center w-full">
      <div className="border w-[280px] h-12 flex items-center justify-around">
        <Link href={"/dashboard/clients/comment"}  className="bg-yellow-300 rounded px-2 py-1 flex items-center gap-2 ">
          <VscCommentUnresolved size={24} />
          <p>{props.recordCounts?.pendingComments}</p>
        </Link>
        <Link href={"/dashboard/clients/complain"} className="bg-red-500 text-white rounded px-1 py-1 flex items-center gap-2 ">
          <Angry />
          <p>{props.recordCounts?.pendingComplains}</p>
        </Link>
        <Link href={"/dashboard/clients/suggestion"} className="bg-blue-400 text-white rounded px-1 py-1 flex items-center gap-2 ">
          <Lightbulb />
          <p>{props.recordCounts?.pendingSuggestions}</p>
        </Link>
        <Button size={"sm"} onClick={() => props.refresData()}>
          {" "}
          <RefreshCcw />
        </Button>
      </div>
    </div>
  );
}
