"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { UserRoundPlus } from "lucide-react";
import Newform from "../new/_component/Newform";
import DailogBox from "@/components/sharedcompnent/DailogBox";
function NewBtnClient() {
  const [open, setOpen] = useState(false);
  return (
    <div className="self-start">
      <Button
        onClick={() => setOpen(true)}
        className="bg-primary text-primary-foreground  flex items-center gap-4 font-tajwal font-bold "
      >
        <UserRoundPlus size={20} strokeWidth={1.25} />
        عميل جديد
      </Button>

      <DailogBox open={open} setOpen={setOpen} title={"عميل جديد"}>
        <Newform setOpen={setOpen} />
      </DailogBox>
    </div>
  );
}

export default NewBtnClient;
