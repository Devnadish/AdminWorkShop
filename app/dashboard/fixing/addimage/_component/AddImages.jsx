"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye, ImagePlus } from "@/lib/icons";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Dropzone from "@/app/dashboard/fixing/addimage/_component/Dropzone";
function AddImages({ carId, carImage }) {
  const [addimage, setAddimage] = useState(false);
  const [showimage, setshowImage] = useState(false);

  return (
    <>
      <div className="flex w-full items-center justify-around py-1">
        <Button
          className="bg-red-600 h-7 flex items-center justify-between w-20 px-4"
          onClick={() => setAddimage(true)}
        >
          <ImagePlus size={20} /> <span>{carImage}</span>
        </Button>
      </div>
      <AlertDialog dir="RTL" open={addimage} onOpenChange={setAddimage}>
        <AlertDialogContent className="bg-gray-300">
          <AlertDialogHeader>
            <AlertDialogTitle className="w-full text-center font-tajwal font-bold text-xl">
              اضافة صورة --{" "}
              <span className="bg-white/40 px-3 rounded-md text-center">
                {carId}
              </span>
            </AlertDialogTitle>
          </AlertDialogHeader>
          <Dropzone
            className="border   border-neutral-200 p-2 rounded-lg bg-slate-400 "
            carId={carId}
          />
          <AlertDialogFooter>
            <AlertDialogCancel>الغاء</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default AddImages;
