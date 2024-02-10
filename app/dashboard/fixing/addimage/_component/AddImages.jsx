"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {  ImagePlus } from "@/lib/icons";
import Dropzone from "@/app/dashboard/fixing/addimage/_component/Dropzone";
import DailogBox from "@/components/sharedcompnent/DailogBox";
function AddImages({ carId, carImage }) {
  const [addimage, setAddimage] = useState(false);
  return (
    <>
      <Button
        className="bg-secondary text-secondary-foreground h-7 flex items-center justify-between w-20 px-4"
        onClick={() => setAddimage(true)}
      >
        <ImagePlus size={20} /> <span>{carImage}</span>
      </Button>
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
        />
      </DailogBox>
    </>
  );
}

export default AddImages;
