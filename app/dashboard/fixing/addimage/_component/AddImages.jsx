"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {  ImagePlus } from "@/lib/icons";
import Dropzone from "@/app/dashboard/fixing/addimage/_component/Dropzone";
import DailogBox from "@/components/sharedcompnent/DailogBox";
function AddImages({ carId, carImage ,cardId}) {
  const [addimage, setAddimage] = useState(false);
  return (
    <>
    <div className="flex items-end gap-2">
      <Button
        className="bg-primary text-primary-foreground h-7 flex items-center justify-between  "
        onClick={() => setAddimage(true)}
      >
        <ImagePlus size={20} /> 
      </Button>
      <span className="bg-primary/70 text-[.7rem] rounded-full px-1 text-primary-foreground ">{carImage}</span>
      </div>
      <DailogBox
        open={addimage}
        setOpen={setAddimage}
        title={
          <p>
            اضافة الصور سيارة رقم : <span> {carId} </span>
          </p>
        }
      >
        <Dropzone
          className="border   border-neutral-200 p-2 rounded-lg bg-slate-400 "
          carId={carId}
          cardId={cardId}
        />
      </DailogBox>
    </>
  );
}

export default AddImages;
