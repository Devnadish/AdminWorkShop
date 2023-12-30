"use client";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { useRouter } from "next/navigation";
import React from "react";
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

function CreateInvoice({ id, balance, fixOrederId }) {
    const router =useRouter()
  const handleDelete = (id, balance, fixOrederId) => {

    router.push(`/dashboard/finince/invoice/create/${id}`)

    // const del = CreateInvoice(id);



  };

  return (
    <>
      <div className="flex items-center justify-end  bg-slate-900 w-full gap-6 py-2 px-2">
        <AlertDialog>
          <AlertDialogTrigger className="border h-8 w-8 rounded flex items-center justify-center w-full gap-4 bg-green-600">
            <p>اصدار فاتورة</p>
            <FaFileInvoiceDollar />
            {/* <Trash className="text-red-500" /> */}
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>اصدار فاتورة</AlertDialogTitle>
              <AlertDialogDescription>
                سيتم مراجعة حركة العميل واصدار فاتورة تفصيلية
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex items-center gap-4">
              <AlertDialogAction
                onClick={() => handleDelete(id, balance, fixOrederId)}
              >
                استمر
              </AlertDialogAction>
              <AlertDialogCancel>الغاء</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  );
}

export default CreateInvoice;
