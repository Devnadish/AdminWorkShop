"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye } from "@/lib/icons";
import DailogBox from "@/components/sharedcompnent/DailogBox";
import { ImageDisplay } from "./ImageDisplay";

function ShowImages({ carId, carImage }) {
  const [open, setopen] = useState(false);

  return (
    <>
     
        <Button className="bg-primary/70 text-primary-foreground h-7" onClick={() => setopen(true)}>
          <Eye size={20} />
        </Button>
      
      <DailogBox
        open={open}
        setOpen={setopen}
        title={
          <p>
            البوم الصور سيارة رقم : <span> {carId} </span>
          </p>
        }
      >
        <ImageDisplay carImage={carImage} />
      </DailogBox>
    </>
  );
}

export default ShowImages;
