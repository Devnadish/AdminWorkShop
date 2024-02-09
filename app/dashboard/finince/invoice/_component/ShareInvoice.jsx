"use client";
import { useRouter } from "next/navigation";
import React,{useState,useEffect} from "react";
import { usePathname } from 'next/navigation'
import { SiWhatsapp } from "react-icons/si";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
   AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
 
function ShareInvoice({ id,  clientName,clientPhone }) {
  const [url,setUrl]=useState()
    const router =useRouter()
  const pathname = usePathname();
  const templLink = "https://admin-work-shop.vercel.app/" + pathname


  const handleSend = async (urlId, id, clientName, clientPhone) => {

    const phoneNumber = clientPhone
    const phone = phoneNumber.replace(/^0/, "+966");
    const link = `https://wa.me/${phone}?text=${url}`
    window.open(link, '_blank');



  };


  useEffect(() => {
    setUrl(`${templLink}/share/${id}`)
  }, [])




  return (
    <>
      <div className="flex items-center justify-end  bg-slate-900 w-full gap-6 py-2 px-2">
        <AlertDialog>
          <AlertDialogTrigger className="border h-12 w-8 rounded flex items-center justify-center w-full gap-4 bg-blue-600">
            <SiWhatsapp size={24} />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="w-full text-center bg-blue-500 text-white rounded-md py-1 ">
                اصدار فاتورة
                 </AlertDialogTitle>
              {/* <AlertDialogDescription> */}
            <div className="flex items-start flex-col gap-4">
                <p className="break-all py-2 px-5  bg-green-800 text-white">اسم العميل : {clientName}</p>
                <p className="break-all  py-2 px-5 bg-green-800 text-white">رقم العميل : {clientPhone }</p>
                <p className="break-all w-full bg-green-400 text-black">{url}</p>
                </div>



              {/* </AlertDialogDescription> */}
            </AlertDialogHeader>
            <AlertDialogFooter className="flex items-center gap-4">
              <AlertDialogAction
                onClick={() => handleSend(url, id, clientName, clientPhone)}
              >
                ارسال
              </AlertDialogAction>
              <AlertDialogCancel>الغاء</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
}

export default ShareInvoice;
