"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { UserRoundPlus } from "lucide-react";
import Newform from "../../app/dashboard/clients/new/_component/Newform";
import Ttip from "@/components/sharedcompnent/Ttip";
import DailogBox from "@/components/sharedcompnent/DailogBox";

function NavBarNewClient() {
  const [open, setOpen] = useState(false);
  const iconColor="text-primary"
  return (
    <div>
      <Ttip tool={"عميل جديد"}>
        <Button
          onClick={() => setOpen(true)}
          className="w-9  rounded h-9 bg-background/80  shadow-lg border border-border  flex  items-center justify-center text-xl p-0"
        >
          <UserRoundPlus
            size={20}
            strokeWidth={1.25}
            className={iconColor}
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
