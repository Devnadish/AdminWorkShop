"use client"
import {  RouteOff } from 'lucide-react'
import React, { useState }  from 'react'


import { deleteAndCloseFixOrder } from '@/db/fixing';
import INPUT from '@/components/sharedcompnent/INPUT';
import { IoLogoUsd } from "react-icons/io5";
import Submit from '@/components/sharedcompnent/Submit';
import DailogBox from "@/components/sharedcompnent/DailogBox";
import { Button } from '@/components/ui/button';
import { Notify } from '@/lib/notify';

function CloseCardActions({ id, balance, fixOrederId }) {
  const [open, setOpen] = useState(false);
  const cardId=id
  const balanceAmt = balance
  const fixNo = fixOrederId

  const handleCloseCard = (data) => {
    const formBalance = data.get("formAmt")

    if (parseFloat(balanceAmt) !== parseFloat(formBalance)) {
      Notify("رصيد الاقفال غير صحيح","error")
      return;
    }
    const del = deleteAndCloseFixOrder(id, fixOrederId, formBalance);
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="bg-primary text-primary-foreground  flex items-center gap-4 font-tajwal font-bold"
      >
        {/* <Car size={30} strokeWidth={1.25} /> */}
        اغلاق الكرت
      </Button>

      <DailogBox
        open={open}
        setOpen={setOpen}
        title={" اقفال كرت صيانة"}
        borederRed={"border-primary"}
      >
        <div className="border-destructive   p-2  text-lg border-b text-foreground/70  font-tajwal h-9 flex items-center justify-center gap-4">
          ادخل المبلغ المتبقي لكي يتم اغلاق الكرت{" "}
          <span className="text-destructive-foreground animate-pulse rounded px-3">{balance}</span>
        </div>
        <form
          action={handleCloseCard}
          className="flex items-center flex-col gap-4  border  border-border p-4 rounded bg-secondary/50 shadow-lg w-full"
        >
          <div className="flex items-center gap-1 font-tajwal w-full flex-col">
            <label htmlFor="amt" className='w-full' >قيمة السداد</label>
            <INPUT
              id="amt"
              placeholder={"المبلغ"}
              icon={<IoLogoUsd className="text-white/80" />}
              name="formAmt"
            />
          </div>
          <div className="flex items-center justify-end  w-full">
            <Submit title="الاستمرار في عملية السداد" color='bg-secondary'/>
          </div>
        </form>
      </DailogBox>
    </>
  );
}




export default CloseCardActions
