"use client";
import React from "react";
import DailogBox from "@/components/sharedcompnent/DailogBox";
import ShowCarImages from "@/components/sharedcompnent/ShowCarImages";

export const AddImage = ({ carId, open, setOpen }) => {
  return (
    <DailogBox open={open} setOpen={setOpen} title={"البوم الصور"}>
      <ShowCarImages carId={carId} />
    </DailogBox>
  );
};
