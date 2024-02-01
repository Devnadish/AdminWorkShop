"use client";
import Submit from "@/components/shared/Submit";
import ClearButton from "@/components/shared/ClearButton";
import { CardImage } from "./CardImage";
import { CardRecord } from "./CardRecord";

export const CardAction = () => {
  return (
    <div className="flex items-center justify-between  gap-4 w-full bg-gray-300 p-3 px-3 border-t-4 border-gray-900 shadow-xl">
<div className="flex item  gap-2 w-full">
        <CardRecord  />
        <CardImage />
      </div>
      <div className="flex item w-full gap-2 justify-end">
        <Submit color="bg-gray-600" />
        <ClearButton formId={"fixingForm"} FoucFiled={"serviceDetail"} color="bg-gray-800"/>
      </div>
    </div>
  );
};
