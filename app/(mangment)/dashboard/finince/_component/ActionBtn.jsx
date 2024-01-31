"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { FaTools, Wrench, User, LiaCashRegisterSolid } from "@/lib/icons";
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

function ActionBtn({ fromID, fromName, fixingCode, type }) {
  const [openDailog, setopenDailog] = useState(false);
  return (
    <>
      <Button
        onClick={() => setopenDailog(true)}
        className={`w-full  h-16 text-lg flex items-center gap-4 ${
          type === "payment" ? "bg-red-500" : "bg-green-500"
        }  `}
      >
        {type === "payment" ? (
          <FaTools size={24} />
        ) : (
          <LiaCashRegisterSolid size={24} />
        )}
        <p>{type === "payment" ? "سند صرف" : "سند قبض"}</p>
      </Button>
      <AlertDialog dir="RTL" open={openDailog} onOpenChange={setopenDailog}>
        <AlertDialogContent className={`bg-gray-300 border-t-8 ${
          type === "payment" ? "border-red-500" : "border-green-500"
        }
        `}>
          <AlertDialogHeader>
            <AlertDialogTitle className="w-full text-center font-tajwal font-bold text-xl">
              {type === "payment" ? "سند صرف تشغيلي" : "سند قبض"}
            </AlertDialogTitle>
            <div className="w-full flex items-center justify-between bg-gray-500 px-4 py-2 rounded-md text-white">
              <div className="flex items-center gap-4">
                <Wrench />
                {fixingCode}
              </div>
              <div className="flex items-center gap-4">
                <User />
                {fromID} - {fromName}
              </div>
            </div>
          </AlertDialogHeader>
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

          <AlertDialogFooter>
            <AlertDialogCancel>اغلاق</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default ActionBtn;
