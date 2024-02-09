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
import Ttip from "@/components/sharedcompnent/Ttip";
import DailogBox from "@/components/sharedcompnent/DailogBox";

function NavBarNewClient() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Ttip tool={"عميل جديد"}>
        <Button
          onClick={() => setOpen(true)}
          className="w-9  rounded h-9 bg-transparent  shadow-lg border border-border text-primary-foreground flex  items-center justify-center text-xl p-0"
        >
          <UserRoundPlus
            size={20}
            strokeWidth={1.25}
            className="text-primary-foreground"
          />
        </Button>
      </Ttip>

      <DailogBox open={open} setOpen={setOpen} title={"عميل جديد"} borederRed={ "border-primary"}>
      <Newform />
      </DailogBox>

    </div>
  );
}

export default NavBarNewClient;
