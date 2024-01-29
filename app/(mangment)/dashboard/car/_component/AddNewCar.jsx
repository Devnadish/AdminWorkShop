"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Car } from "@/lib/icons";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import CarForm from "./CarForm";

function AddNewCar({clientData}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="self-end">
      <Button
        onClick={() => setOpen(true)}
        className="bg-green-500 text-white flex items-center gap-4 font-tajwal font-bold"
      >
        <Car size={20} strokeWidth={1.25} />
        سيارة جديدة
      </Button>

      <AlertDialog dir="RTL" open={open} onOpenChange={setOpen}>
        <AlertDialogContent className="bg-gray-300">
          <AlertDialogHeader>
            <AlertDialogTitle className="w-full text-center font-tajwal font-bold text-xl">
            سيارة جديدة
            </AlertDialogTitle>
          </AlertDialogHeader>
          <CarForm setOpen={setOpen} clientData={clientData}/>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default AddNewCar;
