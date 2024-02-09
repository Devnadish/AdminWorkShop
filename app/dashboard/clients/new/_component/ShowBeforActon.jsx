"use client";
import React from "react";

import { FormAction } from "./FormAction";
import DailogBox from "@/components/sharedcompnent/DailogBox";

export const ShowBeforActon = ({
  open,
  setOpen,
  type,
  ClientData,
  setClientData,
}) => {
  return (
    <>
      <DailogBox open={open} setOpen={setOpen} title={type === "update" ? "تعديل ملف عميل" : "حذف ملف عميل"} borederRed={type === "update" ? "border-primary" : "border-destructive"}>
        <FormAction
          type={type}
          ClientData={ClientData}
          setClientData={setClientData}
          setOpen={setOpen}
        />
      </DailogBox>
    </>
  );
};
