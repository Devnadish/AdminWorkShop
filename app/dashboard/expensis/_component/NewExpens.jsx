"use client";
import React, { useState } from "react";
import { GiExpense, Tag } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import DailogBox from "@/components/sharedcompnent/DailogBox";
import NewExpensisForm from "./NewExpensisForm";

function NewExpens({ AllTag }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full justify-start">
      <Button
        onClick={() => {
          setOpen(true);
        }}
        className="flex items-center gap-3"
      >
        <GiExpense size={25} />
        مصروف جديد
      </Button>
      <DailogBox
        open={open}
        setOpen={setOpen}
        title={"مصروف جديد"}
        borederRed={"border-primary"}
      >
        <NewExpensisForm AllTag={AllTag} />
      </DailogBox>
    </div>
  );
}

export default NewExpens;
