"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { UserRoundPlus } from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Newform from "./Newform";

function NewBtnClient() {
  const [open, setOpen] = useState(false);
  return (
    <div className="self-end">
      <Button
        onClick={() => setOpen(true)}
        className="bg-green-500 text-white flex items-center gap-4 font-tajwal font-bold"
      >
        <UserRoundPlus size={20} strokeWidth={1.25} />
        عميل جديد
      </Button>

      <AlertDialog dir="RTL" open={open} onOpenChange={setOpen}>
        <AlertDialogContent className="bg-gray-300">
          <AlertDialogHeader>
            <AlertDialogTitle className="w-full text-center font-tajwal font-bold text-xl">
              عميل جديد
            </AlertDialogTitle>
          </AlertDialogHeader>
          <Newform setOpen={setOpen}/>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default NewBtnClient;
