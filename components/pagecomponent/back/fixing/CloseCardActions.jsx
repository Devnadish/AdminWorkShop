"use client"
import {  RouteOff } from 'lucide-react'
import React from 'react'
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
import toast from 'react-hot-toast';
import { deleteAndCloseFixOrder } from '@/db/fixing';


function CloseCardActions({ id, balance, fixOrederId }) {
  const handleDelete = (id, balance, fixOrederId) => {
    if (balance !== 0) {
      toast.error("لا يمكن اقفال كرت وتوجد معلفات مالية علية");
      return;
    }
    const del = deleteAndCloseFixOrder(id, fixOrederId);
  };

  return (
    <>
      {balance !== 0 ? (
        <p className='flex items-center justify-center bg-purple-600  py-3 px-2 rounded-2xl shadow-lg'>لا يمكن اقفال الكرت توجد متعلقات مالية</p>
      ) : (
        <div className="flex items-center justify-end  bg-slate-900 w-full gap-6 py-2 px-2">
          <AlertDialog>
            <AlertDialogTrigger className="border h-8 w-8 rounded flex items-center justify-center w-full gap-4 bg-green-600">
              <p>اغلاق الكرت</p>
              <RouteOff />
              {/* <Trash className="text-red-500" /> */}
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>هل انت متاكد?</AlertDialogTitle>
                <AlertDialogDescription>
                  سيتم اغلاق الكرت ولا يمكن التراجع عن العملية
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
      )}
    </>
  );
}




export default CloseCardActions
