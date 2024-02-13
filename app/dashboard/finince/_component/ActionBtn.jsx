"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { FaTools, User, LiaCashRegisterSolid, MdCarCrash } from "@/lib/icons";
import PaymentVoucher from "../payment/_component/PaymentVoucher";
import ReciptForm from "../recipt/_component/ReciptForm";
import DailogBox from "@/components/sharedcompnent/DailogBox";
import IconWithdata from "@/components/sharedcompnent/IconWithdata";

function ActionBtn({ fromID, fromName, fixingCode, type }) {
  const [openDailog, setopenDailog] = useState(false);
  return (
    <>
      <Button
        onClick={() => setopenDailog(true)}
        className={`w-full  text-foreground/80 text-lg flex items-center gap-4 ${
          type === "payment" ? "bg-border" : "bg-primary"
        }  `}
      >
        {type === "payment" ? (
          <FaTools size={24} />
        ) : (
          <LiaCashRegisterSolid size={24} />
        )}
        <p>{type === "payment" ? "انشاء سند صرف" : "انشاء سند قبض"}</p>
      </Button>
      <DailogBox
        open={openDailog}
        setOpen={setopenDailog}
        title={type === "payment" ? "سند صرف تشغيلي" : "سند قبض"}
        borederRed={
          type === "payment" ? "border-destructive" : "border-primary"
        }
      >
        <div className="w-full flex items-center flex-col gap-4 p-4">
          <div className="flex items-start justify-between w-full bg-secondary/30 p-2 rounded">
            <IconWithdata>
              <MdCarCrash />
              {fixingCode}
            </IconWithdata>

            <IconWithdata>
              <User />
              {fromID} - {fromName}
            </IconWithdata>
          </div>
        
        <div className="flex items-start justify-between w-full">
        {type === "payment" ? (
          <PaymentVoucher
            fromID={fromID}
            fromName={fromName}
            fixingCode={fixingCode}
          />
        ) : (
          <ReciptForm
            fromID={fromID}
            fromName={fromName}
            fixingCode={fixingCode}
          />
        )}
        </div>
        </div>
      </DailogBox>

    </>
  );
}
export default ActionBtn;
