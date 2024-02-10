"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  FaTools,
  Wrench,
  User,
  LiaCashRegisterSolid,
  MdCarCrash,
} from "@/lib/icons";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import PaymentVoucher from "../payment/_component/PaymentVoucher";
import ReciptForm from "../recipt/_component/ReciptForm";
import DailogBox from "@/components/sharedcompnent/DailogBox";

function ActionBtn({ fromID, fromName, fixingCode, type }) {
  const [openDailog, setopenDailog] = useState(false);
  return (
    <>
      <Button
        onClick={() => setopenDailog(true)}
        className={`w-full   text-lg flex items-center gap-4 ${
          type === "payment" ? "bg-destructive" : "bg-primary"
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
        borederRed={type === "payment" ?  "border-destructive" :"border-primary"}
      >
        <div className="w-full flex items-center justify-between bg-background/30 px-4 py-2 rounded-md text-foreground/80">
          <div className="flex items-center gap-4">
            <MdCarCrash />
            {fixingCode}
          </div>
          <div className="flex items-center gap-4">
            <User />
            {fromID} - {fromName}
          </div>
        </div>
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
      </DailogBox>
    </>
  );
}

export default ActionBtn;
