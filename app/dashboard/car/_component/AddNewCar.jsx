"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Car } from "@/lib/icons";
import CarForm from "./CarForm";
import DailogBox from "@/components/sharedcompnent/DailogBox";

function AddNewCar({ clientData }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="self-end">
      <Button
        onClick={() => setOpen(true)}
        className="bg-primary text-primary-foreground  flex items-center gap-4 font-tajwal font-bold"
      >
        <Car size={30} strokeWidth={1.25} />
        سيارة جديدة
      </Button>

      <DailogBox
        open={open}
        setOpen={setOpen}
        title={"سيارة جديدة"}
        borederRed={"border-primary"}
      >
        <CarForm setOpen={setOpen} clientData={clientData} />
      </DailogBox>
    </div>
  );
}

export default AddNewCar;
