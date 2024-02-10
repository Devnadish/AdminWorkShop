"use client";
import React from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button";

export const ShowAlert = ({ open, setIsopen, data }) => {
  return (
    <Drawer open={open} onOpenChange={setIsopen}  className="w-[300px] max-w-md border-t-8 border-red-500 " dir="RTL">

    <DrawerContent className="flex items-center justify-center max-w-xl px-4 bg-gray-400">
      
        <DrawerHeader>
          <DrawerTitle><p className="w-full text-right ">تم انشاء سند صرف تشغيلي</p></DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col  border border-blue-600  w-full items-center justify-between shadow-lg px-4 py-2 bg-gray-200 rounded-lg ">
           <div className="flex items-center justify-between border-b-2  py-1 w-full ">
             <p className="flex gap-4   items-center  py-1 px-4">
               <span className="text-blue-600" > رقم السند</span>
               <span className="px-4 font-bold">{data.paymentNo}</span>
             </p>
             <p className="flex gap-4  items-center  py-1 px-3">
             <span className="text-blue-600" >  رقم امر الاصلاح</span>
               <span className="px-4 font-bold">{data.fixNo}</span>
             </p>
           </div>

           <p className="flex gap-4   items-center  w-full py-1 px-3 ">
           <span className="text-blue-600" >اسم العميل</span>
             <span className="px-4 font-bold">{data.client}</span>
           </p>
           <p className="flex gap-4 items-start   w-full py-1 px-3 ">
           <span className="text-blue-600" >الوصف</span>
             <span className="px-4 font-bold">{data.detail}</span>
           </p>
           <p className="flex gap-4 self-end px-4 py-2  text-xl font-semibold shadow-lg border-2 border-red-600 rounded-lg ">
           <span className="text-blue-800" >المبلغ</span>
             <span className=" px-3 rounded font-bold">
               {data.amt}
             </span>
           </p>
         </div>



        <DrawerFooter>
          <DrawerClose asChild>
            <Button onClick={() => { setIsopen(false) }} variant="outline">اغلاق</Button>

          </DrawerClose>
        </DrawerFooter>

    </DrawerContent>
  </Drawer>
  );
};
