"use client"
import {  RouteOff } from 'lucide-react'
import React  from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { deleteAndCloseFixOrder } from '@/db/fixing';
import INPUT from '@/components/sharedcompnent/INPUT';
import { IoLogoUsd } from "react-icons/io5";
import Submit from '@/components/sharedcompnent/Submit';


function CloseCardActions({ id, balance, fixOrederId }) {
  // const [data,setData]=useState({cardId:id,CardBalance:balance,fixOrederId:fixOrederId});
  const cardId=id
  const balanceAmt = balance
  const fixNo = fixOrederId

  const handleCloseCard = (data) => {
    const formBalance = data.get("formAmt")

    if (parseFloat(balanceAmt) !== parseFloat(formBalance)) {
      toast.error("رصيد الاقفال غير صحيح");
      return;
    }
    const del = deleteAndCloseFixOrder(id, fixOrederId, formBalance);
  };

  return (
    <>
        <div className="flex items-center justify-end  bg-slate-900 w-full gap-6 py-2 px-2">
          <AlertDialog dir="RTL">
            <AlertDialogTrigger className="border h-8 w-8 rounded flex items-center justify-center w-full gap-4 bg-green-600">
              <p>اغلاق الكرت</p>
              <RouteOff />
              {/* <Trash className="text-red-500" /> */}
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
              <AlertDialogTitle className="text-right p-2 rounded text-lg font-tajwal">هل انت متاكد</AlertDialogTitle>
                <AlertDialogDescription className="bg-red-600 text-white text-right p-2 rounded-lg text-lg font-tajwal">
                ادخل المبلغ المتبقي لكي يتم اغلاق الكرت <span className='bg-red-500 rounded px-3'>{balance}</span>
                </AlertDialogDescription>
              <form action={handleCloseCard} className='flex items-center flex-col gap-4 border border-4  border-sky-500 p-4 rounded bg-sky-600 shadow-lg'>
                <div className='flex items-center gap-4 font-tajwal'>
                <label htmlFor='amt'>قيمة  السداد</label>
                <INPUT id="amt" placeholder={"المبلغ"} icon={<IoLogoUsd className="text-white/80"/>} name="formAmt"/>
                </div>
                <div className='flex items-center justify-end  w-full'>
                <Submit title='الاستمرار في عملية السداد'/>
                </div>
              </form>

              </AlertDialogHeader>
              <AlertDialogFooter className="flex items-center gap-4">
                {/* <AlertDialogAction
                  onClick={() => handleDelete(id, balance, fixOrederId)}

                >
                  الاستمرار في عملية السداد
                </AlertDialogAction> */}
                <AlertDialogCancel>الغاء</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

    </>
  );
}




export default CloseCardActions
