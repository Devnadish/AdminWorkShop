"use client"
import { Button } from '@/components/ui/button'
import { deleteFixOrder } from '@/db/fixing'
import { Edit, Trash } from 'lucide-react'
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


function CardActions({id}) {

const handleDelete=(id)=>{

    const del = deleteFixOrder(id);

}

  return (
    <div className="flex items-center justify-end  bg-slate-900 w-full gap-6 py-2 px-2">
      {/* <Button className="border">
        <Edit className="text-blue-500" />
      </Button> */}
      {/* <Button className="border" onClick={() => handleDelete(id)}>
        <Trash className="text-red-500" />
      </Button> */}

        <AlertDialog>
          <AlertDialogTrigger className="border h-8 w-8 rounded flex items-center justify-center">
            <Trash className="text-red-500" />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>هل انت متاكد?</AlertDialogTitle>
              <AlertDialogDescription>
                سيتم حذف الكرت ولا يمكن التراجع عن العملية
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex items-center gap-4">
              <AlertDialogAction onClick={() => handleDelete(id)}>
                استمر
              </AlertDialogAction>
              <AlertDialogCancel>الغاء</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

    </div>
  );
}

export default CardActions
