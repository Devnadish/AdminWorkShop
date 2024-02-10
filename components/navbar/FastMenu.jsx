"use client";
import React from "react";
import Link from "next/link";
import { Smile, FaCashRegister, PiEngineDuotone, LiaCashRegisterSolid, FaTools } from "@/lib/icons";
import Ttip from "@/components/sharedcompnent/Ttip";
import HeaderNewClient from "@/components/navbar/NavBarNewClient";


export const FastMenu = () => {
  const linkStyle = "w-9  rounded h-9  shadow-lg border bg-background/80  border-border text-primary-foreground flex  items-center justify-center text-xl";
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
          <FaTools size={25} className="text-foreground/70" />
        </Link>
      </Ttip>
      <Ttip tool={"سند قبض"}>
        <Link
          href={"/dashboard/finince/recipt"}
          // onClick={() => toggleSidebar()}
          prefetch={true}
          className={`${linkStyle} `}
        >
          <LiaCashRegisterSolid size={25} className="text-foreground/70" />
        </Link>
      </Ttip>


    </div>
  );
};
