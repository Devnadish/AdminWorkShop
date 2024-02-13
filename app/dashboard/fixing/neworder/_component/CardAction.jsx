"use client";
import Submit from "@/components/sharedcompnent/Submit";
import ClearButton from "@/components/sharedcompnent/ClearButton";
 

export const CardAction = () => {
  return (
      <div className="flex items-center justify-end  gap-4 w-full  p-3 px-3  ">
        <Submit color="bg-primary" />
        <ClearButton formId={"fixingForm"} FoucFiled={"serviceDetail"} />
    </div>
  );
};
