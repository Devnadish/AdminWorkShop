import { Menu, BellRing, Home, Skull } from "lucide-react";
import Link from "next/link";
import React from "react";
import BuregerMenu from "./BurgerMenu";
import { PiEngineDuotone } from "react-icons/pi";

function Navbar() {
  return (
    <header className="sticky top-0 flex shadow-md max-w-7xl w-full items-center justify-between  text-sm   bg-orange-400  h-14  border px-2  z-50">
      <div className="flex  items-center gap-0">
        <BuregerMenu />
        <div className="relative ">
          <p className="absolute -top-2 -left-2  flex items-center justify-center rounded-full bg-green-700 text-white text-tiny  h-5 w-5">
            99
          </p>
          <BellRing className="text-white" />
        </div>
      </div>
      {/* <p className="text-xl text-primary-foreground font-bold  py-1 border-red-500 ">
        الصحفي لصيانة السيارات
      </p> */}
      <div className="flex gap-2 items-center">
        <Link href={"/"}>
          <Home size={34} className="text-white" />
        </Link>
        <Link
          href={"/dashboard"}
          className="  rounded-full px-2 bg-yellow-800 py-1 shadow-xl "
        >
          <PiEngineDuotone size={34} className="text-yellow-400" />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
