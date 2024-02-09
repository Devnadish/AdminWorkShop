"use client";
import React from "react";
import Submit from "@/components/sharedcompnent/Submit";
import ClearButton from "@/components/sharedcompnent/ClearButton";
import DailogBox from "@/components/sharedcompnent/DailogBox";

export const AddNote = ({ cardid, open, setOpen, handleNote }) => {
  return (
    <DailogBox open={open} setOpen={setOpen} title={" اضافة ملاحظات"}>
      <form
        action={handleNote}
        id="formNote"
        className="flex items-start flex-col gap-4 w-full"
      >
        <textarea
          id="formnote"
          name="note"
          className="bg-gray-100 w-full text-black text-sm resize-none border rounded-md border-black shadow-lg px-3"
          rows={7} />
        <div className="flex items-center gap-10 w-full justify-end">
          <Submit />
          <ClearButton formId={"formNote"} FoucFiled={"formnote"} />
        </div>
      </form>
    </DailogBox>
  );
};
