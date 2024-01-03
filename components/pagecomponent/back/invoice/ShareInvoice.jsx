"use client";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { useRouter } from "next/navigation";
import React,{useState,useEffect} from "react";
import { FaShare } from "react-icons/fa6";
import { usePathname } from 'next/navigation'

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
import toast from "react-hot-toast";
import { deleteAndCloseFixOrder } from "@/db/fixing";

function ShareInvoice({ id, balance, fixOrederId }) {
  const [url,setUrl]=useState()
    const router =useRouter()
  const pathname = usePathname();
  const templLink = "https://admin-work-shop.vercel.app/" + pathname


  const handleSend = (id, balance, fixOrederId) => {
    // router.push(`/dashboard/finince/invoice/create/${id}`)
    const phone ="+966590446021"
    router.push(`https://wa.me/${phone}?text=${url}`)


  };


  useEffect(() => {

    // let fullUrl;
    // if (typeof window !== 'undefined') {
    //   const fullUrl = window.location.href; // Example: 'https://example.com/blog/post-1'
    // }
    setUrl(`${templLink}/share/${id}`)



  }, [])





  return (
    <>
      <div className="flex items-center justify-end  bg-slate-900 w-full gap-6 py-2 px-2">
        <AlertDialog>
          <AlertDialogTrigger className="border h-8 w-8 rounded flex items-center justify-center w-full gap-4 bg-blue-600">
            <FaShare />
            {/* <Trash className="text-red-500" /> */}
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>اصدار فاتورة</AlertDialogTitle>
              <AlertDialogDescription>
                <p className="break-all w-full bg-green-400 text-black">{url}</p>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex items-center gap-4">
              <AlertDialogAction
                onClick={() => handleSend(url)}
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
