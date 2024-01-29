"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye } from "@/lib/icons";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { getTimeElapsed } from "@/lib/timeanddate";

function ViewFixCard({ CardData }) {
  const [open, setOpen] = useState(false);
  return (
    
      <div className="flex  items-center  ">
        <Button
          className=" bg-systemColor-required"
          onClick={() => {
            setOpen(true);
          }}
        >
          <Eye />
        </Button>
        <AlertDialog dir="RTL" open={open} onOpenChange={setOpen}>
          <AlertDialogContent className="bg-gray-300">
            <AlertDialogHeader>
              <AlertDialogTitle className="w-full flex justify-end text-center font-tajwal font-bold text-xl ">
                <p className={`w-fit px-4 text-center text-white py-1 rounded-md font-tajwal font-bold text-xl ${CardData.isClosed ? "bg-green-500":"bg-red-500"}` }>
                {CardData.isClosed ? "منتهي وتم تسليم العميل": "مازال تحت الصيانة"}
                </p>
              </AlertDialogTitle>
            </AlertDialogHeader>
            <DisplayFixCard CardData={CardData} />
            <AlertDialogFooter>
              <AlertDialogCancel>اغلاق</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    
  );
}

export default ViewFixCard;

const DisplayFixCard = ({ CardData }) => {
    const net= (CardData.total-CardData.discount)-  CardData.receive
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col items-start justify-start gap-2 w-full border-green-800 px-3 rounded-md py-3 border">
        <p className="text-xl font-tajwal font-bold border-b-4 border-green-600 ">
          معلومات الكرت
        </p>
        <div className="flex items-center justify-between w-full gap-4">
          <div className="flex items-center gap-1  ">
            <span>رقم الكرت:</span>
            <span className="font-bold">{CardData.fixingId}</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <span>تاريخ الكرت:</span>
            <span className="font-bold">{getTimeElapsed(CardData.createdDate)}</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <span>اخر تعديل:</span>
            <span className="font-bold">{getTimeElapsed(CardData.updatedDate)}</span>
          </div>
          
        </div>
        <div className="flex items-center justify-start w-full gap-4 flex-wrap">
          <div className="flex items-center gap-1 ">
            <span> المهندس:</span>
            <span className="font-bold">{CardData.engName}</span>
          </div>
          <div className="flex items-center gap-1 ">
            <span>موعد التسليم:</span>
            <span className="font-bold">{CardData.delivery}</span>
          </div>
         
         
        </div>
        <div className="flex items-center gap-1 flex-col justify-start w-full border px-2 py-1 border-gray-400 rounded">
            <span className="flex items-center gap-1  justify-start w-full" >طلبات الصيانة:</span>
            <span className="font-bold max-h-16 overflow-auto ">{CardData.detail}</span>
          </div>
      </div>


      <div className="flex flex-col items-start justify-start gap-1 w-full border-green-800 px-3 rounded-md py-3 border">
        <p className="text-xl font-tajwal font-bold border-b-4 border-green-600 ">
          معلومات السيارة
        </p>
        <div className="flex items-center justify-start w-full gap-4">
          <div className="flex items-center gap-1 ">
            <span>رقم السيارة:</span>
            <span className="font-bold">{CardData.selectedCar}</span>
          </div>
          <div className="flex items-center gap-1 ">
            <span>اسم العميل:</span>
            <span className="font-bold">{CardData.clientName}</span>
          </div>
        </div>
      </div>
     
     

      <div className="flex flex-col items-start justify-between gap-1 w-full border-blue-600 px-3 rounded-md py-3 border">
        <p className="text-xl font-tajwal font-bold border-b-4 border-blue-600 ">
          معلومات مالية
        </p>
        <div className="flex items-center justify-between w-full gap-4 flex-wrap">
          <div className="flex items-center gap-1 ">
            <span> التكلفة:</span>
            <span className="font-bold">{CardData.total}</span>
          </div>
          <div className="flex items-center gap-1 ">
            <span>المستلم:</span>
            <span className="font-bold">{CardData.receive}</span>
          </div>
          <div className="flex items-center gap-1 ">
            <span>الخصم:</span>
            <span className="font-bold">{CardData.discount}</span>
          </div>
          <div className="flex items-center gap-1 ">
            <span>المتبقي:</span>
            <span className="font-bold bg-gray-400 px-3 rounded-md">{net}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-1 w-full border-purple-600 px-3 rounded-md py-3 border">
        <div className="flex items-center justify-between w-full gap-4 flex-wrap">
          <div className="flex items-center gap-1 flex-1">
            <Button className="w-full bg-purple-800">ملاحظات </Button>
          </div>
          <div className="flex items-center gap-1 flex-1">
            <Button className="w-full bg-purple-500">الصور </Button>
          </div>
        </div>
      </div>

    </div>
  );
};
