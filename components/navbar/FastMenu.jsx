"use client";
import React from "react";
import Link from "next/link";
import {
  PiEngineDuotone,
  LiaCashRegisterSolid,
  FaTools,
  Drill,
  VscCommentUnresolved,
  Angry,
  Lightbulb,
  Kanban,
} from "@/lib/icons";
import Ttip from "@/components/sharedcompnent/Ttip";
import HeaderNewClient from "@/components/navbar/NavBarNewClient";

export const FastMenu = () => {
  const linkStyle =
    "w-9  rounded h-9  shadow-lg border bg-background/80  border-border text-primary-foreground flex  items-center justify-center text-xl";
  const iconColor = "text-primary";
  const iconColor1 = "text-primary/50";
  return (
    <div className="fixed h-full w-12 bg-accent z-0 top-12 left-0 ">
      <div className="flex w-full items-center    flex-col  h-full gap-4 py-4">
      <Ttip tool={"ملخص"}>
          <Link
            href={"/dashboard/admin"}
            className={`${linkStyle} `}
            prefetch={true}
          >
            <Kanban size={25} className={iconColor} />
            {/* كرت صيانة */}
          </Link>
        </Ttip>
        <HeaderNewClient />
        <Ttip tool={"كرت صيانة"}>
          <Link
            href={"/dashboard/fixing/neworder"}
            className={`${linkStyle} `}
            prefetch={true}
          >
            <PiEngineDuotone size={25} className={iconColor} />
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
            <FaTools size={25} className={iconColor} />
          </Link>
        </Ttip>
        <Ttip tool={"سند قبض"}>
          <Link
            href={"/dashboard/finince/recipt"}
            // onClick={() => toggleSidebar()}
            prefetch={true}
            className={`${linkStyle} `}
          >
            <LiaCashRegisterSolid size={25} className={iconColor} />
          </Link>
        </Ttip>
        <Ttip tool={"قطع غيار"}>
          <Link
            href={"/dashboard/spareparts"}
            className={`${linkStyle} `}
            prefetch={true}
          >
            <Drill size={25} className={iconColor} strokeWidth={1.25} />
            {/* كرت صيانة */}
          </Link>
        </Ttip>

        <div className="border-b border-border w-full"></div>
        <Ttip tool={"مشاركات  العملاء"}>
          <Link
            href={"/dashboard/visitor/comment"}
            className={`${linkStyle} `}
            prefetch={true}
          >
            <VscCommentUnresolved size={25} className={iconColor1} />
            {/* كرت صيانة */}
          </Link>
        </Ttip>
        <Ttip tool={"شكاوي  العملاء"}>
          <Link
            href={"/dashboard/visitor/complain"}
            className={`${linkStyle} `}
            prefetch={true}
          >
            <Angry size={25} className="text-destructive" strokeWidth={1.25} />
            {/* كرت صيانة */}
          </Link>
        </Ttip>
        <Ttip tool={"اقتراحات  العملاء"}>
          <Link
            href={"/dashboard/visitor/suggestion"}
            className={`${linkStyle} `}
            prefetch={true}
          >
            <Lightbulb size={25} className={iconColor1} strokeWidth={1.25} />
            {/* كرت صيانة */}
          </Link>
        </Ttip>
      </div>
    </div>
  );
};
