"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { UserRoundPlus } from "lucide-react";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Newform from './Newform';
import Ttip from '@/components/shared/Ttip';

function HeaderNewClient() {
    const [open, setOpen] = useState(false)
  return (
      <div>
          <Ttip tool={"عميل جديد"}>
        <Button onClick={()=>setOpen(true)}
       className= "w-9  rounded h-9 bg-transparent  shadow-lg border border-white/30 text-white flex  items-center justify-center text-xl p-0"
       >
          <UserRoundPlus size={20} strokeWidth={1.25} className="text-white/70" />
      </Button>
          </Ttip>

          <AlertDialog dir="RTL" open={open} onOpenChange={setOpen} >
              <AlertDialogContent className="bg-gray-300">
                  <AlertDialogHeader>
                      <AlertDialogTitle className="w-full text-center font-tajwal font-bold text-xl">عميل جديد</AlertDialogTitle>
                  </AlertDialogHeader>
                   <Newform />
                  <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                  </AlertDialogFooter>
              </AlertDialogContent>
          </AlertDialog>



      </div>
  )
}

export default HeaderNewClient
