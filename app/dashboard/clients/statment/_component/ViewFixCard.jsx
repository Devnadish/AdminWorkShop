"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye } from "@/lib/icons";
import DailogBox from "@/components/sharedcompnent/DailogBox";
import { DisplayFixCard } from "@/components/sharedcompnent/DisplayFixCard";

function ViewFixCard({ CardData }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex  items-center  ">
      <Button
        size="icon"
        className=" bg-primary text-primary-foreground"
        onClick={() => {
          setOpen(true);
        }}
      >
        <Eye />
      </Button>

      <DailogBox
        open={open}
        setOpen={setOpen}
        title={
          CardData.isClosed ? "منتهي وتم تسليم العميل" : "مازال تحت الصيانة"
        }
        borederRed={"border-primary"}
      >
        <DisplayFixCard CardData={CardData} />
      </DailogBox>
    </div>
  );
}

export default ViewFixCard;


