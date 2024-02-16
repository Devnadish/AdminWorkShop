"use client";
import React from "react";
import DailogBox from "@/components/sharedcompnent/DailogBox";
import ShowCarImages from "@/components/sharedcompnent/ShowCarImages";
import AddImages from "../../fixing/addimage/_component/AddImages";

export const AddImage = ({ carId, open, setOpen ,cardId}) => {
  return (
    <DailogBox open={open} setOpen={setOpen} title={"البوم الصور"}>
      <div className="flex items-center flex-col gap-4">
      <ShowCarImages carId={carId} />
      {/* <Button>Add image</Button> */}
      <AddImages carId={carId}  cardId={cardId} />
      </div>
    </DailogBox>
  );
};
