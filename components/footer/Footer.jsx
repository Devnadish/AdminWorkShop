"use client"
import React from "react";
import { Angry, Car, Lightbulb, LogIn, PhoneCallIcon, Smile } from "lucide-react";
import { PiEngineLight } from "react-icons/pi";
import Link from "next/link";
import { Button } from "../ui/button";
function Footer() {
  return (
    <footer className="sticky bottom-5   flex items-center justify-between px-4 bg-orange-500/50 h-16 z-50 w-[80%] self-center mx-auto rounded-2xl">
      {/* <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      /> */}
      {/* <Wrench strokeWidth={1.5} /> */}

      <Link
        href={"/report"}
        className="w-12 h-12 rounded-full flex items-center justify-center bg-black shadow-lg text-yellow-300"
      >
        <PiEngineLight size={35} />
        {/* <p>تقريري</p> */}
      </Link>
      <div className="flex items-end gap-1">
        <Link
          href={"/newcomment"}
          className="p-0  w-8 h-8 rounded-full flex items-center justify-center bg-blue-400 shadow-lg text-white"
        >
          <Lightbulb size={20} />
        </Link>
        <Button
          onClick={() => (window.location.href = "tel:0509723508")}
          className="border p-0  w-12 h-12 rounded-full flex items-center justify-center bg-green-400 shadow-lg text-black"
        >
          <PhoneCallIcon size={25} />
        </Button>
        <Link
          href={"/newcomplain"}
          className=" p-0  w-8 h-8 rounded-full flex items-center justify-center bg-red-600 shadow-lg text-white"
        >
          <Angry size={25} strokeWidth={1} />
        </Link>
      </div>
      <Link
        href={"/login"}
        className="border w-12 h-12 rounded-full flex items-center justify-center bg-yellow-300 shadow-lg text-black"
      >
        {/* <p>دخول</p> */}
        <LogIn size={25} className="text-black" strokeWidth={1} />
      </Link>
    </footer>
  );
}

export default Footer;
